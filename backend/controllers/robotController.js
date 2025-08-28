const Robot = require('../models/Robot');
const { validationResult } = require('express-validator');

// @desc    Get all robots for a user
// @route   GET /api/robots
// @access  Private
const getRobots = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = { user: req.user.id };
    
    // Add search functionality
    if (req.query.search) {
      filter.$or = [
        { name: { $regex: req.query.search, $options: 'i' } },
        { description: { $regex: req.query.search, $options: 'i' } }
      ];
    }

    const robots = await Robot.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'name email');

    const total = await Robot.countDocuments(filter);

    res.json({
      success: true,
      count: robots.length,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      data: robots
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get public robots
// @route   GET /api/robots/public
// @access  Public
const getPublicRobots = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const filter = { is_public: true };
    
    if (req.query.tags) {
      filter.tags = { $in: req.query.tags.split(',') };
    }

    const robots = await Robot.find(filter)
      .sort({ 'stats.views': -1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'name avatar')
      .select('-program'); // Don't send program code in public listings

    const total = await Robot.countDocuments(filter);

    res.json({
      success: true,
      count: robots.length,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      },
      data: robots
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Get single robot
// @route   GET /api/robots/:id
// @access  Private/Public (depending on robot privacy)
const getRobot = async (req, res) => {
  try {
    const robot = await Robot.findById(req.params.id).populate('user', 'name avatar bio');

    if (!robot) {
      return res.status(404).json({
        success: false,
        message: 'Robot not found'
      });
    }

    // Check if user can view this robot
    const canView = robot.is_public || 
                   (req.user && robot.user._id.toString() === req.user.id);

    if (!canView) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this robot'
      });
    }

    // Increment view count for public robots
    if (robot.is_public && req.user && robot.user._id.toString() !== req.user.id) {
      await Robot.findByIdAndUpdate(req.params.id, {
        $inc: { 'stats.views': 1 }
      });
    }

    res.json({
      success: true,
      data: robot
    });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        message: 'Robot not found'
      });
    }
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Create new robot
// @route   POST /api/robots
// @access  Private
const createRobot = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array()
      });
    }

    const robotData = {
      ...req.body,
      user: req.user.id
    };

    const robot = await Robot.create(robotData);

    res.status(201).json({
      success: true,
      data: robot
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Update robot
// @route   PUT /api/robots/:id
// @access  Private
const updateRobot = async (req, res) => {
  try {
    let robot = await Robot.findById(req.params.id);

    if (!robot) {
      return res.status(404).json({
        success: false,
        message: 'Robot not found'
      });
    }

    // Make sure user owns robot
    if (robot.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this robot'
      });
    }

    robot = await Robot.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    res.json({
      success: true,
      data: robot
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// @desc    Delete robot
// @route   DELETE /api/robots/:id
// @access  Private
const deleteRobot = async (req, res) => {
  try {
    const robot = await Robot.findById(req.params.id);

    if (!robot) {
      return res.status(404).json({
        success: false,
        message: 'Robot not found'
      });
    }

    // Make sure user owns robot
    if (robot.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this robot'
      });
    }

    await robot.deleteOne();

    res.json({
      success: true,
      message: 'Robot deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getRobots,
  getPublicRobots,
  getRobot,
  createRobot,
  updateRobot,
  deleteRobot
};
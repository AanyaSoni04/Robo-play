const express = require('express');
const { body } = require('express-validator');
const {
  getRobots,
  getPublicRobots,
  getRobot,
  createRobot,
  updateRobot,
  deleteRobot
} = require('../controllers/robotController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, getRobots)
  .post(
    protect,
    [
      body('name', 'Robot name is required').notEmpty(),
      body('parts', 'Robot parts must be an array').isArray()
    ],
    createRobot
  );

router.get('/public', getPublicRobots);

router.route('/:id')
  .get(getRobot)
  .put(protect, updateRobot)
  .delete(protect, deleteRobot);

module.exports = router;
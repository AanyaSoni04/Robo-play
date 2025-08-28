const mongoose = require('mongoose');

const PartSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['body', 'motor', 'wheel', 'sensor', 'light', 'speaker', 'arm']
  },
  x: {
    type: Number,
    required: true,
    min: 0
  },
  y: {
    type: Number,
    required: true,
    min: 0
  },
  rotation: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: '#3B82F6',
    match: [/^#[0-9A-F]{6}$/i, 'Please provide a valid hex color']
  },
  properties: {
    type: Map,
    of: mongoose.Schema.Types.Mixed
  }
});

const ProgramSchema = new mongoose.Schema({
  blocks: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    default: ''
  },
  version: {
    type: String,
    default: '1.0'
  }
});

const RobotSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Robot name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  parts: [PartSchema],
  program: ProgramSchema,
  thumbnail: {
    type: String,
    default: ''
  },
  is_public: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  stats: {
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    forks: { type: Number, default: 0 }
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexing for better query performance
RobotSchema.index({ user: 1, createdAt: -1 });
RobotSchema.index({ is_public: 1, createdAt: -1 });
RobotSchema.index({ tags: 1 });

// Virtual for part count
RobotSchema.virtual('partCount').get(function() {
  return this.parts.length;
});

module.exports = mongoose.model('Robot', RobotSchema);
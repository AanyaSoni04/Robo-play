const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Challenge title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Challenge description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  difficulty: {
    type: String,
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'beginner'
  },
  category: {
    type: String,
    required: true,
    enum: ['movement', 'sensors', 'logic', 'creativity', 'advanced']
  },
  required_parts: [{
    type: String,
    enum: ['body', 'motor', 'wheel', 'sensor', 'light', 'speaker', 'arm']
  }],
  success_criteria: [{
    type: String,
    required: true
  }],
  hint: {
    type: String,
    maxlength: [300, 'Hint cannot exceed 300 characters']
  },
  points: {
    type: Number,
    default: 10,
    min: [1, 'Points must be at least 1'],
    max: [100, 'Points cannot exceed 100']
  },
  tutorial_steps: [{
    step: Number,
    instruction: String,
    image_url: String
  }],
  is_active: {
    type: Boolean,
    default: true
  },
  completion_count: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for better query performance
ChallengeSchema.index({ category: 1, difficulty: 1 });
ChallengeSchema.index({ is_active: 1, points: -1 });

module.exports = mongoose.model('Challenge', ChallengeSchema);
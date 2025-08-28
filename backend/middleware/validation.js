
const { body, validationResult } = require('express-validator');

const validateRegister = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Please enter a password with 6 or more characters'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Please include a valid email'),
  body('password').exists().withMessage('Password is required'),
];

const validateRobotCreation = [
  body('name').notEmpty().withMessage('Robot name is required'),
  body('parts').isArray().withMessage('Robot parts must be an array'),
];

const validateChallengeCreation = [
  body('title').notEmpty().withMessage('Challenge title is required'),
  body('description').notEmpty().withMessage('Challenge description is required'),
  body('difficulty').isIn(['beginner', 'intermediate', 'advanced']).withMessage('Invalid difficulty level'),
  body('category').notEmpty().withMessage('Category is required'),
];

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

module.exports = {
  validateRegister,
  validateLogin,
  validateRobotCreation,
  validateChallengeCreation,
  validateRequest,
};
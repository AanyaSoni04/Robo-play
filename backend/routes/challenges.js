const express = require('express');
const { body } = require('express-validator');
const {
  getChallenges,
  getChallenge,
  createChallenge,
  updateChallenge,
  deleteChallenge
} = require('../controllers/challengeController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(protect, getChallenges)
  .post(
    protect,
    [
      body('title', 'Title is required').notEmpty(),
      body('description', 'Description is required').notEmpty(),
      body('difficulty', 'Difficulty is required').notEmpty(),
      body('category', 'Category is required').notEmpty(),
      body('required_parts', 'Required parts must be an array').isArray(),
      body('success_criteria', 'Success criteria must be an array').isArray(),
      body('points', 'Points must be a number').isNumeric()
    ],
    createChallenge
  );

router.route('/:id')
  .get(protect, getChallenge)
  .put(protect, updateChallenge)
  .delete(protect, deleteChallenge);

module.exports = router;
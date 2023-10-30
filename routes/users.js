const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/controller.users');

const User = require('../models/model.user');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/middleware.advancedResults');
const { protect, authorize } = require('../middleware/middleware.auth');

router.use(protect);
router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User), getUsers)
  .post(createUser);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;

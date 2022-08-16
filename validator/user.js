const { body } = require('express-validator');
const { validate } = require('../middleware/validator');
const { User } = require('../model');

exports.register = validate([
  //Validate username
  body('user.username')
    .notEmpty()
    .withMessage('Username is required')
    .bail()
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) {
        throw new Error('Username already exists');
      }
    }),
  //Validate password
  body('user.password').notEmpty().withMessage('Password is required'),
  //Validate email
  body('user.email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email is invalid')
    .bail()
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error('Email already exists');
      }
    }),
]);

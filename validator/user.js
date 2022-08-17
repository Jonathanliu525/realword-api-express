const { body } = require('express-validator');
const { validate } = require('../middleware/validator');
const { User } = require('../model');
const md5 = require('../util/md5');

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

exports.login = [
  validate([
    //Validate email
    body('user.email')
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Email is invalid'),
    //Validate password
    body('user.password').notEmpty().withMessage('Password is required'),
  ]),
  validate([
    body('user.email').custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select('+password');
      if (!user) {
        return Promise.reject('Email or password is incorrect');
      }
      //Store user in req object
      req.user = user;
    }),
  ]),
  validate([
    body('user.password').custom(async (password, { req }) => {
      const user = req.user;
      if (user.password !== md5(password)) {
        return Promise.reject('Email or password is incorrect');
      }
    }),
  ]),
];

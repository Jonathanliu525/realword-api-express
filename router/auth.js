const router = require('Express').Router();
const authController = require('../controllers/authController');
const { body, validationResult } = require('express-validator');

const { User } = require('../model');

//Authentication;
router.post(
  '/login',

  authController.login,
);

//Registration
router.post(
  '/',
  [
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
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  authController.register,
);

module.exports = router;

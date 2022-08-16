const router = require('Express').Router();
const authController = require('../controllers/authController');
const userValidator = require('../validator/user');

//Authentication;
router.post(
  '/login',

  authController.login,
);

//Registration
router.post('/', userValidator.register, authController.register);

module.exports = router;

const router = require('express').Router();
const userController = require('../controllers/userController');
const { auth } = require('../middleware/auth');

//Get current user
router.get('/', auth, userController.getCurrentUser);

//Update current user
router.put('/', auth, userController.updateCurrentUser);

module.exports = router;

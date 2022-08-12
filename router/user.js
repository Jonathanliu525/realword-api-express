const router = require('express').Router();
const userController = require('../controllers/userController');

//Get current user
router.get('/', userController.getCurrentUser);

//Update current user
router.put('/', userController.updateCurrentUser);

module.exports = router;

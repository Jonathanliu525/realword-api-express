const router = require('express').Router();
const profileController = require('../controllers/profileController');
//Get Profiles
router.get('/:username', profileController.getProfile);

//Follow user
router.post('/:username/follow', profileController.followUser);

//Unfollow user
router.delete('/:username/follow', profileController.unfollowUser);

module.exports = router;

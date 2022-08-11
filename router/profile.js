const router = require('express').Router();

//Get Profiles
router.get('/:username', (req, res, next) => {
  try {
    res.send('Get /api/profiles/:username');
  } catch (error) {
    next(error);
  }
});

//Follow user
router.post('/:username/follow', (req, res, next) => {
  try {
    res.send('Post /api/profiles/:username/follow');
  } catch (error) {
    next(error);
  }
});

//Unfollow user
router.delete('/:username/follow', (req, res, next) => {
  try {
    res.send('Delete /api/profiles/:username/follow');
  } catch (error) {
    next(error);
  }
});

module.exports = router;

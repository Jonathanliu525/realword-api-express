const router = require('express').Router();

//Get current user
router.get('/', (req, res, next) => {
  try {
    res.send('Get /api/user');
  } catch (error) {
    next(error);
  }
});

//Update current user
router.put('/', (req, res, next) => {
  try {
    res.send('Put /api/user');
  } catch (error) {
    next(error);
  }
});

module.exports = router;

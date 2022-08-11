const router = require('Express').Router();

//Authentication
router.post('/login', (req, res, next) => {
  try {
    res.send('Post /api/users/login');
  } catch (error) {
    next(error);
  }
});

//Reegistration
router.post('/', (req, res, next) => {
  try {
    res.send('Post /api/users');
  } catch (error) {
    next(error);
  }
});

module.exports = router;

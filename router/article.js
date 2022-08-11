const router = require('express').Router();

//List Articles
router.get('/', (req, res, next) => {
  try {
    res.send('Get /api/articles');
  } catch (error) {
    next(error);
  }
});

//Feed Articles
router.get('/feed', (req, res, next) => {
  try {
    res.send('Get /api/articles/feed');
  } catch (error) {
    next(error);
  }
});

//Get Articles
router.get('/:slug', (req, res, next) => {
  try {
    res.send('Get /api/articles/:slug');
  } catch (error) {
    next(error);
  }
});

//Create Articles
router.post('/', (req, res, next) => {
  try {
    res.send('Post /api/articles/');
  } catch (error) {
    next(error);
  }
});

//Update Articles
router.put('/', (req, res, next) => {
  try {
    res.send('Put /api/articles/');
  } catch (error) {
    next(error);
  }
});

//Delete Articles
router.delete('/:slug', (req, res, next) => {
  try {
    res.send('Delete /api/articles/:slug');
  } catch (error) {
    next(error);
  }
});

//Favorite Articles
router.post('/:slug/favorite', (req, res, next) => {
  try {
    res.send('Post /api/articles/:slug/favorite');
  } catch (error) {
    next(error);
  }
});

//Unfavorite Articles
router.delete('/:slug', (req, res, next) => {
  try {
    res.send('Delete /api/articles/:slug/favorite');
  } catch (error) {
    next(error);
  }
});
//Delete Articles
router.delete('/:slug', (req, res, next) => {
  try {
    res.send('Delete /api/articles/:slug');
  } catch (error) {
    next(error);
  }
});

module.exports = router;

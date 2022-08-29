const router = require('express').Router();
const articleController = require('../controllers/articleController');
const { auth } = require('../middleware/auth');
const articleValidator = require('../validator/article');

//List Articles
router.get('/', articleController.list);

//Feed Articles
router.get('/feed', articleController.feed);

//Get Articles
router.get(
  '/:articleId',
  articleValidator.getArticle,
  articleController.getArticle,
);

//Create Articles
router.post(
  '/',
  auth,
  articleValidator.createArticle,
  articleController.createArticle,
);

//Update Articles
router.put('/', articleController.updateArticle);

//Delete Articles
router.delete('/:articleId', articleController.deleteArticles);

//Favorite Articles
router.post('/:articleId/favorite', articleController.favoriteArticle);

//Unfavorite Articles
router.delete('/:articleId', articleController.unfavoriteArticle);

module.exports = router;

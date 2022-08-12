const router = require('express').Router();
const articleController = require('../controllers/articleController');

//List Articles
router.get('/', articleController.list);

//Feed Articles
router.get('/feed', articleController.feed);

//Get Articles
router.get('/:slug', articleController.getArticle);

//Create Articles
router.post('/', articleController.createArticle);

//Update Articles
router.put('/', articleController.updateArticle);

//Delete Articles
router.delete('/:slug', articleController.deleteArticles);

//Favorite Articles
router.post('/:slug/favorite', articleController.favoriteArticle);

//Unfavorite Articles
router.delete('/:slug', articleController.unfavoriteArticle);

module.exports = router;

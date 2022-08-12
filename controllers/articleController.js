//List Articles
exports.list = async (req, res, next) => {
  try {
    res.send('Get /api/articles');
  } catch (error) {
    next(error);
  }
};

//Feed Articles
exports.feed = async (req, res, next) => {
  try {
    res.send('Get /api/articles/feed');
  } catch (error) {
    next(error);
  }
};

//Get Articles
exports.getArticle = async (req, res, next) => {
  try {
    res.send('Get /api/articles/:slug');
  } catch (error) {
    next(error);
  }
};

//Create Articles
exports.createArticle = async (req, res, next) => {
  try {
    res.send('Post /api/articles/');
  } catch (error) {
    next(error);
  }
};

//Update Articles
exports.updateArticle = async (req, res, next) => {
  try {
    res.send('Put /api/articles/');
  } catch (error) {
    next(error);
  }
};

//Delete Articles
exports.deleteArticles = async (req, res, next) => {
  try {
    res.send('Delete /api/articles/:slug');
  } catch (error) {
    next(error);
  }
};

//Favorite Articles
exports.favoriteArticle = async (req, res, next) => {
  try {
    res.send('Post /api/articles/:slug/favorite');
  } catch (error) {
    next(error);
  }
};

//Unfavorite Articles
exports.unfavoriteArticle = async (req, res, next) => {
  try {
    res.send('Delete /api/articles/:slug/favorite');
  } catch (error) {
    next(error);
  }
};

const { body, param } = require('express-validator');
const { validate } = require('../middleware/validator');
const mongoose = require('mongoose');

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('Title cannot be empty'),
  body('article.description')
    .notEmpty()
    .withMessage('Description cannot be empty'),
  body('article.body').notEmpty().withMessage('Body cannot be empty'),
]);

exports.getArticle = validate([
  param('articleId').custom(async (value) => {
    if (!mongoose.isValidObjectId(value)) {
      return Promise.reject('The ObjectId is not valide');
    }
  }),
]);

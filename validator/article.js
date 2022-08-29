const { body } = require('express-validator');
const { validate } = require('../middleware/validator');

exports.createArticle = validate([
  body('article.title').notEmpty().withMessage('Title cannot be empty'),
  body('article.description')
    .notEmpty()
    .withMessage('Description cannot be empty'),
  body('article.body').notEmpty().withMessage('Body cannot be empty'),
]);

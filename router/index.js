const express = require('express');
const router = express.Router();
const auth = require('./auth.js');
const user = require('./user.js');
const profiles = require('./profile.js');
const articles = require('./article.js');

//Load auth router
router.use('/users', auth);
//Load user router
router.use('/user', user);
//Load profile router
router.use('/profiles', profiles);
//Load article router
router.use('/articles', articles);

module.exports = router;

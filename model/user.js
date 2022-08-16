const mongoose = require('mongoose');
const baseModel = require('./baseModel');
const md5 = require('../util/md5');

const userSchema = new mongoose.Schema({
  ...baseModel,
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (password) => md5(password),
    select: false,
  },
  bio: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('User', userSchema);

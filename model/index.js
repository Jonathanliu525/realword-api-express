const mongoose = require('mongoose');
const { dbUrl } = require('../config/config.default');

mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Fail to connect to MongoDB: ', err);
});
db.once('open', () => {
  console.log('Successfully Connected to MongoDB');
});

module.exports = {
  User: require('./user'),
  Article: require('./article'),
};

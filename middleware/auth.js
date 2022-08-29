const jwt = require('../util/jwt');
const { jwtSecret } = require('../config/config.default');
const { User } = require('../model');

exports.auth = async (req, res, next) => {
  //Get the token from headers
  let token = req.headers.authorization;
  token = token ? token.split('Bearer ')[1] : null;

  // Invalid => response 401
  if (!token) res.status(401).end();
  console.log('This is auth');
  try {
    const { userId } = await jwt.verify(token, jwtSecret);
    req.user = await User.findById(userId);
    next();
  } catch (error) {
    res.status(401).end();
  }
  //Validate token

  //Validate => put the user info into request

  //check token

  // validate the token
};

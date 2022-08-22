const { User } = require('../model');
const jwt = require('../util/jwt');
const { jwtSecret } = require('../config/config.default');

//User login
exports.login = async (req, res, next) => {
  try {
    //1 Validate user

    //2 Generate Token
    const user = req.user.toJSON();
    delete user.password;
    const token = await jwt.sign({ userId: user._id }, jwtSecret); //3 Send token to client
    res.status(200).json({ ...user, token });
  } catch (error) {
    next(error);
  }
};
//User regiter
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user);
    await user.save();
    user = user.toJSON();
    delete user.password;
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

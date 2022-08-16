const { User } = require('../model');
//User login
exports.login = async (req, res, next) => {
  try {
    res.send('Post /api/users/login');
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

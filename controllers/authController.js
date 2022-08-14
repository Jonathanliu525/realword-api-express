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
    console.log(req.body);

    const user = new User(req.body.user);

    await user.save();
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

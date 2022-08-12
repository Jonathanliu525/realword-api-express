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
    res.send('Post /api/users');
  } catch (error) {
    next(error);
  }
};

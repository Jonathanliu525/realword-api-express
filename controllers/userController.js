//Get current user
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    next(error);
  }
};

//Update current user
exports.updateCurrentUser = async (req, res, next) => {
  try {
    res.send('Put /api/user');
  } catch (error) {
    next(error);
  }
};

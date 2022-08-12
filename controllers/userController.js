//Get current user
exports.getCurrentUser = async (req, res, next) => {
  try {
    res.send('Get /api/user');
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

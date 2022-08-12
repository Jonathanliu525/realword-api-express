//Get profile

exports.getProfile = async (req, res, next) => {
  try {
    res.send('Get /api/profiles/:username');
  } catch (error) {
    next(error);
  }
};

//Follow user
exports.followUser = async (req, res, next) => {
  try {
    res.send('Post /api/profiles/:username/follow');
  } catch (error) {
    next(error);
  }
};

//Unfollow user
exports.unfollowUser = async (req, res, next) => {
  try {
    res.send('Delete /api/profiles/:username/follow');
  } catch (error) {
    next(error);
  }
};

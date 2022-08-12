const util = require('util');

module.exports = () => {
  return (err, req, res, next) => {
    console.log(err);
    res.status(500).send({
      message: err.message,
      error: util.format(err),
    });
  };
};

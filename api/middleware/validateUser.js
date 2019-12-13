const db = require("../routes/users/userDb");

const validateUser = () => {
  return (req, res, next) => {
    // do your magic!
    if (!req.body.name) {
      res.status(404).json({ message: "Please supply a name" });
    } else {
      req.userName = req.body.name;
      next();
    }
  };
};

module.exports = validateUser;

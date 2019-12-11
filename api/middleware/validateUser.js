const db = require("../routes/users/userDb");

const validateUser = () => {
  return (req, res, next) => {
    // do your magic!
    if (!req.body.name) {
      res.status(404).json({ message: "Please supply a name" });
    }

    db.insert(req.body)
      .then(user => {
        req.newUser = user;
        next();
      })
      .catch(err => next(err));
  };
};

module.exports = validateUser;

const db = require("../routes/users/userDb");

const validateUserId = () => {
  return (req, res, next) => {
    db.getById(req.params.id)
      .then(user => {
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch(err => {
        res.status(500).json({ message: "Error retrieving the user" });
      });
  };
};

module.exports = validateUserId;

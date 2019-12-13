const db = require("../routes/posts/postDb");

const validatePost = () => {
  return (req, res, next) => {
    // do your magic!
    if (!req.body.text) {
      res.status(404).json({ message: "Please supply a post" });
    }

    next();
  };
};

const validatePostId = () => {
  return (req, res, next) => {
    db.getById(req.params.id)
      .then(post => {
        if (post) {
          req.post = post;
          next();
        } else {
          res.status(400).json({ message: "That Id does not exist" });
        }
      })
      .catch(err => next(err));
  };
};

module.exports = { validatePost, validatePostId };

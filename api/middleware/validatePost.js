const db = require("../routes/posts/postDb");

const validatePost = () => {
  return (req, res, next) => {
    // do your magic!
    if (!req.body.text) {
      res.status(404).json({ message: "Please supply a post" });
    }
  };
};

const validatePostId = () => {
  return (req, res, next) => {
    db.getById(req.params.id)
      .then(postId => {
        req.postId = postId;
        next();
      })
      .catch(err => next(err));
  };
};

module.exports = { validatePost, validatePostId };

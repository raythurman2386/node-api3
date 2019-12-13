const postRouter = require("express").Router({ mergeParams: true });
const db = require("./postDb");

const {
  validatePost,
  validatePostId
} = require("../../middleware/validatePost");

postRouter
  .get("/", (req, res, next) => {
    // do your magic!
    db.get()
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(err => next(err));
  })
  .get("/:id", validatePostId(), (req, res) => {
    // do your magic!
    res.status(200).json(req.post);
  })
  .delete("/:id", validatePostId(), (req, res, next) => {
    // do your magic!
    db.remove(req.post.id)
      .then(post => {
        res.json(post);
      })
      .catch(err => next());
  })
  .put("/:id", validatePostId(), validatePost(), (req, res) => {
    // do your magic!
  });

module.exports = postRouter;

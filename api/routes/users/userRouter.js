// @ts-nocheck
const userRouter = require("express").Router({ mergeParams: true });
const db = require("./userDb");
const posts = require("../posts/postDb");
const validateUserId = require("../../middleware/validateUserId");
const validateUser = require("../../middleware/validateUser");
const { validatePost } = require("../../middleware/validatePost");

userRouter

  .post("/", validateUser(), (req, res, next) => {
    // do your magic!
    db.insert({ name: req.userName })
      .then(user => {
        res.json(user);
      })
      .catch(err => next(err));
  })

  .post("/:id/posts", validateUserId(), validatePost(), (req, res, next) => {
    posts
      .insert({ ...req.body, user_id: req.params.id })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => next(err));
  })

  .get("/", (req, res, next) => {
    // do your magic!
    db.get()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => next(err));
  })

  .get("/:id", validateUserId(), (req, res) => {
    // do your magic!
    res.json(req.user);
  })

  .get("/:id/posts", validateUserId(), (req, res, next) => {
    // do your magic!
    db.getUserPosts(req.user.id)
      .then(userPosts => {
        res.status(200).json(userPosts);
      })
      .catch(err => next(err));
  })

  .delete("/:id", validateUserId(), (req, res) => {
    // do your magic!
    db.remove(req.user.id)
      .then(user => {
        res.status(200).json(req.user);
      })
      .catch(err => next(err));
  })

  .put("/:id", validateUserId(), validateUser(), (req, res) => {
    // do your magic!
    db.update(req.user.id, req.body)
      .then(user => {
        res.status(200).json(req.body);
      })
      .catch(err => next(err));
  });

module.exports = userRouter;

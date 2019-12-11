// @ts-nocheck
const express = require("express");
const db = require("./userDb");
const validateUserId = require("../../middleware/validateUserId");
const validateUser = require("../../middleware/validateUser");

const router = express.Router();

router.post("/", validateUser(), (req, res) => {
  // do your magic!
  db.insert(req.body)
    .then(user => {
      req.newUser = user;
      next();
    })
    .catch(err => next(err));
});

router.post("/:id/posts", validateUserId(), (req, res) => {
  // TODO
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
  db.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => next(err));
});

router.get("/:id", validateUserId(), (req, res) => {
  // do your magic!
  res.json(req.user);
});

router.get("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
  db.getUserPosts(req.user.id)
    .then(userPosts => {
      res.status(200).json(userPosts);
    })
    .catch(err => next(err));
});

router.delete("/:id", validateUserId(), (req, res) => {
  // do your magic!
  db.remove(req.user.id)
    .then(user => {
      res.status(200).json(req.user);
    })
    .catch(err => next(err));
});

router.put("/:id", validateUserId(), validateUser(), (req, res) => {
  // do your magic!
  db.update(req.user.id, req.body)
    .then(user => {
      res.status(200).json(req.body);
    })
    .catch(err => next(err));
});

module.exports = router;

// @ts-nocheck
const userRouter = require("express").Router();
const db = require("./userDb");
const posts = require("../posts/postDb");
const validateUserId = require("../../middleware/validateUserId");
const validateUser = require("../../middleware/validateUser");
const { validatePost } = require("../../middleware/validatePost");

// Get all users
const getUsers = async (req, res, next) => {
  // do your magic!
  try {
    const users = await db.get();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Get user by id
const getUserById = async (req, res, next) => {
  try {
    const user = await db.getById(req.user.id);
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Get users posts
const getUsersPost = async (req, res, next) => {
  // do your magic!
  try {
    const userPosts = await db.getUserPosts(req.user.id);
    return res.status(200).json(userPosts);
  } catch (error) {
    next(error);
  }
};

// Add a user
const addUser = async (req, res, next) => {
  // do your magic!
  try {
    const newUser = await db.insert({ name: req.userName });
    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

// add a user post

// Update a user

// delete a user

userRouter

  .post("/", validateUser(), addUser)

  .post("/:id/posts", validateUserId(), validatePost(), (req, res, next) => {
    posts
      .insert({ ...req.body, user_id: req.params.id })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => next(err));
  })

  .get("/", getUsers)

  .get("/:id", validateUserId(), getUserById)

  .get("/:id/posts", validateUserId(), getUsersPost)

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

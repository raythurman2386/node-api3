// @ts-nocheck
const postRouter = require("express").Router({ mergeParams: true });
const db = require("./postDb");

const {
  validatePost,
  validatePostId
} = require("../../middleware/validatePost");

// get posts
const getPosts = async (req, res, next) => {
  try {
    const posts = await db.get();
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// get post by id
const getPostById = async (req, res, next) => {
  try {
    const post = await db.get(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
// update post
const updatePost = async (req, res, next) => {
  const updatedPost = {
    user_id: req.body.user_id,
    text: req.body.text
  };

  try {
    const post = await db.update(req.params.id, updatedPost);
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// delete post
const deletePost = async (req, res, next) => {
  try {
    const post = await db.remove(req.post.id);
    return res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

postRouter
  .get("/", getPosts)
  .get("/:id", validatePostId(), getPostById)
  .delete("/:id", validatePostId(), deletePost)
  .put("/:id", validatePostId(), validatePost(), updatePost);

module.exports = postRouter;

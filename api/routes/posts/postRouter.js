const express = require("express");
const {
  validatePost,
  validatePostId
} = require("../../middleware/validatePost");
const router = express.Router();

router.get("/", (req, res) => {
  // do your magic!
  res.status(200).json({ message: "Post Works!" });
});

router.get("/:id", validatePostId(), (req, res) => {
  // do your magic!
});

router.delete("/:id", validatePostId(), (req, res) => {
  // do your magic!
});

router.put("/:id", validatePostId(), validatePost(), (req, res) => {
  // do your magic!
});

module.exports = router;

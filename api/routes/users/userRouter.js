const express = require("express");
const validateUserId = require("../../middleware/validateUserId");

const router = express.Router();

router.post("/", (req, res) => {
  // do your magic!
});

router.post("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
});

router.get("/", (req, res) => {
  // do your magic!
  res.status(200).json({ message: "User Works" });
});

router.get("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

router.get("/:id/posts", validateUserId(), (req, res) => {
  // do your magic!
});

router.delete("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

router.put("/:id", validateUserId(), (req, res) => {
  // do your magic!
});

module.exports = router;

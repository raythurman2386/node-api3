const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Did this work??" });
});

router.get("/api", (req, res) => {
  res.status(200).json({ message: "Welcome to Node 3 API" });
});

module.exports = router;

const testRouter = require("express").Router();

testRouter
  .get("/", (req, res) => {
    res.status(200).json({ message: "Did this work??" });
  })
  .get("/api", (req, res) => {
    res.status(200).json({ message: "Welcome to Node 3 API" });
  });

module.exports = testRouter;

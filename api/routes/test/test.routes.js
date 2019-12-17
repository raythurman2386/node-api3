const testRouter = require("express").Router();
const multer = require("multer");

const upload = multer({ dest: __dirname + "/uploads/images" });

testRouter
  .get("/", (req, res) => {
    res.status(200).json({ message: "Did this work??" });
  })
  .get("/api", (req, res) => {
    res.status(200).json({ message: "Welcome to Node 3 API" });
  })
  .post("/upload", upload.single("photo"), (req, res) => {
    if (req.file) {
      res.json(req.file);
    } else {
      res.json({ message: "Well WTF mate!" });
    }
  });

module.exports = testRouter;

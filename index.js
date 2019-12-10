// code away!
const express = require("express");
const logger = require("./api/middleware/logger");

const server = express();
const host = "127.0.0.1";
const port = 4000;

server.use(logger());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ message: "Lets write some middleware" });
});

server.listen(port, host, (req, res) => {
  console.log(`The server is listening on http://${host}:${port}`);
});

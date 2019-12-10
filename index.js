// code away!
const express = require("express");
const logger = require("./server");

const server = express();
const host = "127.0.0.1";
const port = 4000;

server.use(express.json());
server.use(logger);

const auth = (req, res, next) => {
  if (req.url === "/hello") {
    next();
  } else {
    res.send("You shall not pass!");
  }
};

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.get("/hello", auth, (req, res) => {
  console.log("Gate Opening... ");
  console.log("Inside and safe!");
  res.send("Welcome!");
});

server.listen(port, host, (req, res) => {
  console.log(`The server is listening on http://${host}:${port}`);
});

const express = require("express");
const middleware = require("./middleware");
// const routes = require("./routes");

const server = express();

server.use(express.json());
middleware(server);
// routes(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Did this work??" });
});

module.exports = server;

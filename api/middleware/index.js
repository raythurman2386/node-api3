const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const logger = require("./logger");

module.exports = server => {
  server.use(helmet());
  server.use(express());
  server.use(express.json());
  server.use(express.static("public"));
  server.use(cors());
  server.use(logger());
};

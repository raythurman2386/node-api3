const helmet = require("helmet");
const cors = require("cors");
// const morgan = require("morgan");
const logger = require("./logger");

module.exports = server => {
  server.use(helmet());
  server.use(cors());
  server.use(logger());
};

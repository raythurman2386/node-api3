const helmet = require("helmet");
const cors = require("cors");
const logger = require("./logger");
const { routeError, serverError } = require("./errors");

module.exports = server => {
  server.use(helmet());
  server.use(cors());
  server.use(logger());
  server.use(routeError());
  server.use(serverError());
};

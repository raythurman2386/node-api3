const testRoutes = require("./test/test.routes");
const postRoutes = require("./posts/postRouter");
const userRoutes = require("./users/userRouter");
const { routeError, serverError } = require("../middleware/errors");

module.exports = server => {
  server.use("/", testRoutes);
  server.use("/api/posts", postRoutes);
  server.use("/api/users", userRoutes);
  server.use(routeError());
  server.use(serverError());
};

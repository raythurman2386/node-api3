const testRoutes = require("./test/test.routes");
const postRoutes = require("./posts/postRouter");
const userRoutes = require("./users/userRouter");

module.exports = server => {
  server.use("/", testRoutes);
  server.use("/api/posts", postRoutes);
  server.use("/api/users", userRoutes);
};

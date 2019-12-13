const routeError = () => {
  return (req, res) => {
    res.status(404).json({ message: "Route not found" });
  };
};

const serverError = () => {
  return (err, req, res, next) => {
    res.status(500).json({
      message: "An internal error occurred"
    });
  };
};

module.exports = {
  routeError,
  serverError
};

module.exports = () => (req, res, next) => {
  console.log(
    `${req.ip} | ${req.method} | ${req.url} | ${req.get("User-Agent")} `
  );

  next();
};

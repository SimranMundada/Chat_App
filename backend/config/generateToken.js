const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "simran", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
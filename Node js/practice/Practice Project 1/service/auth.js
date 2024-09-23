const jwt = require("jsonwebtoken");
const secretKey = "krishna1234";

const setUser = (user) => {
  return jwt.sign(user, secretKey);
};

const getUser = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = {
  setUser,
  getUser,
};

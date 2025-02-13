const crypto = require("crypto");
const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

// Function to generate a random string for JWT secret
function generateRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex") // Convert to hexadecimal string
    .slice(0, length); // Trim to desired length
}

// Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "1d" });
};

//getting token
const getTokenFrom = (req) => {
  const authorization = req.get("authorization");

  if (authorization && authorization.startsWith("bearer ")) {
    return authorization.replace("bearer ", "");
  }
};

module.exports = {
  generateRandomString,
  generateToken,
  getTokenFrom,
};

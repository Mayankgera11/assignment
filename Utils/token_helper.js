const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, (err, authData) => {
      if (err) {
        res.status(403).json({ error: "Forbidden" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).json({ error: "Forbidden" });
  }
}

module.exports = verifyToken;

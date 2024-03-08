const { generateAccessToken } = require("../Models/token");
function generateAccessToke(req, res) {
  try {
    if (req.body.username) {
      const token = generateAccessToken(req.body.username);
      res.json(token);
    } else {
      throw new Error("username not given");
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = { generateAccessToke };

const express = require("express");
const tokenRouter = express.Router();

const tokenController = require("../controllers/token.controller");

tokenRouter.post("/", tokenController.generateAccessToke);

module.exports = tokenRouter;

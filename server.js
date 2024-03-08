const express = require("express");
const app = express();

const PORT = 4000;

const courseRouter = require("./routes/course.router");
const tokenRouter = require("./routes/token.router");
const swaggerJSdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const verifyToken = require("./Utils/token_helper");
const dotenv = require("dotenv");
const YAML = require("yamljs");
dotenv.config();

const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());

app.use("/register", tokenRouter);
app.use("/courses", verifyToken, courseRouter);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

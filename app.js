const express = require("express");
const app = express();

const jokesRouter = require("./config/routes/jokes.routes")

require("./config/express.config") (app);

app.use("/", jokesRouter)

module.exports = app
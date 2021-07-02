const express = require("express");
const app = express();

require("./config/express.config") (app);

module.exports = app
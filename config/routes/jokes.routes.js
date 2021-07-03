const express = require("express");
const router = express.Router();

const jokesController = require("../../controllers/jokes.controller")

router.get("/", jokesController.list);

router.get("/newJoke", jokesController.createJoke)

router.get("/createNewJoke", jokesController.doCreateJoke)

module.exports = router;
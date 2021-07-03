const express = require("express");

module.exports = (app) => {
    const hbs = require("hbs");
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.set("views", __dirname + "/../views");
    app.set("view engine", "hbs");
    app.use(express.static(__dirname + "/../public"));
}
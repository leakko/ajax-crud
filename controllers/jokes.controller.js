const { default: axios } = require("axios")


module.exports.list = (req, res, next) => {
    axios.get("http://localhost:8000/jokes")
        .then((jokes) => {
            res.render("home", {jokesArr: jokes.data})
        })
        .catch((e => {
            console.error(e)
        }))
}

module.exports.createJoke = (req, res, next) => {
    res.render("form")
}

module.exports.doCreateJoke = (req, res, next) => {
    res.redirect("/")
}
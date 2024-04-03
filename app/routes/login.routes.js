module.exports = (app) => {
  const login = require("../controllers/login.js")

  var router = require("express").Router()

  router.post("/login", login.login)

  app.use("/", router)
}

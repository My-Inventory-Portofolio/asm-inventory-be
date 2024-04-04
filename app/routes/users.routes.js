module.exports = (app) => {
  const login = require("../controllers/users.js")

  var router = require("express").Router()

  router.post("/users/login", login.login)
  router.post("/users/signup", login.signUp)

  app.use("/", router)
}

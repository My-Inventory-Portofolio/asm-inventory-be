module.exports = (app) => {
  const tutorials = require("../controllers/assets.js")

  var router = require("express").Router()

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll)

  app.use("/api/assets", router)
}

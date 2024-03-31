module.exports = (app) => {
  const assets = require("../controllers/assets.js")

  var router = require("express").Router()

  router.get("/", assets.getAllData)
  router.post("/", assets.postData)

  app.use("/api/assets", router)
}
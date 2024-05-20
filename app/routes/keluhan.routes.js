module.exports = (app) => {
  const assets = require("../controllers/keluhan.js")
  var router = require("express").Router()
  router.get("/", assets.getAllData)
  router.post("/", assets.postData)
  router.delete("/", assets.deleteData)
  app.use("/api/keluhan", router)
}

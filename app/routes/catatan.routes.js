module.exports = (app) => {
  const catatan = require("../controllers/catatan.js")

  var router = require("express").Router()

  router.get("/", catatan.getAllData)
  router.post("/", catatan.postData)

  app.use("/api/catatan", router)
}

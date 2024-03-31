module.exports = (app) => {
  const pembelian = require("../controllers/pembelian.js")

  var router = require("express").Router()

  router.get("/", pembelian.getAllData)
  router.post("/", pembelian.postData)

  app.use("/api/pembelian", router)
}

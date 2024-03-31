module.exports = (app) => {
  const kartu_stok = require("../controllers/kartu_stok.js")

  var router = require("express").Router()

  router.get("/", kartu_stok.getAllData)
  router.post("/", kartu_stok.postData)

  app.use("/api/kartu_stok", router)
}

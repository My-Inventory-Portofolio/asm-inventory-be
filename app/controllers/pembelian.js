const dataModel = require("../models/pembelian.js")
const jwt = require("jsonwebtoken")

// get
const getAllData = (req, res) => {
  dataModel.getAll("", (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "error get all data",
      })
    else res.send(data)
  })
}

// delete
const deleteData = (req, res) => {
  const data = req.body
  const token = req.headers.authorization
  const userData = jwt.verify(token, process.env.SECRET_KEY)
  if (userData) {
    if (userData.role === "admin") {
      dataModel.deleteData(data, (err, result) => {
        return res.status(200).json({ message: "Pembelian deleted" })
      })
    } else {
      res.status(401).json({ message: "You are not allowed to delete assets!" })
    }
  } else {
    res.status(402).json({ message: "You are not authorization!, login first" })
  }
}

// post
const postData = (req, res) => {
  const data = req.body
  const token = req.headers.authorization

  const userData = jwt.verify(token, process.env.SECRET_KEY)
  if (userData) {
    if (userData.role === "admin") {
      dataModel.insertData(data, (err, result) => {
        if (err) {
          return res.status(401).json({ message: "Kode must be unique" })
        }
        return res
          .status(200)
          .json({ message: "Success create Pembelian", data: data })
      })
    } else {
      res
        .status(401)
        .json({ message: "You are not allowed to create Pembelian!" })
    }
  } else {
    res.status(400).json({ message: "You are not authenticated." })
  }
}
module.exports = {
  getAllData,
  deleteData,
  postData,
}

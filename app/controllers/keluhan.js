const dataModel = require("../models/keluhan.js")
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

// post
const postData = (req, res) => {
  const data = req.body

  dataModel.insertData(data, (err, result) => {
    if (err) {
      console.log(err, "ini error nya")
      return res.status(401).json({ message: "error when hit post data" })
    }
    return res
      .status(200)
      .json({ message: "Success create keluhan data", data: data })
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
        return res.status(200).json({ message: "Keluhan Completed" })
      })
    } else {
      res
        .status(401)
        .json({ message: "You are not allowed to delete keluhan!" })
    }
  } else {
    res.status(402).json({ message: "You are not authorization!, login first" })
  }
}

module.exports = {
  getAllData,
  postData,
  deleteData,
}

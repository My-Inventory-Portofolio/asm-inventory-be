const dataModel = require("../models/assets.js")

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
      return res.status(401).json({ message: "No Aset tidak boleh sama" })
    }
    return res.status(200).json({ message: "berhasil post assets", data: data })
  })
}

// delete
const deleteData = (req, res) => {
  const data = req.body
  dataModel.deleteData(data, (req, result) => {
    return res.status(200).json({ message: "berhasil delete assets" })
  })
}

module.exports = {
  getAllData,
  postData,
  deleteData,
}

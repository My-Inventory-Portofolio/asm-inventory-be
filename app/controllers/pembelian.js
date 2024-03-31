const dataModel = require("../models/pembelian.js")

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
      return res.status(500).json({ error: err.sqlMessage })
    }
    return res
      .status(200)
      .json({ message: "berhail post pembelian", data: data })
  })
}

module.exports = {
  getAllData,
  postData,
}

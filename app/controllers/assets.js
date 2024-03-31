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
      return res.status(500).json({ error: "error post data" })
    }
    return res.status(200).json({ message: "Data inserted successfully" })
  })
}

module.exports = {
  getAllData,
  postData,
}

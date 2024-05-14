const sql = require("./db.js")

// get all
const getAll = (assets, result) => {
  let query = "SELECT * FROM pembelian"
  sql.query(query, (err, res) => {
    if (err) {
      if (err) {
        console.log("error: ", err)
        result(null, err)
        return
      }
    }
    result(null, res)
  })
}

// delete
const deleteData = (req, res) => {
  const query = `DELETE FROM pembelian where kode="${req.kode}"`
  sql.query(query, (err, result) => {
    if (err) {
      return res(err, null)
    }
    return res(null, result)
  })
}

// post
const insertData = (req, res) => {
  const columns = Object.keys(req)
  const values = Object.values(req)
  const query = `INSERT INTO pembelian (${columns.join(", ")}) VALUES (${Array(
    values.length
  )
    .fill("?")
    .join(", ")})`

  sql.query(query, values, (err, result) => {
    if (err) {
      console.error("Error executing SQL: " + err.stack)
      return res(err, null)
    }
    return res(null, result)
  })
}

module.exports = {
  getAll,
  deleteData,
  insertData,
}

const sql = require("./db.js")

// get all
const getAll = (assets, result) => {
  let query = "SELECT * FROM assets"
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

// post
const insertData = (req, res) => {
  const columns = Object.keys(req)
  const values = Object.values(req)
  const query = `INSERT INTO assets (${columns.join(", ")}) VALUES (${Array(
    values.length
  )
    .fill("?")
    .join(", ")})`

  sql.query(query, values, (err, result) => {
    if (err) {
      return res(err, null)
    }
    return res(null, result)
  })
}

// delete
const deleteData = (req, res) => {
  const query = `DELETE FROM assets where no_aset="${req.no_aset}"`
  sql.query(query, (err, result) => {
    if (err) {
      return res(err, null)
    }
    return res(null, result)
  })
}

// edit
const editData = (req, res) => {
  const query = `UPDATE assets SET ${Object.entries(req).map(
    (e) => `${e[0]}="${e[1]}"`
  )} WHERE no_aset = "${req.no_aset}"`
  sql.query(query, (err, result) => {
    if (err) {
      return res(err, null)
    }
    return res(null, result)
  })
}

module.exports = {
  getAll,
  insertData,
  deleteData,
  editData,
}

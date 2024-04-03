const sql = require("./db.js")

// post
const login = (req, res) => {
  const { username, password } = req
  const query = "SELECT * FROM users WHERE username = ?"

  sql.query(query, [username], (err, result) => {
    console.log(err)
    if (err) {
      console.error("Error executing SQL: " + err.stack)
      return res(err, null)
    }
    return res(null, result)
  })
}

module.exports = {
  login,
}

const sql = require("./db.js")
const uuid = require("uuid")
// post
const login = (req, res) => {
  const { username, password } = req
  const query = "SELECT * FROM users WHERE username = ? AND password = ?"

  sql.query(query, [username, password], (err, result) => {
    console.log(err)
    if (err) {
      console.error("Error executing SQL: " + err.stack)
      return res(err, null)
    }
    return res(null, result)
  })
}

const signUp = (req, res) => {
  const newUuid = uuid.v4()
  const newUser = { id: newUuid, ...req }
  const columns = Object.keys(newUser)
  const values = Object.values(newUser)
  const query = `INSERT INTO users (${columns.join(", ")}) VALUES (${Array(
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
  login,
  signUp,
}

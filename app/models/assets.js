const sql = require("./db.js")

// constructor
const Assets = function (tutorial) {
  // this.title = tutorial.title
  // this.description = tutorial.description
  // this.published = tutorial.published
}

Assets.getAll = (title, result) => {
  let query = "SELECT * FROM assets"

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err)
      result(null, err)
      return
    }

    result(null, res)
  })
}

module.exports = Assets

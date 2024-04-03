// api/index.js
const express = require("express")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")
const serverless = require("serverless-http")

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.options("*", cors())

// routes
require("./app/routes/assets.routes.js")(app)
require("./app/routes/login.routes.js")(app)
require("./app/routes/pembelian.routes.js")(app)
require("./app/routes/catatan.routes.js")(app)
require("./app/routes/kartu_stok.routes.js")(app)

// Start server
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
module.exports.handler = serverless(app)

const mysql = require("mysql")
const dbConfig = require("../config/db.config.js")

var connection = mysql.createPool({
  // development
  // host: dbConfig.HOST,
  // user: dbConfig.USER,
  // password: dbConfig.PASSWORD,
  // database: dbConfig.DB,
  // ======================
  // production
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT,
})

module.exports = connection

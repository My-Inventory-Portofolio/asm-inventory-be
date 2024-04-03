const dataModel = require("../models/login.js")
const jwt = require("jsonwebtoken")

// post
const login = (req, res) => {
  const data = req.body
  dataModel.login(data, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Internal server error" })
    } else if (result.length === 0) {
      res.status(401).json({
        message: "Authentication failed. Invalid input or user not found!",
      })
    } else {
      const user = result[0]
      if (user.password === data.password) {
        const token = jwt.sign({ username: user.username }, "your-secret-key", {
          expiresIn: "1h",
        })
        res.status(200).json({ message: "Login successful", token })
      } else {
        res
          .status(401)
          .json({ message: "Authentication failed. Invalid password" })
      }
    }
  })
}

module.exports = {
  login,
}

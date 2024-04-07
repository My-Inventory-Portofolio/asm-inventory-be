const dataModel = require("../models/users.js")
const jwt = require("jsonwebtoken")

// login
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
        const token = jwt.sign(
          { username: user.username, role: user.role },
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        )
        console.log({ message: "Login successful", token: token })
        res.status(200).json({ message: "Login successful", token: token })
      }
      // else {
      //   res
      //     .status(401)
      //     .json({ message: "Authentication failed. Invalid password" })
      // }
    }
  })
}

const signUp = (req, res) => {
  const data = req.body
  dataModel.signUp(data, (err, result) => {
    if (err) {
      console.log(err.sqlMessage, "ini err")
      res.status(500).json({
        message: err.sqlMessage.includes("Duplicate")
          ? `username ${data.username} telah digunakan`
          : "err server",
      })
    } else if (result) {
      res.status(200).json({
        message: "Berhasil buat akun",
        data: { username: data.username, role: data.role },
      })
    }
  })
}

module.exports = {
  login,
  signUp,
}

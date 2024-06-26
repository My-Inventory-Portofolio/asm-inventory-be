module.exports = {
  // development
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "",
  // DB: "asm-asset-hardware",
  // production
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_DATABASE,
  PORT: process.env.DB_PORT,
}

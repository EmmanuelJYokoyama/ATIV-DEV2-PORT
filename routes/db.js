const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "portfolio"
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conectado ao banco de dados!");
    connection.release();
  }
});

module.exports = pool.promise();

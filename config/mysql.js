const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "albertenstein",
  database: "kuliah",
});

con.connect((error) => {
  if (error) throw error;
  console.log("koneksi databases berhasil");
});

module.exports = con;

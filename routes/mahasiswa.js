const path = require("path");
const express = require("express");

const router = express.Router();

const mysql = require("../config/mysql");

router.get("/", (req, res, next) => {
  const sql = "SELECT * FROM mahasiswa";
  mysql.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json({
      result,
    });
  });
});
router.post("/", (req, res, next) => {
  const nama = req.body.nama;
  const nim = req.body.nim;
  const prodi = req.body.prodi;
  console.log(nama);
  console.log(nim);
  console.log(prodi);
  console.log(req.body);
  let sql = "INSERT INTO mahasiswa (nim, nama, prodi) VALUES ?";
  let values = [[nim, nama, prodi]];
  mysql.query(sql, [values], function (err, result) {
    if (err) throw err;
    res.status(200).json({
      message: "berhasil tambah data mahasiswa",
    });
  });
});

module.exports = router;

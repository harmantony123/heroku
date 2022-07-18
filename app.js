const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const mahasiswaRoutes = require("./routes/mahasiswa");

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", mahasiswaRoutes);

module.exports = app;

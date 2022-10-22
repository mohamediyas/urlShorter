const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb:localhost/urlShorter");

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortner", (req, res) => {});

app.listen(process.env.PORT || 5000);

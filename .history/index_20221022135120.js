const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const shortUrl = require("./models/shortUrl");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect("mongodb://localhost/urlShorter");

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shortner", (req, res) => {
  shortUrl.create({
    full: req.body.fullUrl,
  });
});

app.listen(process.env.PORT || 5000);

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

app.get("/", async (req, res) => {
  const short = await shortUrl.find();

  res.render("index", { short });
});

app.post("/shortner", async (req, res) => {
  await shortUrl.create({
    full: req.body.fullUrl,
  });

  res.redirect("/");
});

app.listen(process.env.PORT || 5000);

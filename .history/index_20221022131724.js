const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 5000);

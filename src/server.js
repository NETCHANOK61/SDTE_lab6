const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("world!123");
});

module.exports = app;

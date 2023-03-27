const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/hyperlink.html"));
});

app.listen(3000, function () {
  console.log("Server running on 3000");
});

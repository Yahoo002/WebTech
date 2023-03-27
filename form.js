const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/form.html"));
});

app.listen(3030, function () {
  console.log("Server running on 3030");
});

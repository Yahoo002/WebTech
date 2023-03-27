const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bootstrap6.html");
});

app.listen("8080", function () {
  console.log("Listening on 8080");
});

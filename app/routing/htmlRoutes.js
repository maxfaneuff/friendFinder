//require shit
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("./apiRoutes.js");

console.log("export works");
// Sets up the Express App
// =============================================================
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;

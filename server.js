//require shit
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static("./app/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("/app/public"));
// app.use(express.static("/app/routing"));
// app.use(express.static("/app/data"));
app.use(apiRoutes);
app.use(htmlRoutes);
app.listen(PORT, function() {
  console.log("App is listening on PORT " + PORT);
});

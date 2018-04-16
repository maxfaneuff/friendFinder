//require shit
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");
var friendList = [];

console.log("API works");
// Sets up the Express App
// =============================================================
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

router.get("/api/friends", function(req, res) {
  return res.json(friendList);
});

router.get("/api/friends/:friend", function(req, res) {
  var chosen = req.params.friendList;

  for (var i = 0; i < friendList.length; i++) {
    if (chosen === friendList[i].name) {
      return res.json(friendList[i]);
    } else {
      return "Sorry, nobody by that name exists in our records...";
    }
  }
});

router.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  var friendsArr = friends.friendsList;
  console.log(friendsArr);
  console.log(newFriend);

  friends.friendList.push(newFriend);
  res.json(newFriend);
  console.log("______________________________________________________");
  console.log(friendList);
});

module.exports = router;

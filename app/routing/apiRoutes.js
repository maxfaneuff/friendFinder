//require shit
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require("../data/friends.js");

console.log("API works");
// Sets up the Express App
// =============================================================
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();

router.get("/api/friends", function(req, res) {
  return res.json(friends);
});

router.post("/api/friends", function(req, res) {
  var newFriend = req.body;

  console.log(newFriend);
  for (var i = 0; i < newFriend.scores.length; i++) {
    newFriend.scores[i] = parseInt(newFriend.scores[i], 10);
  }

  // friends.push(newFriend);
  // res.json(newFriend);
  console.log("______________________________________________________");
  console.log(friends);
  // compareScores(newFriend, friends);
  var newFriendScores = newFriend.scores;
  var scoreDiff = 50000;
  var newDiff = 0;
  var bestFriend;

  for (var i = 0; i < friends.length; i++) {
    var friendsScores = friends[i].scores;
    console.log("---friendScores below---");
    console.log(friendsScores);
    console.log(newFriendScores);

    for (var z = 0; z < friendsScores.length; z++) {
      newDiff += Math.abs(friendsScores[z] - newFriendScores[z]);
      console.log(newDiff);
    }
    if (newDiff < scoreDiff) {
      scoreDiff = newDiff;
      bestFriend = friends[i];
    }
    newDiff = 0;
  }

  console.log(scoreDiff);
  console.log("====scoreDiff above, bestFriend below====");
  console.log(bestFriend);
  res.json(bestFriend);
});

//router.push - to get your data into friends.js//

module.exports = router;

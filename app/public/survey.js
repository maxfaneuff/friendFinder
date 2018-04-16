var name;
var picLink;
var scores;

////Shit for Chosen////

// // jQuery(document).ready(function() {
// //   jQuery(".chosen-container").chosen();
// // });

// $(function() {
//   $(".chosen-container").chosen();
//   //   $(".chosen-results").chosen();
//   //   //   $(".chosen-container").chosen();
// });

$("#submit").on("click", function(event) {
  event.preventDefault();
  console.log("click seen");
  var scoresArr = [];

  for (var i = 1; i < 11; i++) {
    scoresArr.push($(".q" + i).val());
  }
  console.log(scoresArr);
  var addFriend = {
    name: $("#name")
      .val()
      .trim(),
    picLink: $("#picLink")
      .val()
      .trim(),
    scores: scoresArr
  };

  $.post("/api/friends", addFriend).then(function(data) {
    console.log(data);
    alert("Got your survey, thanks!");
  });
});

var name;
var picLink;
var scores;
var friendsObj;

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

  //pushing the values of each answer to an array
  for (var i = 1; i < 11; i++) {
    scoresArr.push($(".q" + i).val());
  }

  //converting that array from strings to integers
  for (var i = 0; i < scoresArr.length; i++) {
    scoresArr[i] = parseInt(scoresArr[i], 10);
  }

  //shows an array of integers
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

  //shows scoresArr as integers
  console.log(addFriend);

  $.post("/api/friends", addFriend).then(function(data) {
    //shows scoresArr as string?!!
    console.log(data);
    friendsObj = data;
    // alert("Got your survey, thanks!");
  });
});

// for (var i = 0; i < count_array.length; i++) count_array[i] = +count_array[i];

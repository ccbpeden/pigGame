var tempScore = 0;
var user0 = {userName: "Player 1", userScore: 0};
var user1 = {userName: "Player 2", userScore: 0};
var rolls = [];
var currentUser = "Player 1";
var currentScore = 0;
var input = true;
var hold = true;

var variableDice = function(input){
  for (var i = 0; i < input; i += 1){
    var number = parseInt(1 + Math.floor(Math.random() * 6));
    if (number === 1){
      tempScore = 0;
			rolls.push(number);
    } else {
      tempScore = tempScore + number;
      console.log("tempScore is " + tempScore);
      rolls.push(number);
    };
  };
  console.log(rolls)
  for(var i = 0; i < rolls.length; i++){
  	console.log("rolls[i]")
 	 if (rolls[i] === 1){
 	 	tempScore = 0;
	  };
  };
  console.log(tempScore);
};

// var diceRoll = function(){ //simulates RNG 1-6
//   var number = parseInt(1 + Math.floor(Math.random() * 6));
//   if (number === 1){
//     tempScore = 0;
//     return number;
//   } else {
//     tempScore = tempScore + number;
//     return number;
//   };
// };

var outputScore = function(){
  if (currentUser === user0.userName){
    return "#player1score";
  } else {
    return "#player2score";
  }
}

var turnDetermine = function(input){
  if (input === 1){
    if (currentUser === user0.userName){
    console.log("input determined false")
      currentUser = user1.userName;
      currentScore = user1.userScore;
    } else {
      currentUser = user0.userName;
      currentScore = user0.userScore;
    };
  };
};

var userHold = function() {
	console.log(currentUser)
  if (currentUser === user0.userName){
    user0.userScore = user0.userScore + tempScore;
    console.log("user0 " + user0.userScore)
    tempScore = 0;
    currentUser = user1.userName;
    currentScore = user1.userScore;
  } else {
    user1.userScore = user1.userScore + tempScore;
    console.log("user1 " + user1.userScore)
    tempScore = 0;
    currentUser = user0.userName;
    currentScore = user0.userScore;
  };
};



var victoryCheck = function(){
  var scoreTotal = currentScore + tempScore
  if (scoreTotal >= 100){
    alert("winner winner")
    //victory action
    $(".victory").slideDown();
  };
};

//frontendery

$(document).ready(function() {
  $("#player1score").empty().text(user0.userScore);
  $("#player2score").empty().text(user1.userScore);
  $("#current-user").empty().text(currentUser);

  $("#roll-button").click(function() {
    variableDice();
    $("#temp-roll").empty().text(rolls);
    $("#temp-score").empty().text(tempScore);
    victoryCheck();
    turnDetermine(tempRoll);
    $("#current-user").empty().text(currentUser);

  });
  $("#hold-button").click(function() {
    userHold();
    $("#player1score").empty().text(user0.userScore);
    $("#player2score").empty().text(user1.userScore);
    var outputUser = outputScore();
    $(outputUser).empty().text(currentScore);
    $("#current-user").empty().text(currentUser);
    $("#temp-roll").empty();
    $("#temp-score").empty();
  });
});

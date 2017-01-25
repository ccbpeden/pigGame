var tempScore = 0;
var user0 = {userName: "Player 1", userScore: 90};
var user1 = {userName: "Player 2", userScore: 90};
var currentUser = "Player 1";
var currentScore = 5;
var input = true;
var hold = true;

var diceRoll = function(){ //simulates RNG 1-6
  var number = parseInt(1 + Math.floor(Math.random() * 6));
  if (number === 1){
    tempScore = 0;
    return number;
  } else {
    tempScore = tempScore + number;
    return number;
  };
};

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
	console.log("hold determined true")
  if (currentUser === user0.userName){
    user0.userScore = user0.userScore + tempScore;
    tempScore = 0;
    currentUser = user1.userName;
    currentScore = user1.userScore;
  } else {
    user1.userScore = user1.userScore + tempScore;
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
    var tempRoll = diceRoll();
    $("#temp-roll").empty().text(tempRoll);
    $("#temp-score").empty().text(tempScore);
    victoryCheck();
    turnDetermine(tempRoll);
    $("#current-user").empty().text(currentUser);

  });
  $("#hold-button").click(function() {
    userHold();
    var outputUser = outputScore();
    $(outputUser).empty().text(currentScore);
    $("#current-user").empty().text(currentUser);
  });
});

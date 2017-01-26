var tempScore;
var user0 = {userName: "Player 1", userScore: 0};
var user1 = {userName: "Player 2", userScore: 0};
var rolls = [];
var currentUser;
var currentScore;
// var hold = true;
var numberOfDice = 1;
var endTurn;

var clearGame = function(){
  user0.userScore = 0;
  user1.userScore = 0;
  tempScore = 0;
  currentUser = "Player 1";
  rolls = [];
  currentScore = 0;
  endTurn = false;
  $("#player1score").text(user0.userScore);
  $("#player2score").text(user1.userScore);
  $("#current-user").text(currentUser);
  $(".victory").hide();
  $("#temp-roll").empty();
  $("#temp-score").empty();
}

var variableDice = function(input){
  endTurn = false;
  rolls = [];
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
    endTurn = true;
	  };
  };
  console.log(tempScore);
};

var printRolls = function(){
    $("#temp-roll").empty();
  for(i = 0; i < rolls.length; i++){
    var dieNumber = rolls[i];
  $("#temp-roll").append(dieNumber + ", ");
  };
}

var outputScore = function(){
  if (currentUser === user0.userName){
    return "#player1score";
  } else {
    return "#player2score";
  };
}

var victoryCheck = function(){
  var scoreTotal = currentScore + tempScore
  if (scoreTotal >= 100){
    //victory action
    $("#winner-name").text(currentUser);
    $(".victory").slideDown();

  };
};

var turnDetermine = function(input){
  if (endTurn){
    if (currentUser === user0.userName){
    console.log("input determined false")
      currentUser = user1.userName;
      currentScore = user1.userScore;
      $("#interface").hide().toggleClass("player2").fadeIn();
    } else {
      currentUser = user0.userName;
      currentScore = user0.userScore;
      $("#interface").hide().toggleClass("player2").fadeIn();
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
    $("#interface").hide().toggleClass("player2").fadeIn();
  } else {
    user1.userScore = user1.userScore + tempScore;
    console.log("user1 " + user1.userScore)
    tempScore = 0;
    currentUser = user0.userName;
    currentScore = user0.userScore;
    $("#interface").hide().toggleClass("player2").fadeIn();
  };
};

//frontendery

$(document).ready(function() {
  clearGame();
  $("#dice-submit").click(function() {
    numberOfDice = $("#dice-control").val();
    clearGame();
  });

  $("#roll-button").click(function() {
    variableDice(numberOfDice);
    printRolls();
    $("#temp-score").empty().text(tempScore);
    victoryCheck();
    turnDetermine();
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

    $("#reset-button").click(function(){
      clearGame();
    });
});

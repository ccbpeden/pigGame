var tempScore = 0;
var user0 = {userName: "jay", userScore: 27};
var user1 = {userName: "charlie", userScore: 5};
var currentUser = "charlie";
var currentScore = 5;
var input = true;
var hold = true;

var diceRoll = function(){ //simulates RNG 1-6
  var number = 1 + Math.floor(Math.random() * 6);
  if (number == 1){
    return false;
  } else {
    return number;
}

var turnDetermine = function(input){
  if (input === false){
    tempScore = 0;
    if (currentUser === user0.userName){
    console.log("input determined false")
      currentUser = user1.userName;
      currentScore = user1.userScore;
    } else {
      currentUser = user0.userName;
      currentScore = user0.userScore;
    };
  } else if (hold === true){
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
};

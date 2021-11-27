let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = rock;
let secondPlayerChoice = scissors;

let firstPossibility;
firstPossibility = firstPlayerChoice === rock && secondPlayerChoice === scissors;

let secondPossibility;
secondPossibility = firstPlayerChoice === scissors && secondPlayerChoice === paper;

let thirdPossibility;
thirdPossibility = firstPlayerChoice === paper && secondPlayerChoice === rock;

let fourthPossibility;
fourthPossibility = firstPlayerChoice === rock && secondPlayerChoice === paper;

let fifthPossibility;
fifthPossibility = firstPlayerChoice === scissors && secondPlayerChoice === rock;

let sixthPossibility;
sixthpossibility = firstPlayerChoice === paper && secondPlayerChoice === scissors;

let seventhPossibility;
seventhPossibility = firstPlayerChoice === secondPlayerChoice;

if (firstPossibility || secondPossibility || thirdPossibility) {
  console.log("firstPlayer won!");
 }

else if (fourthPossibility || fifthPossibility || sixthpossibility) {
  console.log("secondPlayer won!");
}

else if (seventhPossibility) {
  console.log("It's a tie!");
}

else {
  console.log("Something went terribly wrong!")
}
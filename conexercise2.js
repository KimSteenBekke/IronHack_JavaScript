let rock = 'rock';
let scissors = 'scissors';
let paper = 'paper';

// these two variables will be changed to test the conditional
let firstPlayerChoice = 'scissors';
let secondPlayerChoice = 'rock';

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

let findWinner = firstPossibility || secondPossibility || thirdPossibility || fourthPossibility || fifthPossibility || sixthPossibility || seventhPossibility;

switch (findWinner) {
  case firstPossibility:
  case secondPossibility:
  case thirdPossibility:  
    console.log("firstPlayer wins!")
    // statements executed when the result of expression matches
    break;
  case fourthPossibility:
  case fifthPossibility:
  case sixthPossibility:  
    console.log("secondPlayer wins!")
    // statements executed when the result of expression matches
    break;
  
  case seventhPossibility:
    console.log("It's a tie!")
    // statements executed when the result of expression matches
    break;
  default:
    console.log("something went terribly wrong!")
    // statements executed when none of the values match the value of the expression
    break;
}

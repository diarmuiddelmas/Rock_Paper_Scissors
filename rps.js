
// 1. Gets the computer's choice of rock, paper or scissors //

function getComputerChoice () {

    const compChoice = (Math.random());

    if (compChoice < 0.33) {
    return "rock";

    } else if (compChoice >= 0.33 && compChoice <0.66) {
    return "paper";

    } else if (compChoice > 0.66);
    return "scissors";
    }

// Skip  this test, otherwise it will run twice ------ console.log(getComputerChoice()); ----//

// ------------------------------------------------------//

// 2. Create a function to get the human choice //

function getHumanChoice () {

let humChoice = prompt("Rock, Paper, or Scissors?");
let humChoiceCs = humChoice.toLowerCase();

  if (humChoiceCs === "rock") {
    return "rock";
    } else if (humChoiceCs === "paper") {
    return "paper";
    }
    else if (humChoiceCs === "scissors");
    return "scissors";
}

// Skip  this test, otherwise it will run twice ------console.log(getHumanChoice()); ----//

// ------------------------------------------------------//

// 3. Declare the players' score variables. -------------//

let humanScore = 0;
let computerScore = 0;

// ------------------------------------------------------//

// 4. Write logic to play a single round. ----------------//

function playRound (humanChoice, computerChoice) {

if      (humanChoice == "rock" && computerChoice == "rock") {
      console.log ("Rock meets Rock. It's a draw!");

} else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log ("Paper beats Rock. You lose!");
    return computerScore++;
    

} else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log ("Rock beats Scissors. You win!");
    return humanScore++;
    

} else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log ("Paper beats Rock. You win!");
    return humanScore++;
    

} else if (humanChoice == "paper" && computerChoice == "paper") {
       console.log ("Paper meets Paper. It's a draw!");

} else if (humanChoice == "paper" && computerChoice == "scissors") {
     console.log ("Scissors beats Paper. You lose!");
     return computerScore++;

} else if (humanChoice == "scissors" && computerChoice == "rock") {
     console.log ("Rock beats Scissors. You lose!");
     return computerScore++;

} else if (humanChoice == "scissors" && computerChoice == "paper") {
      console.log ("Scissors beats Paper. You win!");
    return humanScore++;
   
} else if (humanChoice == "scissors" && computerChoice == "scissors"){
    console.log ("Scissors meet Scissors. It's a draw!");
}

}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);


console.log("Your score is " + humanScore);
console.log("Computer's score is " + computerScore);


// 5. Turn it into a game of 5 rounds -------------------------//



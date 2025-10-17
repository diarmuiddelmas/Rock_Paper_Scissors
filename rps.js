// Create a div with rock, paper, scissors buttons --------//

const choiceDiv = document.createElement("div");
document.body.appendChild(choiceDiv);

const rockButton = document.createElement("button");
rockButton.setAttribute("id","rock");
rockButton.textContent = "Rock";
choiceDiv.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.setAttribute("id","paper");
paperButton.textContent = "Paper";
choiceDiv.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.setAttribute("id","scissors");
scissorsButton.textContent = "Scissors";
choiceDiv.appendChild(scissorsButton); 

let humanScore = 0;
let computerScore = 0;

// Create an event listener that triggers playRound function depending on what button is pressed ---

choiceDiv.addEventListener("click",(event) => {

       const btn = event.target.closest("button");
       if (!btn) return;

       const human = btn.id;
       const computer = getComputerChoice();

        playRound (human, computer);


});
 
 // Plays a game of five rounds ----------//

// function playGame() { 



    // for (i=1;i<=1;i++) {

// const human = getHumanChoice();
// const computer = getComputerChoice();

        // playRound (human, computer);
    // }

// Play a single round. ----------------//
function playRound (humanChoice, computerChoice) {

if      (humanChoice == "rock" && computerChoice == "rock") {
      console.log ("Rock meets Rock. It's a draw!");
      return;

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
       return;

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
    return;
}

}   
// end of the playRound function ------- //

// Get's the human's choice between the three options: rock, paper, scissors //
// function getHumanChoice () {

// let humChoice = prompt("Rock, Paper, or Scissors?");
// let humChoiceCs = humChoice.toLowerCase();

//   if (humChoice === "rock") {
    // return "rock";
    // } else if (humChoice === "paper") {
    // return "paper";
    // }
    // else if (humChoice === "scissors");
    // return "scissors";
// }


// Gets the computer's choice between the three options: rock, paper, scissors //

function getComputerChoice () {

    const compChoice = (Math.random());

    if (compChoice < 0.33) {
    return "rock";

    } else if (compChoice >= 0.33 && compChoice <0.66) {
    return "paper";

    } else if (compChoice > 0.66) {
    return "scissors";
    }
}


// Announces the winner of the game ------//

// console.log ("Your final score is  " + humanScore);
// console.log ("Computer's final score is " + computerScore);

// if (humanScore > computerScore) {
// console.log("Human wins the game!");
// }

// else  if (computerScore > humanScore) {
// console.log("Computer wins the game!");
// }

// else {
    // console.log("The game is a draw!");
// }

// }
// end of the playGame function -------- //


// Triggers the start of the game. ------//
// playGame ();




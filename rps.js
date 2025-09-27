
// 1. Gets the computer's choice of rock, paper or scissors //

function getComputerChoice () {

    const compchoice = (Math.random());

    if (compchoice < 0.33) {
    return "rock";
    } else if (compchoice >= 0.33 && compchoice <0.66) {
    return "paper";
    }
    else if (compchoice > 0.66);
    return "scissors";
    }

console.log(getComputerChoice());

// ------------------------------------------------------//

// 2. Create a function to get the human choice //

function getHumanChoice () {

let humchoice = prompt("Rock, Paper, or Scissors?");

  if (humchoice === "Rock") {
    return "rock";
    } else if (humchoice === "Paper") {
    return "paper";
    }
    else if (humchoice === "Scissors");
    return "scissors";
}

console.log(getHumanChoice());

// ------------------------------------------------------//

// 3. Declare the players' score variables. -------------//




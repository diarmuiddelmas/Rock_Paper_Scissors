
// Gets the computer's choice of rock, paper or scissors //

function getComputerChoice () {

    const choice = (Math.random());

    if (choice < 0.33) {
    return "rock";
    } else if (choice >= 0.33 && choice <0.66) {
    return "paper";
    }
    else if (choice > 0.66);
    return "scissors";
    }

console.log(getComputerChoice());

// ------------------------------------------------------//


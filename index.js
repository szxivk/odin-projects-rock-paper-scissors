// Get computer choice, randomly choose rock, paper or scissor

function getComputerChoice() {
  const num = Math.floor(Math.random() * 10);
  if (num <= 3) {
    return "rock";
  } else if (num > 3 && num < 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Get human choice

let getHumanChoice = () => prompt("Choose rock, paper or scissors:");

// keep score for Both

let humanScore = 0,
  computerScore = 0;

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

// single round logic

function playRound(c_choice, h_choice) {
  h_choice = h_choice.toLowerCase();
  if (c_choice === h_choice) {
    console.log(`Nobody wins! Both chose ${c_choice}`);
  } else if (c_choice === "rock" && h_choice === "paper") {
    console.log(`You win! ${h_choice} beats ${c_choice}`);
    return (humanScore += 1);
  } else if (c_choice === "rock" && h_choice === "scissors") {
    console.log(`You lose! ${c_choice} beats ${h_choice}`);
    return (computerScore += 1);
  } else if (c_choice === "paper" && h_choice === "scissors") {
    console.log(`You win! ${h_choice} beats ${c_choice}`);
    return (humanScore += 1);
  } else if (c_choice === "paper" && h_choice === "rock") {
    console.log(`You lose! ${c_choice} beats ${h_choice}`);
    return (computerScore += 1);
  } else if (c_choice === "scissors" && h_choice === "rock") {
    console.log(`You win! ${h_choice} beats ${c_choice}`);
    return (humanScore += 1);
  } else if (c_choice === "scissors" && h_choice === "paper") {
    console.log(`You lose! ${c_choice} beats ${h_choice}`);
    return (computerScore += 1);
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

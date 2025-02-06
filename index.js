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

function playRound(h_choice, c_choice) {
  h_choice = h_choice.toLowerCase();
  if (c_choice === h_choice) {
    console.log(`Nobody wins! Both chose ${c_choice}.`);
  } else if (c_choice === "rock" && h_choice === "paper") {
    console.log(`You win! ${h_choice} beats ${c_choice}.`);
    return (humanScore += 1);
  } else if (c_choice === "rock" && h_choice === "scissors") {
    console.log(`You lose! ${c_choice} beats ${h_choice}.`);
    return (computerScore += 1);
  } else if (c_choice === "paper" && h_choice === "scissors") {
    console.log(`You win! ${h_choice} beats ${c_choice}.`);
    return (humanScore += 1);
  } else if (c_choice === "paper" && h_choice === "rock") {
    console.log(`You lose! ${c_choice} beats ${h_choice}.`);
    return (computerScore += 1);
  } else if (c_choice === "scissors" && h_choice === "rock") {
    console.log(`You win! ${h_choice} beats ${c_choice}.`);
    return (humanScore += 1);
  } else if (c_choice === "scissors" && h_choice === "paper") {
    console.log(`You lose! ${c_choice} beats ${h_choice}.`);
    return (computerScore += 1);
  }
}

function winner(h_score, c_score) {
  console.log("----> GAME <----");
  if (h_score === c_score) {
    return console.log(`Draw! Both scored ${h_score} points`);
  } else if (h_score > c_score) {
    return console.log(`--> You won! You scored +${h_score - c_score} points.`);
  } else {
    return console.log(
      `--> You lost! Computer scored +${c_score - h_score} points. <--`
    );
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`--> ROUND ${i + 1} <---`);
    playRound(humanSelection, computerSelection);
  }
  return winner(humanScore, computerScore);
}

playGame();

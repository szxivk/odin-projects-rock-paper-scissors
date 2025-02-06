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
// keep score for Both

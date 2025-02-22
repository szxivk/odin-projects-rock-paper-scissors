let humanScore = 0,
  computerScore = 0;

const score = document.querySelector(".score");

const options = document.querySelector(".buttons");

const compChoice = document.querySelector();

options.addEventListener("click", (e) => {
  const target = e.target;
  const computerChoice = getComputerChoice();
  switch (target.id) {
    case "rock":
      playRound("rock", computerChoice);

      if (humanScore >= 5 || computerScore >= 5) {
        winner(humanScore, computerScore);
      }
      break;
    case "paper":
      playRound("paper", computerChoice);
      if (humanScore >= 5 || computerScore >= 5) {
        winner(humanScore, computerScore);
      }
      break;
    case "scissors":
      playRound("scissors", computerChoice);
      if (humanScore >= 5 || computerScore >= 5) {
        winner(humanScore, computerScore);
      }
      break;
  }
});

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

// single round logic

function playRound(h_choice, c_choice) {
  if (c_choice === h_choice) {
    console.log(`Nobody wins! Both chose ${c_choice}.`);
  } else if (c_choice === "rock" && h_choice === "paper") {
    console.log(`You win! ${h_choice} beats ${c_choice}.`);
    humanScore += 1;
  } else if (c_choice === "rock" && h_choice === "scissors") {
    console.log(`You lose! ${c_choice} beats ${h_choice}.`);

    computerScore += 1;
  } else if (c_choice === "paper" && h_choice === "scissors") {
    console.log(`You win! ${h_choice} beats ${c_choice}.`);

    humanScore += 1;
  } else if (c_choice === "paper" && h_choice === "rock") {
    console.log(`You lose! ${c_choice} beats ${h_choice}.`);

    computerScore += 1;
  } else if (c_choice === "scissors" && h_choice === "rock") {
    console.log(`You win! ${h_choice} beats ${c_choice}.`);

    humanScore += 1;
  } else if (c_choice === "scissors" && h_choice === "paper") {
    console.log(`You lose! ${c_choice} beats ${h_choice}.`);

    computerScore += 1;
  }
}

// func to check whether score is above 5 or no

function winner(h_score, c_score) {
  if (h_score > c_score) {
    alert("You Won! Refresh page to play again");
  } else {
    alert("You Lose! Refresh page to play again");
  }
}

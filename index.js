let humanScore = 0,
  computerScore = 0;

const scoreDiv = document.querySelector(".score");

const options = document.querySelector(".buttons");

const userScore = document.querySelector("#score");

const compChoiceDiv = document.querySelector(".computer-choice");

const resultDiv = document.querySelector(".result");

options.addEventListener("click", (e) => {
  const target = e.target;
  const computerChoice = getComputerChoice();
  let cChoice = document.createElement("p");

  switch (target.id) {
    case "rock":
      playRound("rock", computerChoice);
      userScore.textContent = humanScore;
      cChoice = document.createElement("p");
      cChoice.textContent = "Computer chose " + computerChoice;
      compChoiceDiv.appendChild(cChoice);
      if (humanScore >= 5 || computerScore >= 5) {
        winner(humanScore, computerScore);
      }
      break;
    case "paper":
      playRound("paper", computerChoice);
      userScore.textContent = humanScore;
      cChoice = document.createElement("p");
      cChoice.textContent = "Computer chose " + computerChoice;
      compChoiceDiv.appendChild(cChoice);
      if (humanScore >= 5 || computerScore >= 5) {
        winner(humanScore, computerScore);
      }
      break;
    case "scissors":
      playRound("scissors", computerChoice);
      userScore.textContent = humanScore;
      cChoice = document.createElement("p");
      cChoice.textContent = "Computer chose " + computerChoice;
      compChoiceDiv.appendChild(cChoice);
      if (humanScore === 5 || computerScore === 5) {
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
  const roundResult = document.createElement("p");
  if (c_choice === h_choice) {
    roundResult.textContent = "Nobody wins! Both chose " + c_choice;
    resultDiv.appendChild(roundResult);
  } else if (c_choice === "rock" && h_choice === "paper") {
    roundResult.textContent = "You win! " + h_choice + " beats " + c_choice;
    resultDiv.appendChild(roundResult);
    humanScore += 1;
  } else if (c_choice === "rock" && h_choice === "scissors") {
    roundResult.textContent = "You lose! " + c_choice + " beats " + h_choice;
    resultDiv.appendChild(roundResult);
    computerScore += 1;
  } else if (c_choice === "paper" && h_choice === "scissors") {
    roundResult.textContent = "You win! " + h_choice + " beats " + c_choice;
    resultDiv.appendChild(roundResult);
    humanScore += 1;
  } else if (c_choice === "paper" && h_choice === "rock") {
    roundResult.textContent = "You lose! " + c_choice + " beats " + h_choice;
    resultDiv.appendChild(roundResult);
    computerScore += 1;
  } else if (c_choice === "scissors" && h_choice === "rock") {
    roundResult.textContent = "You win! " + h_choice + " beats " + c_choice;
    resultDiv.appendChild(roundResult);
    humanScore += 1;
  } else if (c_choice === "scissors" && h_choice === "paper") {
    roundResult.textContent = "You lose! " + c_choice + " beats " + h_choice;
    resultDiv.appendChild(roundResult);
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
  userScore.textContent = "Refresh Page!";
}

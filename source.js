const options = ["Rock", "Scissor", "Paper"];
const getComputerChoice = () => options[Math.round(Math.random() * 2)];
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) return "DRAW!";
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lost! Paper beats Rock!";
    } else if (computerSelection === "scissor") {
      return "You win! Rock beats Scissor!";
    }
  } else if (playerSelection === "scissor") {
    if (computerSelection === "rock") {
      return "You lost! Rock beats Scissor";
    } else if (computerSelection === "paper") {
      return "You win! Scissor beats Paper";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      return "You lost! Scissor beats Paper";
    } else if (computerSelection === "rock") {
      return "You win! Paper beats Rock";
    }
  } else return "Invalid input";
}

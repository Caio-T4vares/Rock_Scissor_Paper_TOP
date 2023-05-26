const options = ["Rock", "Scissor", "Paper"];
const getComputerChoice = () => options[Math.round(Math.random() * 2)];
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("Draw!");
    return 3;
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("You lost! Paper beats Rock!");
      return 0;
    } else if (computerSelection === "scissor") {
      console.log("You win! Rock beats Scissor!");
      return 1;
    }
  } else if (playerSelection === "scissor") {
    if (computerSelection === "rock") {
      console.log("You lost! Rock beats Scissor");
      return 0;
    } else if (computerSelection === "paper") {
      console.log("You win! Scissor beats Paper");
      return 1;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissor") {
      console.log("You lost! Scissor beats Paper");
      return 0;
    } else if (computerSelection === "rock") {
      console.log("You win! Paper beats Rock");
      return 1;
    }
  } else return "Invalid input";
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (let cont = 0; cont < 5; cont++) {
    console.log(`Round ${cont + 1}`);
    playerSelection = prompt(`Choice your "weapon" :O`);
    computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === 1) {
      playerWins++;
    } else if (result === 0) {
      computerWins++;
    }
  }
  if (playerWins > computerWins)
    console.log("Congratulations, you are the winner!");
  else if (playerWins < computerWins) console.log("OH NO! You lost the game!");
  else console.log("Draw!!");
}
game();

const game = document.querySelector(".game");
const show = document.querySelector(".result");
const partialResult = document.querySelector(".partial");

const rock = document.getElementById("Rock");
const scissor = document.getElementById("Scissor");
const paper = document.getElementById("Paper");
const humanChoiceDisplay = document.querySelector("h3");
const computerChoiceDisplay = document.querySelector("#choice");
let player = 0;
let computerPlayer = 0;
let tie = 0;

let getComputerSelection = function () {
  let choices = ["Rock", "Paper", "Scissor"];
  let randomPick = Math.floor(Math.random() * choices.length);

  let choice = choices[randomPick];
  computerChoiceDisplay.textContent = choice;
  return choice;
};

let playRound = function (humanChoice, computerChoice) {
  switch (humanChoice) {
    case "Rock":
      return computerChoice === "Scissor"
        ? "Win"
        : computerChoice === "Paper"
        ? "Lose"
        : "Tie";

    case "Scissor":
      return computerChoice === "Paper"
        ? "Win"
        : computerChoice === "Rock"
        ? "Lose"
        : "Tie";
    case "Paper":
      return computerChoice === "Rock"
        ? "Win"
        : computerChoice === "Scissor"
        ? "Lose"
        : "Tie";
    default:
      return;
  }
};

let result = function (playerChoice) {
  humanChoiceDisplay.textContent = playerChoice;
  let computerChoice = getComputerSelection();
  let roundResult = playRound(playerChoice, computerChoice);
  if (roundResult === "Win") {
    player++;
  } else if (roundResult === "Lose") {
    computerPlayer++;
  } else {
    tie++;
  }
  checkWinner();

  partialResult.textContent = `Player: ${player} | Computer: ${computerPlayer} | Tie: ${tie}`;
};

function checkWinner() {
  if (player === 3) {
    game.style.display = "none";
    show.style.display = "flex";
    show.textContent = "Player Wins";
  } else if (computerPlayer === 3) {
    game.style.display = "none";
    show.style.display = "flex";
    show.textContent = "Computer Wins";
  }
}

rock.addEventListener("click", () => result("Rock"));
scissor.addEventListener("click", () => result("Scissor"));
paper.addEventListener("click", () => result("Paper"));

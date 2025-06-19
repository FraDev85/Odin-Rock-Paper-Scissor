let getHumanSelection = function () {
  let choice = prompt("Choice: Rock, Paper, Scissor ");
  if (typeof choice === "string") {
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    if (["Rock", "Paper", "Scissor"].includes(choice)) {
      return choice;
    } else {
      console.log("Invalid choice, please try again");
      return getHumanSelection();
    }
  } else {
    console.log("Not allowed");
    return getHumanSelection();
  }
};

let getComputerSelection = function () {
  let choices = ["Rock", "Paper", "Scissor"];
  let randomPick = Math.floor(Math.random() * choices.length);
  return choices[randomPick];
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
      console.log("Invalid choice");
  }
};

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanSelection();
    let computerChoice = getComputerSelection();
    let gameWinner = playRound(humanChoice, computerChoice);
    if (gameWinner === "Win") {
      humanScore++;
    } else if (gameWinner === "Lose") {
      computerScore++;
    } else {
      console.log("Tie; no points awarded");
    }
    console.log(
      `Round ${
        i + 1
      }: Your Choices ${humanChoice}, Computer Choice ${computerChoice} => ${gameWinner}`
    );
  }
  console.log(`Final Score: You: ${humanScore} Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You Win the Game");
  } else if (humanScore < computerScore) {
    console.log("You Lose the game");
  } else {
    console.log("Game is a Tie");
  }
}

playGame();

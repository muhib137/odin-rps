const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER_HUMAN = "human";
const PLAYER_COMPUTER = "computer";

const buttons = document.querySelectorAll(".btn");
const humanScoreBoard = document.querySelector(".human-score");
const computerScoreBoard = document.querySelector(".computer-score");
const bodyEl = document.querySelector("body");
const board = document.querySelector(".board");

let computerScore = 0,
  humanScore = 0;
function getChoice(index) {
  switch (index) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    default:
      return SCISSORS;
  }
}

function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3);
  const computerChoice = getChoice(randInt);
  return computerChoice;
}

function getHumanChoice() {
  const humanChoice = parseInt(
    prompt("Enter the corresponding number:\n0 - rock\n1 - paper\n2 - scissors")
  );
  return getChoice(humanChoice);
}

function findWinner(humanChoice, computerChoice) {
  let winner;
  if (humanChoice === ROCK && computerChoice === SCISSORS) {
    winner = PLAYER_HUMAN;
    humanScore++;
  } else if (humanChoice === PAPER && computerChoice === ROCK) {
    winner = PLAYER_HUMAN;
    humanScore++;
  } else if (humanChoice === SCISSORS && computerChoice === PAPER) {
    winner = PLAYER_HUMAN;
    humanScore++;
  } else if (humanChoice === computerChoice) {
    winner = null;
  } else {
    winner = PLAYER_COMPUTER;
    computerScore++;
  }

  return winner;
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  const winner = findWinner(humanChoice, computerChoice);

  const choices = `<p>(You) ${humanChoice} vs ${computerChoice} (Computer) </p>`;
  board.insertAdjacentHTML("afterend", choices);

  humanScoreBoard.textContent = humanScore;
  computerScoreBoard.textContent = computerScore;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.dataset.choice);
    if (humanScore >= 5 || computerScore >= 5) {
      if (humanScore > computerScore) {
        board.classList.add("won");
      } else {
        board.classList.add("lost");
      }
      buttons.forEach((button) => {
        button.setAttribute("disabled", true);
      })
    }
  });
});

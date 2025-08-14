const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";
const PLAYER_HUMAN = "human";
const PLAYER_COMPUTER = "computer";

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

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  const winner = findWinner(humanChoice, computerChoice);
  const msg = winner ? `Congrats. ${winner} is the winner!` : "It's a draw.";
  console.log(`(You) ${humanChoice} vs ${computerChoice} (Computer)`);
  console.log(msg);
  console.log(`Score -  (You) ${humanScore}:${computerScore} (computer)`);
}


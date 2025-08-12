const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

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

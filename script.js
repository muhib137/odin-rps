
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";



function getComputerChoice(){
  const randInt = Math.floor(Math.random() * 3);
  let computerChoice;
  switch(randInt){
    case 0:
      computerChoice = ROCK;
      break;
    case 1: 
      computerChoice = PAPER;
      break;
    default:
      computerChoice = SCISSORS;
  }
  
  return computerChoice;
}
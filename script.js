function getRandomNumber() 
{
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() 
{
  let num = getRandomNumber();
  if (num === 0) 
  {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else if (num === 2) {
    return "scissors";
  }
}

function getHumanChoice()
{
  return prompt("rock, paper, or scissors?: ", ""); 
}

function getRoundResult(humanChoice, computerChoice)
{
  let result = "";

  if (humanChoice === computerChoice) 
  {
    result = "tie";
  } 
  else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper")  
  {
    result = "human";
  }
  else
  {
    result = "computer";
  }

  return result;
}

function displayRoundResult(result, humanChoice, computerChoice)
{
  humanChoice = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
  computerChoice = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);

  if (result === "human")
  {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
  }
  else if (result === "computer")
  {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
  else
  {
    console.log("It was a tie!");
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) 
{
  humanChoice = humanChoice.toLowerCase();
  let result = getRoundResult(humanChoice, computerChoice);

  if (result === "human") 
  {
    humanScore++;
  }
  else if (result === "computer")
  {
    computerScore++;
  }

  displayRoundResult(result, humanChoice, computerChoice);
}
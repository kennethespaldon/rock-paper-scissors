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
const humanChoiceDisplay = document.querySelector(".player-choice");
const computerChoiceDisplay = document.querySelector(".computer-choice");
const humanScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const currentRoundDisplay = document.querySelector(".current-round");
const roundResultDisplay = document.querySelector(".round-results");

const symbols = document.querySelectorAll(".symbol");

const resetBtn = document.querySelector(".reset-btn");

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
    roundResultDisplay.textContent = "Player wins!";
  }
  else if (result === "computer")
  {
    roundResultDisplay.textContent = "Computer wins!";
  }
  else
  {
    roundResultDisplay.textContent = "Tie!";
  }
}

function displayChosenSymbols(humanChoice, computerChoice) 
{
  humanChoiceDisplay.textContent = humanChoice.slice(0, 1).toUpperCase() + humanChoice.slice(1);
  computerChoiceDisplay.textContent = computerChoice.slice(0, 1).toUpperCase() + computerChoice.slice(1);
}

function displayCurrentRound(round, humanScore, computerScore)
{
  if (!checkForWinner(humanScore, computerScore))
  {
    currentRoundDisplay.textContent = `Round ${round}`;
  }
  else
  {
    currentRoundDisplay.textContent = "GAME OVER";
  }
}

function displayScores(humanScore, computerScore)
{
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

function checkForWinner(humanScore, computerScore) 
{
  if (humanScore === 5 || computerScore === 5)
  {
    return true;
  }

  return false;
}

function resetUI() 
{
  humanChoiceDisplay.textContent = "";
  humanScoreDisplay.textContent = 0;
  computerChoiceDisplay.textContent = "";
  computerScoreDisplay.textContent = 0;
  currentRoundDisplay.textContent = "Round 1";
  roundResultDisplay.textContent = "";
}

function updateUI(result, round, result, humanScore, computerScore, humanChoice, computerChoice)
{
  displayRoundResult(result, humanChoice, computerChoice);
  displayChosenSymbols(humanChoice, computerChoice);
  displayCurrentRound(round, humanScore, computerScore);
  displayScores(humanScore, computerScore);
}

function playGame() 
{
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

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
    
    updateUI(result, round, result, humanScore, computerScore, humanChoice, computerChoice);

    if (!checkForWinner(humanScore, computerScore))
    {
      round++;
    }
    else 
    {
      symbols.forEach((symbol) => {
        symbol.removeEventListener("click", chooseSymbol);
      });
    }
  }

  function chooseSymbol(symbol) 
  {
    let computerSelection = getComputerChoice();
    let humanSelection = "";

    if (symbol.target.classList.contains("rock-symbol")) 
    {
      humanSelection = "rock";
    }
    else if (symbol.target.classList.contains("paper-symbol"))
    {
      humanSelection = "paper";
    }
    else
    {
      humanSelection = "scissors";
    }

    playRound(humanSelection, computerSelection);
  }

  function enableSymbolButtons()
  {
    symbols.forEach((symbol) => {
      symbol.addEventListener("click", chooseSymbol);
    });  
  }

  resetBtn.addEventListener("click", () => {
      resetUI();
      enableSymbolButtons();
      round = 1;
      humanScore = 0;
      computerScore = 0;
  });

  enableSymbolButtons();
}

playGame();
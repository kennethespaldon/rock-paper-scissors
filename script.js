"use strict";

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  switch (getRandomNumber()) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function capitalizeString(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
}

function isRoundTie(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return true;
  }

  return false;
}

function doesPlayerWinRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return true;
  }

  return false;
}

function outputRoundResults(playerSelection, computerSelection) {
  if (isRoundTie(playerSelection, computerSelection)) {
    console.log("It's a tie!");
  } else {
    if (doesPlayerWinRound(playerSelection, computerSelection)) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
      return "Player";
    } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
      return "Computer";
    }
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeString(playerSelection);

  if (isRoundTie(playerSelection, computerSelection)) {
    outputRoundResults(playerSelection, computerSelection);
    return "Tie";
  } else {
    if (doesPlayerWinRound(playerSelection, computerSelection)) {
      outputRoundResults(playerSelection, computerSelection);
      return "Player";
    } else {
      outputRoundResults(playerSelection, computerSelection);
      return "Computer";
    }
  }
}

function outputCurrentGameScore(playerScore, computerScore) {
  console.log(`Current Score: ${playerScore} - ${computerScore}`);
}

function outputGameResults(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("Tie game!");
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  let rounds = 5;

  for (let i = 0; i < rounds; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors:");
    const computerSelection = getComputerChoice();
    const roundWinner = playRound(playerSelection, computerSelection);

    switch (roundWinner) {
      case "Player":
        playerScore++;
        break;
      case "Computer":
        computerScore++;
        break;
    }

    outputCurrentGameScore(playerScore, computerScore);
  }

  outputGameResults(playerScore, computerScore);
}

playGame();
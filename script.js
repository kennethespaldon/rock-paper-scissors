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

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalizeString(playerSelection);

  if (isRoundTie(playerSelection, computerSelection)) {
    return "Tie";
  } else {
    if (doesPlayerWinRound(playerSelection, computerSelection)) {
      console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
      console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
  }
}
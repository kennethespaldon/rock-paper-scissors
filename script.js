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

function convertStringToLowerCase(str) {
  return str.toLowerCase();
}

function capitalizeString(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function checkSelections(playerSelection, computerSelection) {
  if (playerSelection !== computerSelection) {
    if (
      (playerSelection === "Rock" && computerSelection === "Scissors") ||
      (playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You lose! ${playerSelection} beats ${computerSelection}`;
    }
  } else {
    return "It's a tie!";
  }
}
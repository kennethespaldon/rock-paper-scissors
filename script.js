"use strict";

function getRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
  let randomNum = getRandomNumber();

  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
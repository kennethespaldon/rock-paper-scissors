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
  return str.slice(0, 1) + str.slice(1);
}
"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

console.log(secretNumber);

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // No input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  }
  //   Win
  else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  //   Wrong guess
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "To high!" : "To low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";

  console.log(secretNumber);
});

#!/usr/bin/node

const readline = require("readline");

const { stdin: input, stdout: output } = process;

const rl = readline.createInterface({
  input,
  output,
});

const levels = [
  { name: "Easy", value: 10, key: 1 },
  { name: "Medium", value: 5, key: 2 },
  { name: "Hard", value: 3, key: 3 },
];

let attempts = 5;
let attempted = 0;
let generatedNumber = Math.round(Math.random() * 100);

function restartGame() {
  console.log("");
  rl.question("Do you want to play again this game? (y/n)", (answer) => {
    if (answer == "y") {
      chooseDifficulty();
    } else {
      rl.close();
    }
  });
}

function askQuestion() {
  rl.question("Enter your guess: ", (answer) => {
    attempted++;
    if (answer == generatedNumber) {
      console.log(
        `Congratulations! You guessed the correct number in ${attempted} attempts.`
      );
      restartGame();
    } else {
      if (answer < generatedNumber) {
        console.log(`Incorrect! The number is greater than ${answer}.`);
      } else {
        console.log(`Incorrect! The number is less than ${answer}.`);
      }
      if (attempts == attempted) {
        console.log("The End! You have used all your attempts.");
        restartGame();
      } else {
        askQuestion();
      }
    }
  });
}

function startGame() {
  console.log("Welcome to the Number Guessing Game!");
  console.log("I'm thinking of a number between 1 and 100.");
  console.log("You have 5 chances to guess the correct number.");
  console.log("");
  chooseDifficulty();
}

function chooseDifficulty() {
  console.log("Please select the difficulty level:");
  levels.forEach((level, index) => {
    console.log(`${index + 1}. ${level.name} (${level.value} chances)`);
  });
  console.log("");

  rl.question("Enter your choice: ", (answer) => {
    if (!isNaN(answer) && answer > 0 && answer <= levels.length) {
      const value = levels.find((level) => level.key == answer);
      attempts = value.value;
      console.log("");
      console.log(
        `Great! You have selected the ${value.name} difficulty level.`
      );
      console.log("Let's start the game!");
      console.log("");
      askQuestion();
    } else {
      console.log("");
      chooseDifficulty();
    }
  });
}

startGame();

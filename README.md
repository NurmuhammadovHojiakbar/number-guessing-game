# Number Guessing Game

Sample solution for the [number-guessing-game](https://roadmap.sh/projects/number-guessing-game) challenge from [roadmap.sh](https://roadmap.sh).

## Introduction

Welcome to the Number Guessing Game! This is a simple command-line game where you have to guess a randomly generated number between 1 and 100. The game has three difficulty levels: Easy, Medium, and Hard, each with a different number of attempts to guess the correct number.

## How to Run

1. **Clone the Repository:**

```bash
git clone https://github.com/NurmuhammadovHojiakbar/number-guessing-game.git
cd number-guessing-game
npm link
```

## How to Play

Run the game by executing the following code.

```bash
guess-number 
```

-------------------

* **Easy**: 10 attempts to guess the correct number.
* **Medium**: 5 attempts to guess the correct number.
* **Hard**: 3 attempts to guess the correct number.

## Technical Details

This game is built using Node.js and the `readline` module for handling user input. The game logic is implemented in JavaScript, and the code is organized into separate functions for each difficulty level and for handling user input.

### Requirements

* Node.js (version 14 or higher)
* `readline` module (built-in with Node.js)

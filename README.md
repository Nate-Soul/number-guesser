# Number Guesser

## Overview
This is a simple number guessing game where the player has to guess a random number between a specified range. The game provides feedback based on the player's guess and tracks the number of remaining attempts. It also allows the player to play again if they win or run out of guesses.

## Game Rules
- The game selects a random number within a specified range.
- The player has a limited number of attempts to guess the correct number.
- If the player's guess is correct, they win the game.
- If the player's guess is incorrect, they receive feedback and lose an attempt.
- The game ends when the player either correctly guesses the number or runs out of attempts.

## Code Structure
- The game variables, such as the minimum and maximum numbers, the winning number, and the remaining guesses, are defined in the JavaScript code.
- A function `getRandomNum(min, max)` generates a random number within the specified range.
- Event listeners are used to handle user interactions.
- The game provides messages to the player, such as feedback on their guess, win or loss messages, and the option to play again.

## User Interface
- The game interface includes a form input for the player to enter their guess.
- The UI displays the range of possible numbers, the player's remaining guesses, and messages to guide the player.
- When the game ends, the player can choose to play again by clicking the "Play Again" button.

## Technologies
- JavaScript for game logic.
- HTML for the game interface.

## Usage
1. Enter your guess in the input field.
2. Click the "Guess" button to check if your guess is correct.
3. If you win or lose, the game will display a message.
4. You can choose to play again by clicking the "Play Again" button.

Enjoy the game!

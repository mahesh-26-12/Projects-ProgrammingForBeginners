# Guess the Number

A lightweight, client-side web game where the player guesses a randomly generated number between **1 and 100**. Built with plain HTML, CSS, and JavaScript.

## Overview
- Generates a new random number on page load.
- Validates input and guides the player with “too high / too low” hints.
- Tracks and displays the number of attempts.
- Disables input after a correct guess for a clear end state.

## Tech Stack
- **HTML5** for structure
- **CSS3** for styling
- **JavaScript (ES6+)** for game logic

## Getting Started
1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

No build step or server is required.

## Project Structure

## How to Play
1. Enter a number between 1 and 100.
2. Click **Submit**.
3. Use the hints to narrow down your guess until you find the correct number.
4. The input is locked once you win.

## Development Notes
- Input validation prevents out-of-range and non-numeric entries.
- Attempts are counted per submitted guess.
- Logic is kept intentionally simple for readability and learning.

## Possible Enhancements
- Add a **Reset** button to start a new round without reloading.
- Show guess history or best score.
- Add keyboard support (e.g., Enter key submits).
- Improve responsive layout and accessibility helpers.

## License
This project is open source. You may use, modify, and distribute it per the repository’s chosen license.

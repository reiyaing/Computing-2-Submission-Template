//where you write the code

import R from "./ramda.js";

//The game I propose is a memory game where players match pairs of tiles. 
//It's a fun and engaging way to exercise memory skills while promoting critical thinking and planning. 
//To add a challenge, the game includes a move counter, encouraging players to complete it with as few moves as possible.

//Additionally, a timer is incorporated to measure the player's efficiency and speed in completing the game. 
//This feature adds an extra level of excitement and helps develop quick thinking abilities.

//I haven't specially started coding, I did write out the functions that I will be writing. 
//I want to maybe use classes, but I am still unsure of whether we are supposed to use them
//Your feedback on the functions would be greatly appreciated :)

//------------------------------------------------------------------------------------------------------------------------------


//generateGame: 
//This function generates the game board based on the selected dimensions. 
//It ensures that the dimensions are even and then creates a grid of cards with randomly selected symbols. 
//The symbols are duplicated to create pairs. This function will be called to set up the initial game board.

//attachEventListeners: 
//This function attaches event listeners to the necessary elements. 
//It listens for clicks on cards and the start button. 
//When a card is clicked, it calls the flipCard function to handle the flipping logic. 
//When the start button is clicked, it calls the startGame function to begin the game.

//flipCard: 
//This function is responsible for flipping the cards. 
//It keeps track of the number of flipped cards and total flips. 
//If the game has not started yet, it calls the startGame function. 
//It also checks if two cards have been flipped and compares their symbols. 
//If the symbols match, the cards are marked as "matched." If the symbols don't match, the cards are flipped back after a short delay. 
//If all the cards are matched, it calls the showWinMessage function.

//startGame: 
//This function starts the game. 
//It sets the gameStarted flag to true, disables the start button, 
//and starts a timer to update the moves counter and timer display every second.

//showWinMessage: 
//This function displays a win message when all the cards are matched. 
//It shows the number of moves and the total time taken. 
//It also provides an input field for the player to enter their name and a button to see the leaderboard.

//updateLeaderboard: 
//This function updates the leaderboard with the player's name and score. 
//It creates a new entry in the leaderboard table with the provided information.

//restartGame: 
//This function restarts the game. 
//It hides the leaderboard, clears the leaderboard list, enables the start button, 
//resets the moves counter and timer display, and generates a new game board using the generateGame function.
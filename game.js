import { loadArtists } from './data.js';
import { displayArtistAndGenres, updateScore, showResult, clearResult } from './ui.js';  

let currentArtist = {};
let score = 0;
let timeRemaining = 60;
let timerInterval;
let artists = [];
const genres = [
    "Jazz", "Blues", "Rock 'n' Roll", "Rock", "Metal", "Punk", "Soul", "Disco/Funk",
    "Reggae", "Acoustic/Folk", "Commercial Pop", "Urban", "Electronic"
];

// Start the countdown timer
function startTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Time Remaining: ${timeRemaining}`;

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `Time Remaining: ${timeRemaining}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}

function endGame() {
    // Hide game container and show game over splash screen
    document.getElementById("game-container").style.display = 'none';
    
    // Update splash screen for Game Over
    document.getElementById("splash-header").innerText = "Game Over!";
    document.getElementById("splash-instructions").style.display = 'none';  // Hide instructions
    document.getElementById("game-over-score").style.display = 'block';  // Show the score section
    document.getElementById("final-score").innerText = score;  // Display the final score
    
    // Change the button to "Play Again"
    document.getElementById("start-game").innerText = "Play Again";
    
    // Show the splash screen again for the game over
    document.getElementById("splash-screen").style.display = 'flex';
}


// Utility to play sound effects
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    }
}

// Disable all genre buttons after a selection is made
function disableGenreButtons() {
    document.querySelectorAll('.genre-button').forEach(button => button.disabled = true);
}

// Re-enable all genre buttons for the next round
function enableGenreButtons() {
    document.querySelectorAll('.genre-button').forEach(button => button.disabled = false);
}

// Correct answer handling
export function handleCorrectAnswer() {
    disableGenreButtons();  // Disable buttons immediately after an answer is selected
    score++;
    updateScore(score);
    showResult('Correct!', true);  // Pass true for correct answers
    playSound('correct-sound');  // Play correct answer sound
    setTimeout(() => {
        clearResult();
        displayNextArtist();
    }, 2000);
}

// Incorrect answer handling
export function handleIncorrectAnswer() {
    disableGenreButtons();  // Disable buttons immediately after an answer is selected
    showResult(`Incorrect! The correct genre was ${currentArtist.genre}.`, false);  // Pass false for incorrect answers
    playSound('incorrect-sound');  // Play incorrect answer sound
    setTimeout(() => {
        clearResult();
        displayNextArtist();
    }, 2000);
}

// Display the next artist and generate buttons
function displayNextArtist() {
    if (artists.length > 0) {
        currentArtist = getRandomArtist();
        console.log("Displaying artist: ", currentArtist);
        displayArtistAndGenres(currentArtist, genres);
        enableGenreButtons();  // Re-enable buttons for the new round
    } else {
        console.error("No artists available to display.");
    }
}
// starting game

export async function startGame() {
    console.log("Start Game clicked!");

    // Hide the splash screen
    document.getElementById("splash-screen").style.display = 'none';

    // Reset splash screen elements for the next game
    document.getElementById("splash-header").innerText = "Welcome to the Artist & Genre Matching Game!";
    document.getElementById("splash-instructions").style.display = 'block';  // Show instructions again
    document.getElementById("game-over-score").style.display = 'none';  // Hide the game over score

    // Show game container
    document.getElementById("game-container").style.display = 'block';

    // Reset game state
    timeRemaining = 60;
    score = 0;
    updateScore(score);

    // Start the countdown timer
    startTimer();

    // Load artist data and start the game
    try {
        artists = await loadArtists();
        console.log("Artists loaded: ", artists);  // Log loaded artists
        if (artists.length > 0) {
            console.log("Displaying the first artist");
            displayNextArtist();
        } else {
            console.error('No artist data loaded.');
        }
    } catch (error) {
        console.error('Error loading artists:', error);
    }
}


// Get a random artist from the loaded list
function getRandomArtist() {
    const randomIndex = Math.floor(Math.random() * artists.length);
    return artists[randomIndex];
}

// Ensure DOM is loaded before attaching event listener
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById("start-game");
    
    // Debugging logs to check if the button is found
    if (startButton) {
        console.log("Start Game button found, attaching event listener...");
        startButton.onclick = startGame;  // Attach event listener
    } else {
        console.error("Start Game button not found!");
    }
});

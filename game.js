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

// End the game when time runs out
function endGame() {
    alert("Time's up! Game over.");
    disableGenreButtons();
    document.getElementById('start-game').style.display = 'block';
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

// Export the necessary functions so they can be used in ui.js
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

// Start the game
export async function startGame() {
    timeRemaining = 60;
    score = 0;
    updateScore(score);

    // Hide the start button
    document.getElementById("start-game").style.display = 'none';

    // Start the countdown timer
    startTimer();

    // Load artist data and start the game
    try {
        artists = await loadArtists();
        console.log("Artists loaded: ", artists);  // Log loaded artists
        if (artists.length > 0) {
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

document.getElementById("start-game").onclick = startGame;

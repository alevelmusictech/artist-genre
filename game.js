// game.js

import { loadArtists } from './data.js';
import { displayArtistAndGenres, updateScore, showResult, clearResult } from './ui.js';

let currentArtist = {};
let score = 0;
let timeRemaining = 60;
let timerInterval;
let artists = [];

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

// Handle correct answer
function handleCorrectAnswer() {
    score++;
    updateScore(score);
    showResult('Correct!', 'green');
    playSound('correct-sound');
    setTimeout(() => {
        clearResult();
        displayArtistAndGenres(currentArtist, genres);
    }, 2000);
}

// Handle incorrect answer
function handleIncorrectAnswer() {
    showResult(`Incorrect! The correct genre was ${currentArtist.genre}.`, 'red');
    playSound('incorrect-sound');
    setTimeout(() => {
        clearResult();
        displayArtistAndGenres(currentArtist, genres);
    }, 2000);
}

// Start the game
export async function startGame() {
    timeRemaining = 60;
    score = 0;
    updateScore(score);
    startTimer();

    // Load artist data and start the game
    artists = await loadArtists();
    currentArtist = getRandomArtist();
    displayArtistAndGenres(currentArtist, genres);
}

// Get a random artist from the list
function getRandomArtist() {
    const randomIndex = Math.floor(Math.random() * artists.length);
    return artists[randomIndex];
}

// Utility to disable buttons
function disableGenreButtons() {
    document.querySelectorAll('.genre-button').forEach(button => button.disabled = true);
}

// Utility to enable buttons
function enableGenreButtons() {
    document.querySelectorAll('.genre-button').forEach(button => button.disabled = false);
}

document.getElementById("start-game").onclick = startGame;

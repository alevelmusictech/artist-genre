// ui.js

// Import the functions from game.js
import { handleCorrectAnswer, handleIncorrectAnswer } from './game.js';

// Update the displayed artist and generate buttons for genres
export function displayArtistAndGenres(artist, genres) {
    document.getElementById("artist-name").innerText = `Artist: ${artist.name}`;
    const genreButtonsContainer = document.getElementById("genre-buttons");
    genreButtonsContainer.innerHTML = ''; // Clear existing buttons

    genres.forEach(genre => {
        const button = createGenreButton(genre, artist);
        genreButtonsContainer.appendChild(button);
    });
    console.log("Buttons created for genres:", genres);  // Log button creation
}

// Create a genre button with event handling
function createGenreButton(genre, artist) {
    const button = document.createElement("button");
    button.className = 'genre-button';
    button.innerText = genre;
    button.onclick = () => {
        if (genre === artist.genre) {
            handleCorrectAnswer();  // Handle correct answer
        } else {
            handleIncorrectAnswer();  // Handle incorrect answer
        }
    };
    return button;
}

// Update the displayed score
export function updateScore(score) {
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Show result message and add the appropriate class (correct/incorrect)
export function showResult(message, isCorrect) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = message;
    
    // Remove both classes to reset the result box
    resultElement.classList.remove('correct-result', 'incorrect-result');
    
    // Add the appropriate class depending on whether the answer is correct or incorrect
    if (isCorrect) {
        resultElement.classList.add('correct-result');
        console.log('Correct result class added');
    } else {
        resultElement.classList.add('incorrect-result');
        console.log('Incorrect result class added');
    }

    resultElement.style.visibility = 'visible';
    resultElement.style.opacity = '1';
}

// Clear result message and remove the result classes
export function clearResult() {
    const resultElement = document.getElementById('result');
    resultElement.style.opacity = '0';
    resultElement.style.visibility = 'hidden';
    resultElement.classList.remove('correct-result', 'incorrect-result');  // Reset the result classes
}

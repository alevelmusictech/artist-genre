// ui.js

// Import the necessary functions from game.js
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
}

// Create a genre button with event handling and visual feedback
function createGenreButton(genre, artist) {
    const button = document.createElement("button");
    button.className = 'genre-button';
    button.innerText = genre;
    button.onclick = () => {
        if (genre === artist.genre) {
            handleCorrectAnswer();  // Handle correct answer
            button.classList.add('correct-glow');  // Add glow effect to correct button
        } else {
            handleIncorrectAnswer();  // Handle incorrect answer
            button.classList.add('shake');  // Add shake effect to incorrect button
        }

        // Remove the visual effect after a short delay
        setTimeout(() => {
            button.classList.remove('correct-glow', 'shake');
        }, 1000);  // 1 second delay to remove the effect
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
    } else {
        resultElement.classList.add('incorrect-result');
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

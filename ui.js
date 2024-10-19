// ui.js

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

// Create a genre button with event handling
function createGenreButton(genre, artist) {
    const button = document.createElement("button");
    button.className = 'genre-button';
    button.innerText = genre;
    button.onclick = () => {
        if (genre === artist.genre) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
    };
    return button;
}

// Update the displayed score
export function updateScore(score) {
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Show result message (correct/incorrect)
export function showResult(message, color) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = message;
    resultElement.style.backgroundColor = color;
    resultElement.style.visibility = 'visible';
    resultElement.style.opacity = '1';
}

// Clear result message
export function clearResult() {
    const resultElement = document.getElementById('result');
    resultElement.style.opacity = '0';
    resultElement.style.visibility = 'hidden';
}

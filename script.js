console.log("JavaScript file is running");

const genres = [
    "Jazz", 
    "Blues", 
    "Rock 'n' Roll", 
    "Rock", 
    "Metal", 
    "Punk", 
    "Soul", 
    "Disco/Funk", 
    "Reggae", 
    "Acoustic/Folk", 
    "Commercial Pop", 
    "Urban", 
    "Electronic"
];

let currentArtist = {};
let score = 0;
let artists = [];
let timeRemaining = 60;
let timerInterval; 

// Function to start the countdown timer
function startTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.innerText = `Time Remaining: ${timeRemaining}`; 

    timerInterval = setInterval(() => {
        timeRemaining--;
        timerElement.innerText = `Time Remaining: ${timeRemaining}`;
        console.log(`Time Remaining: ${timeRemaining}`);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval); 
            endGame(); 
        }
    }, 1000); 
}

// Function to end the game when the timer reaches zero
function endGame() {
    alert("Time's up! Game over.");
    disableGenreButtons();
    document.getElementById('start-game').style.display = 'block';  
}

// Load artist-genre data from JSON
async function loadArtistsFromJSON() {
    try {
        const response = await fetch('name,genre.json'); 
        artists = await response.json();
        console.log("Artists loaded:", artists); 
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

// Function to select a random artist
function getRandomArtist() {
    const randomIndex = Math.floor(Math.random() * artists.length);
    return artists[randomIndex];
}

// Function to display the artist and genres
function displayArtistAndGenres() {
    if (artists.length === 0) {
        console.error('No artists available to display.');
        return;
    }
    currentArtist = getRandomArtist();
    document.getElementById("artist-name").innerText = `Artist: ${currentArtist.name}`;
    const genreButtonsContainer = document.getElementById("genre-buttons");
    genreButtonsContainer.innerHTML = ''; 

    genres.forEach(genre => {
        const button = document.createElement("button");
        button.className = 'genre-button';
        button.innerText = genre;
        button.onclick = () => {
            if (genre === currentArtist.genre) {
                handleCorrectAnswer();
            } else {
                handleIncorrectAnswer();
            }
        };
        genreButtonsContainer.appendChild(button);
    });
}
// Function to play sound
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.play();
    } else {
        console.error(`Sound with id ${soundId} not found.`);
    }
}   


// Function to handle correct answers
function handleCorrectAnswer() {
    const resultElement = document.getElementById('result');
    resultElement.innerText = 'Correct!'; 
    resultElement.style.backgroundColor = 'green';  
    resultElement.style.color = 'white';  
    resultElement.style.visibility = 'visible';  
    resultElement.style.opacity = '1';  

    score++;  
    document.getElementById('score').innerText = `Score: ${score}`;  
    
    playSound('correct-sound');
    disableGenreButtons();
    

    setTimeout(() => {
        resultElement.style.opacity = '0';  
        resultElement.style.visibility = 'hidden';  
        resultElement.style.backgroundColor = '';  
        displayArtistAndGenres();  
        enableGenreButtons();
    }, 2000); 
}

// Function to handle incorrect answers
function handleIncorrectAnswer() {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Incorrect!<br>The correct answer was ${currentArtist.genre}.`; 
    resultElement.style.backgroundColor = 'red';  
    resultElement.style.color = 'white';  
    resultElement.style.visibility = 'visible';  
    resultElement.style.opacity = '1';  

    playSound('incorrect-sound');
    disableGenreButtons();

    setTimeout(() => {
        resultElement.style.opacity = '0';  
        resultElement.style.visibility = 'hidden';  
        resultElement.style.backgroundColor = '';  
        displayArtistAndGenres();  
        enableGenreButtons();
    }, 2000); 
}

// Function to update the score display
function updateScoreDisplay() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

// Function to disable all genre buttons
function disableGenreButtons() {
    const buttons = document.querySelectorAll('.genre-button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Function to enable all genre buttons
function enableGenreButtons() {
    const buttons = document.querySelectorAll('.genre-button');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

// Ensure elements exist and start game on click
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById("start-game");

    if (startButton) {
        startButton.onclick = async () => {
            console.log('Start Game button clicked');
            startButton.style.display = "none"; 
            timeRemaining = 60; 
            startTimer(); 

            await loadArtistsFromJSON();  
            displayArtistAndGenres();  
        };
    } else {
        console.error('Start button not found');
    }
});

// Function to load and parse the CSV file
async function loadArtistsFromCSV() {
    const response = await fetch('name,genre.csv');
    const data = await response.text();
    const lines = data.split('\n');
    const artists = lines.slice(1).map(line => {
        const [name, genre] = line.split(',');
        return { name: name.trim(), genre: genre.trim() };
    });
    return artists;
}

const genres = ["Jazz", "Blues", "Rock 'n' Roll", "Rock", "Metal", "Punk", "Soul", "Disco/Funk", "Reggae", "Acoustic/Folk", "Commercial Pop", "Urban", "Electronic"];
let currentArtist = {};
let score = 0;
let timer; // Declare a variable to hold the timer
let timeRemaining = 180; // Set the initial time (3 minutes in seconds)
let artists = []; // Declare a global artists variable

// Function to select a random artist
function getRandomArtist() {
    const randomIndex = Math.floor(Math.random() * artists.length);
    return artists[randomIndex];
}

// Function to display the artist and genres
function displayArtistAndGenres() {
    currentArtist = getRandomArtist();
    document.getElementById("artist-name").innerText = `Artist: ${currentArtist.name}`;
    const genreButtonsContainer = document.getElementById("genre-buttons");
    genreButtonsContainer.innerHTML = ''; // Clear previous buttons

    genres.forEach(genre => {
        const button = document.createElement("button");
        button.innerText = genre;
        button.onclick = () => checkGenre(genre);
        genreButtonsContainer.appendChild(button);
    });
}

// Function to check if the selected genre is correct
function checkGenre(selectedGenre) {
    const resultElement = document.getElementById("result");
    if (selectedGenre === currentArtist.genre) {
        resultElement.innerText = "Correct!";
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
        setTimeout(() => {
            resultElement.innerText = '';
            displayArtistAndGenres();
        }, 1000); // Move to the next artist after 1 second
    } else {
        resultElement.innerText = `Wrong! The correct genre is ${currentArtist.genre}.`;
    }
}

// Function to start the countdown timer
function startTimer() {
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            endGame(); // End the game when time is up
        }
    }, 1000);
}

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").innerText = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to end the game when the timer reaches zero
function endGame() {
    clearInterval(timer);
    document.getElementById("result").innerText = "Time's up! Game over.";
    disableGenreButtons();
}

// Function to disable genre buttons when the game ends
function disableGenreButtons() {
    const buttons = document.querySelectorAll("#genre-buttons button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Function to start a new game
function startNewGame() {
    score = 0;
    timeRemaining = 180; // Reset timer to 3 minutes
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("result").innerText = '';
    startTimer(); // Start the timer
    displayArtistAndGenres(); // Show the first artist and buttons
    // Show buttons
    document.getElementById("next-artist").style.display = "inline";
    document.getElementById("restart-game").style.display = "inline";
}

// Event listener for the Next Artist button
document.getElementById("next-artist").onclick = () => {
    document.getElementById("result").innerText = '';
    displayArtistAndGenres();
};

// Event listener for the Restart Game button
document.getElementById("restart-game").onclick = () => {
    clearInterval(timer);
    startNewGame(); // Start a new game when restart is clicked
};

// Event listener for the Start Game button
document.getElementById("start-game").onclick = async () => {
    document.getElementById("start-game").style.display = "none"; // Hide Start button after game starts
    artists = await loadArtistsFromCSV(); // Load artists before starting the game
    startNewGame();
};

// Call the initGame function to start the game
async function initGame() {
    artists = await loadArtistsFromCSV(); // Load artists when initializing the game
}

initGame();
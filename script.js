// Function to load and parse the CSV file
async function loadArtistsFromCSV() {
    try {
        const response = await fetch('name,genre.csv'); // Corrected file name
        const data = await response.text();
        const lines = data.split('\n');
        const artists = lines.slice(1).map(line => {
            const [name, genre] = line.split(',');
            return { name: name.trim(), genre: genre.trim() };
        });
        return artists;
    } catch (error) {
        console.error('Error loading CSV:', error);
        return [];
    }
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
    if (artists.length === 0) {
        console.error('No artists available to display.');
        return;
    }
    currentArtist = getRandomArtist();
    document.getElementById("artist-name").innerText = `Artist: ${currentArtist.name}`;
    const genreButtonsContainer = document.getElementById("genre-buttons");
    genreButtonsContainer.innerHTML = ''; // Clear previous buttons

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

// Function to handle correct answers
function handleCorrectAnswer() {
    score++;
    updateScoreDisplay();

    disableGenreButtons();

    setTimeout(() => {
        displayArtistAndGenres();
        enableGenreButtons();
    }, 1000);
}

// Function to handle incorrect answers
function handleIncorrectAnswer() {
    // Handle incorrect answer logic
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

// Function to start a new game
function startNewGame() {
    score = 0;
    updateScoreDisplay();
    displayArtistAndGenres();
    timer = setInterval(() => {
        // Timer logic
    }, 1000);
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
    console.log('Start Game button clicked');
    document.getElementById("start-game").style.display = "none"; // Hide Start button after game starts
    artists = await loadArtistsFromCSV(); // Load artists before starting the game
    console.log('Artists loaded:', artists);
    startNewGame();
};

// Call the initGame function to start the game
async function initGame() {
    console.log('Initializing game');
    artists = await loadArtistsFromCSV(); // Load artists when initializing the game
    console.log('Artists loaded during init:', artists);
}

initGame();
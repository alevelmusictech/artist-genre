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
let artists = []; // This will be populated from the JSON

// Load artist-genre data from JSON
async function loadArtistsFromJSON() {
    try {
        const response = await fetch('name,genre.json'); // Path to JSON
        artists = await response.json();
        console.log("Artists loaded:", artists);  // Check if artists are loaded correctly
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

// Get a random artist
function getRandomArtist() {
    const randomIndex = Math.floor(Math.random() * artists.length);
    return artists[randomIndex];
}

// Display artist and genre buttons
function displayArtistAndGenres() {
    currentArtist = getRandomArtist();
    document.getElementById('artist-name').innerText = `Artist: ${currentArtist.name}`;
    const genreButtonsContainer = document.getElementById('genre-buttons');
    genreButtonsContainer.innerHTML = ''; // Clear previous buttons

    // Log the artist being displayed
    console.log("Displaying artist:", currentArtist.name, "with genre:", currentArtist.genre);

    // Create genre buttons
    genres.forEach(genre => {
        console.log("Creating button for genre:", genre);  // Log each genre to ensure it's iterating correctly

        const button = document.createElement('button');
        button.innerText = genre;

        button.style.margin = '5px';  // Ensure proper spacing between buttons
        button.style.padding = '10px';  // Optional: improve button styling

        // On button click, compare genres
        button.onclick = () => {
            const selectedGenre = genre.trim().toLowerCase();
            const artistGenre = currentArtist.genre.trim().toLowerCase();

            if (selectedGenre === artistGenre) {
                console.log("Correct! Selected genre:", selectedGenre);
                handleCorrectAnswer();
            } else {
                console.log("Incorrect. Selected genre:", selectedGenre, "Artist genre:", artistGenre);
                handleIncorrectAnswer();
            }
        };

        // Append button and log its creation
        genreButtonsContainer.appendChild(button);
        console.log("Button appended for genre:", genre);
    });
}

// Handle correct answer
function handleCorrectAnswer() {
    score++;
    document.getElementById('score').innerText = `Score: ${score}`;
    displayArtistAndGenres();
}

// Handle incorrect answer
function handleIncorrectAnswer() {
    displayArtistAndGenres();
}

// Start game
document.getElementById('start-game').onclick = async () => {
    await loadArtistsFromJSON();  // Load artists from JSON
    displayArtistAndGenres();
};

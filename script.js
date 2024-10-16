// Complete list of artists and their genres
const artists = [
    {
      "name": "Louis Armstrong",
      "genre": "Jazz"
    },
    {
      "name": "Duke Ellington",
      "genre": "Jazz"
    },
    {
      "name": "Charlie Parker",
      "genre": "Jazz"
    },
    {
      "name": "Miles Davis",
      "genre": "Jazz"
    },
    {
      "name": "John Coltrane",
      "genre": "Jazz"
    },
    {
      "name": "Thelonious Monk",
      "genre": "Jazz"
    },
    {
      "name": "Dizzy Gillespie",
      "genre": "Jazz"
    },
    {
      "name": "Billie Holiday",
      "genre": "Jazz"
    },
    {
      "name": "Ella Fitzgerald",
      "genre": "Jazz"
    },
    {
      "name": "Charles Mingus",
      "genre": "Jazz"
    },
    {
      "name": "Dave Brubeck",
      "genre": "Jazz"
    },
    {
      "name": "Herbie Hancock",
      "genre": "Jazz"
    },
    {
      "name": "Art Blakey",
      "genre": "Jazz"
    },
    {
      "name": "Stan Getz",
      "genre": "Jazz"
    },
    {
      "name": "Chet Baker",
      "genre": "Jazz"
    },
    {
      "name": "Sarah Vaughan",
      "genre": "Jazz"
    },
    {
      "name": "Sonny Rollins",
      "genre": "Jazz"
    },
    {
      "name": "Count Basie",
      "genre": "Jazz"
    },
    {
      "name": "Ornette Coleman",
      "genre": "Jazz"
    },
    {
      "name": "Wynton Marsalis",
      "genre": "Jazz"
    },
    {
      "name": "Robert Johnson",
      "genre": "Blues"
    },
    {
      "name": "Muddy Waters",
      "genre": "Blues"
    },
    {
      "name": "B.B. King",
      "genre": "Blues"
    },
    {
      "name": "Howlin' Wolf",
      "genre": "Blues"
    },
    {
      "name": "John Lee Hooker",
      "genre": "Blues"
    },
    {
      "name": "Buddy Guy",
      "genre": "Blues"
    },
    {
      "name": "Albert King",
      "genre": "Blues"
    },
    {
      "name": "Freddie King",
      "genre": "Blues"
    },
    {
      "name": "Etta James",
      "genre": "Blues"
    },
    {
      "name": "T-Bone Walker",
      "genre": "Blues"
    },
    {
      "name": "Elmore James",
      "genre": "Blues"
    },
    {
      "name": "Lightnin' Hopkins",
      "genre": "Blues"
    },
    {
      "name": "Lead Belly",
      "genre": "Blues"
    },
    {
      "name": "Willie Dixon",
      "genre": "Blues"
    },
    {
      "name": "Big Mama Thornton",
      "genre": "Blues"
    },
    {
      "name": "Sonny Boy Williamson II",
      "genre": "Blues"
    },
    {
      "name": "Blind Lemon Jefferson",
      "genre": "Blues"
    },
    {
      "name": "Otis Rush",
      "genre": "Blues"
    },
    {
      "name": "Taj Mahal",
      "genre": "Blues"
    },
    {
      "name": "Eric Clapton",
      "genre": "Blues"
    },
    {
      "name": "Chuck Berry",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Elvis Presley",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Little Richard",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Buddy Holly",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Jerry Lee Lewis",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Carl Perkins",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Fats Domino",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Bo Diddley",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "The Everly Brothers",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Roy Orbison",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Bill Haley & His Comets",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Gene Vincent",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Eddie Cochran",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Ritchie Valens",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "The Crickets",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Dion and the Belmonts",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Link Wray",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Johnny Cash",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Sam Cooke",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "Wanda Jackson",
      "genre": "Rock 'n' Roll"
    },
    {
      "name": "The Beatles",
      "genre": "Rock"
    },
    {
      "name": "The Rolling Stones",
      "genre": "Rock"
    },
    {
      "name": "Led Zeppelin",
      "genre": "Rock"
    },
    {
      "name": "The Who",
      "genre": "Rock"
    },
    {
      "name": "Pink Floyd",
      "genre": "Rock"
    },
    {
      "name": "The Doors",
      "genre": "Rock"
    },
    {
      "name": "Jimi Hendrix",
      "genre": "Rock"
    },
    {
      "name": "The Kinks",
      "genre": "Rock"
    },
    {
      "name": "Cream",
      "genre": "Rock"
    },
    {
      "name": "The Byrds",
      "genre": "Rock"
    },
    {
      "name": "The Velvet Underground",
      "genre": "Rock"
    },
    {
      "name": "David Bowie",
      "genre": "Rock"
    },
    {
      "name": "Queen",
      "genre": "Rock"
    },
    {
      "name": "Black Sabbath",
      "genre": "Rock"
    },
    {
      "name": "Fleetwood Mac",
      "genre": "Rock"
    },
    {
      "name": "The Eagles",
      "genre": "Rock"
    },
    {
      "name": "The Clash",
      "genre": "Rock"
    },
    {
      "name": "Deep Purple",
      "genre": "Rock"
    },
    {
      "name": "Aerosmith",
      "genre": "Rock"
    },
    {
      "name": "U2",
      "genre": "Rock"
    },
    {
      "name": "Black Sabbath",
      "genre": "Metal"
    },
    {
      "name": "Led Zeppelin",
      "genre": "Metal"
    },
    {
      "name": "Judas Priest",
      "genre": "Metal"
    },
    {
      "name": "Iron Maiden",
      "genre": "Metal"
    },
    {
      "name": "Metallica",
      "genre": "Metal"
    },
    {
      "name": "Megadeth",
      "genre": "Metal"
    },
    {
      "name": "Slayer",
      "genre": "Metal"
    },
    {
      "name": "Anthrax",
      "genre": "Metal"
    },
    {
      "name": "Motörhead",
      "genre": "Metal"
    },
    {
      "name": "Pantera",
      "genre": "Metal"
    },
    {
      "name": "Black Label Society",
      "genre": "Metal"
    },
    {
      "name": "Slipknot",
      "genre": "Metal"
    },
    {
      "name": "Sepultura",
      "genre": "Metal"
    },
    {
      "name": "Dream Theater",
      "genre": "Metal"
    },
    {
      "name": "Tool",
      "genre": "Metal"
    },
    {
      "name": "System of a Down",
      "genre": "Metal"
    },
    {
      "name": "Alice in Chains",
      "genre": "Metal"
    },
    {
      "name": "Korn",
      "genre": "Metal"
    },
    {
      "name": "Avenged Sevenfold",
      "genre": "Metal"
    },
    {
      "name": "Lamb of God",
      "genre": "Metal"
    },
    {
      "name": "The Ramones",
      "genre": "Punk"
    },
    {
      "name": "The Sex Pistols",
      "genre": "Punk"
    },
    {
      "name": "The Clash",
      "genre": "Punk"
    },
    {
      "name": "The Dead Kennedys",
      "genre": "Punk"
    },
    {
      "name": "The Stooges",
      "genre": "Punk"
    },
    {
      "name": "Patti Smith",
      "genre": "Punk"
    },
    {
      "name": "The Buzzcocks",
      "genre": "Punk"
    },
    {
      "name": "The Damned",
      "genre": "Punk"
    },
    {
      "name": "Black Flag",
      "genre": "Punk"
    },
    {
      "name": "Bad Brains",
      "genre": "Punk"
    },
    {
      "name": "The Misfits",
      "genre": "Punk"
    },
    {
      "name": "The Germs",
      "genre": "Punk"
    },
    {
      "name": "Minor Threat",
      "genre": "Punk"
    },
    {
      "name": "The Exploited",
      "genre": "Punk"
    },
    {
      "name": "The Adverts",
      "genre": "Punk"
    },
    {
      "name": "The Slits",
      "genre": "Punk"
    },
    {
      "name": "Siouxsie and the Banshees",
      "genre": "Punk"
    },
    {
      "name": "X-Ray Spex",
      "genre": "Punk"
    },
    {
      "name": "Hüsker Dü",
      "genre": "Punk"
    },
    {
      "name": "The Descendents",
      "genre": "Punk"
    },
    {
      "name": "Ray Charles",
      "genre": "Soul"
    },
    {
      "name": "James Brown",
      "genre": "Soul"
    },
    {
      "name": "Aretha Franklin",
      "genre": "Soul"
    },
    {
      "name": "Marvin Gaye",
      "genre": "Soul"
    },
    {
      "name": "Otis Redding",
      "genre": "Soul"
    },
    {
      "name": "Sam Cooke",
      "genre": "Soul"
    },
    {
      "name": "Stevie Wonder",
      "genre": "Soul"
    },
    {
      "name": "Curtis Mayfield",
      "genre": "Soul"
    },
    {
      "name": "Al Green",
      "genre": "Soul"
    },
    {
      "name": "Smokey Robinson",
      "genre": "Soul"
    },
    {
      "name": "Diana Ross & The Supremes",
      "genre": "Soul"
    },
    {
      "name": "Gladys Knight & The Pips",
      "genre": "Soul"
    },
    {
      "name": "Isaac Hayes",
      "genre": "Soul"
    },
    {
      "name": "Donny Hathaway",
      "genre": "Soul"
    },
    {
      "name": "Etta James",
      "genre": "Soul"
    },
    {
      "name": "Sam & Dave",
      "genre": "Soul"
    },
    {
      "name": "Wilson Pickett",
      "genre": "Soul"
    },
    {
      "name": "Bobby Womack",
      "genre": "Soul"
    },
    {
      "name": "Bill Withers",
      "genre": "Soul"
    },
    {
      "name": "The Temptations",
      "genre": "Soul"
    },
    {
      "name": "James Brown",
      "genre": "Disco/Funk"
    },
    {
      "name": "Parliament-Funkadelic",
      "genre": "Disco/Funk"
    },
    {
      "name": "Sly and the Family Stone",
      "genre": "Disco/Funk"
    },
    {
      "name": "Chic",
      "genre": "Disco/Funk"
    },
    {
      "name": "Earth",
      "genre": "Disco/Funk"
    },
    {
      "name": "Kool & the Gang",
      "genre": "Disco/Funk"
    },
    {
      "name": "Donna Summer",
      "genre": "Disco/Funk"
    },
    {
      "name": "Bee Gees",
      "genre": "Disco/Funk"
    },
    {
      "name": "Gloria Gaynor",
      "genre": "Disco/Funk"
    },
    {
      "name": "Diana Ross",
      "genre": "Disco/Funk"
    },
    {
      "name": "The Jackson 5",
      "genre": "Disco/Funk"
    },
    {
      "name": "Rick James",
      "genre": "Disco/Funk"
    },
    {
      "name": "Stevie Wonder",
      "genre": "Disco/Funk"
    },
    {
      "name": "The Commodores",
      "genre": "Disco/Funk"
    },
    {
      "name": "George Clinton",
      "genre": "Disco/Funk"
    },
    {
      "name": "The Ohio Players",
      "genre": "Disco/Funk"
    },
    {
      "name": "Prince",
      "genre": "Disco/Funk"
    },
    {
      "name": "Curtis Mayfield",
      "genre": "Disco/Funk"
    },
    {
      "name": "The Isley Brothers",
      "genre": "Disco/Funk"
    },
    {
      "name": "Sister Sledge",
      "genre": "Disco/Funk"
    },
    {
      "name": "Bob Marley & The Wailers",
      "genre": "Reggae"
    },
    {
      "name": "Peter Tosh",
      "genre": "Reggae"
    },
    {
      "name": "Burning Spear",
      "genre": "Reggae"
    },
    {
      "name": "Toots and the Maytals",
      "genre": "Reggae"
    },
    {
      "name": "Jimmy Cliff",
      "genre": "Reggae"
    },
    {
      "name": "Desmond Dekker",
      "genre": "Reggae"
    },
    {
      "name": "Gregory Isaacs",
      "genre": "Reggae"
    },
    {
      "name": "Lee \"Scratch\" Perry",
      "genre": "Reggae"
    },
    {
      "name": "Black Uhuru",
      "genre": "Reggae"
    },
    {
      "name": "Steel Pulse",
      "genre": "Reggae"
    },
    {
      "name": "Sly and Robbie",
      "genre": "Reggae"
    },
    {
      "name": "Augustus Pablo",
      "genre": "Reggae"
    },
    {
      "name": "Dennis Brown",
      "genre": "Reggae"
    },
    {
      "name": "Bunny Wailer",
      "genre": "Reggae"
    },
    {
      "name": "Third World",
      "genre": "Reggae"
    },
    {
      "name": "The Skatalites",
      "genre": "Reggae"
    },
    {
      "name": "The Heptones",
      "genre": "Reggae"
    },
    {
      "name": "The Ethiopians",
      "genre": "Reggae"
    },
    {
      "name": "Culture",
      "genre": "Reggae"
    },
    {
      "name": "Buju Banton",
      "genre": "Reggae"
    },
    {
      "name": "Bob Dylan",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Woody Guthrie",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Joan Baez",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Joni Mitchell",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Leonard Cohen",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Simon & Garfunkel",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Neil Young",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Nick Drake",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Pete Seeger",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "John Denver",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "James Taylor",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Cat Stevens",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "The Kingston Trio",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Fairport Convention",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Gordon Lightfoot",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Jackson Browne",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Crosby",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Laura Marling",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Donovan",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "The Mamas & The Papas",
      "genre": "Acoustic/Folk"
    },
    {
      "name": "Michael Jackson",
      "genre": "Commercial Pop"
    },
    {
      "name": "Madonna",
      "genre": "Commercial Pop"
    },
    {
      "name": "Prince",
      "genre": "Commercial Pop"
    },
    {
      "name": "Whitney Houston",
      "genre": "Commercial Pop"
    },
    {
      "name": "The Beatles",
      "genre": "Commercial Pop"
    },
    {
      "name": "ABBA",
      "genre": "Commercial Pop"
    },
    {
      "name": "Elton John",
      "genre": "Commercial Pop"
    },
    {
      "name": "Mariah Carey",
      "genre": "Commercial Pop"
    },
    {
      "name": "Beyoncé",
      "genre": "Commercial Pop"
    },
    {
      "name": "Justin Timberlake",
      "genre": "Commercial Pop"
    },
    {
      "name": "Taylor Swift",
      "genre": "Commercial Pop"
    },
    {
      "name": "Adele",
      "genre": "Commercial Pop"
    },
    {
      "name": "Celine Dion",
      "genre": "Commercial Pop"
    },
    {
      "name": "Britney Spears",
      "genre": "Commercial Pop"
    },
    {
      "name": "Backstreet Boys",
      "genre": "Commercial Pop"
    },
    {
      "name": "Lady Gaga",
      "genre": "Commercial Pop"
    },
    {
      "name": "Rihanna",
      "genre": "Commercial Pop"
    },
    {
      "name": "Ed Sheeran",
      "genre": "Commercial Pop"
    },
    {
      "name": "Katy Perry",
      "genre": "Commercial Pop"
    },
    {
      "name": "Ariana Grande",
      "genre": "Commercial Pop"
    },
    {
      "name": "Tupac Shakur",
      "genre": "Urban"
    },
    {
      "name": "The Notorious B.I.G.",
      "genre": "Urban"
    },
    {
      "name": "Jay-Z",
      "genre": "Urban"
    },
    {
      "name": "Nas",
      "genre": "Urban"
    },
    {
      "name": "Kanye West",
      "genre": "Urban"
    },
    {
      "name": "Dr. Dre",
      "genre": "Urban"
    },
    {
      "name": "Snoop Dogg",
      "genre": "Urban"
    },
    {
      "name": "Run-D.M.C.",
      "genre": "Urban"
    },
    {
      "name": "Ice Cube",
      "genre": "Urban"
    },
    {
      "name": "Public Enemy",
      "genre": "Urban"
    },
    {
      "name": "LL Cool J",
      "genre": "Urban"
    },
    {
      "name": "Kendrick Lamar",
      "genre": "Urban"
    },
    {
      "name": "J. Cole",
      "genre": "Urban"
    },
    {
      "name": "OutKast",
      "genre": "Urban"
    },
    {
      "name": "Missy Elliott",
      "genre": "Urban"
    },
    {
      "name": "A Tribe Called Quest",
      "genre": "Urban"
    },
    {
      "name": "Wu-Tang Clan",
      "genre": "Urban"
    },
    {
      "name": "Nicki Minaj",
      "genre": "Urban"
    },
    {
      "name": "Drake",
      "genre": "Urban"
    },
    {
      "name": "Cardi B",
      "genre": "Urban"
    },
    {
      "name": "Kraftwerk",
      "genre": "Electronic"
    },
    {
      "name": "Daft Punk",
      "genre": "Electronic"
    },
    {
      "name": "The Chemical Brothers",
      "genre": "Electronic"
    },
    {
      "name": "Aphex Twin",
      "genre": "Electronic"
    },
    {
      "name": "Moby",
      "genre": "Electronic"
    },
    {
      "name": "Underworld",
      "genre": "Electronic"
    },
    {
      "name": "Fatboy Slim",
      "genre": "Electronic"
    },
    {
      "name": "Massive Attack",
      "genre": "Electronic"
    },
    {
      "name": "The Prodigy",
      "genre": "Electronic"
    },
    {
      "name": "Depeche Mode",
      "genre": "Electronic"
    },
    {
      "name": "Orbital",
      "genre": "Electronic"
    },
    {
      "name": "Deadmau5",
      "genre": "Electronic"
    },
    {
      "name": "Skrillex",
      "genre": "Electronic"
    },
    {
      "name": "Boards of Canada",
      "genre": "Electronic"
    },
    {
      "name": "Justice",
      "genre": "Electronic"
    },
    {
      "name": "Tiesto",
      "genre": "Electronic"
    },
    {
      "name": "Carl Cox",
      "genre": "Electronic"
    },
    {
      "name": "Richie Hawtin",
      "genre": "Electronic"
    },
    {
      "name": "Calvin Harris",
      "genre": "Electronic"
    },
    {
      "name": "Armin van Buuren",
      "genre": "Electronic"
    }
  ]

const genres = ["Jazz", "Blues", "Rock 'n' Roll", "Rock", "Metal", "Punk", "Soul", "Disco/Funk", "Reggae", "Acoustic/Folk", "Commercial Pop", "Urban", "Electronic"];
let currentArtist = {};
let score = 0;
let timer; // Declare a variable to hold the timer
let timeRemaining = 180; // Set the initial time (3 minutes in seconds)

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
    } else {
        resultElement.innerText = `Wrong! The correct genre is ${currentArtist.genre}.`;
    }
    document.getElementById("score").innerText = `Score: ${score}`;
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
document.getElementById("start-game").onclick = () => {
    document.getElementById("start-game").style.display = "none"; // Hide Start button after game starts
    startNewGame();
};

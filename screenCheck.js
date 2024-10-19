// screenCheck.js

// Function to check screen size and display warning if too small
function checkScreenSize() {
    const gameContainer = document.getElementById('game-container');
    const screenWarning = document.getElementById('screen-warning');

    if (window.innerWidth < 768) {  // Adjust 768px as the threshold for small screens
        gameContainer.style.display = 'none';  // Hide the game
        screenWarning.style.display = 'block';  // Show the warning message
    } else {
        gameContainer.style.display = 'block';  // Show the game
        screenWarning.style.display = 'none';  // Hide the warning message
    }
}

// Run check on page load
window.addEventListener('DOMContentLoaded', checkScreenSize);

// Run check if the screen is resized
window.addEventListener('resize', checkScreenSize);

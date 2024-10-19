// data.js

// Load artist data from the JSON file
export async function loadArtists() {
    try {
        const response = await fetch('name,genre.json');
        const artists = await response.json();
        return artists;
    } catch (error) {
        console.error('Error loading artist data:', error);
        return [];
    }
}

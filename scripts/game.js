// Memory Game JavaScript

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const gameArea = document.getElementById('gameArea');
    
    // Add event listener to the start button
    startButton.addEventListener('click', function() {
        // Create an image element
        const gameImage = document.createElement('img');
        gameImage.src = 'images/10089961.jpg';
        gameImage.alt = 'Game Background';
        gameImage.style.maxWidth = '20%';
        gameImage.style.height = 'auto';
        gameImage.style.display = 'block';
        gameImage.style.margin = '20px auto';
        
        // Clear any existing content in the game area
        gameArea.innerHTML = '';
        
        // Add the image to the game area
        gameArea.appendChild(gameImage);
        
        // Optional: Hide the start button after clicking
        startButton.style.display = 'none';
        
        console.log('Game started! Image displayed.');
    });
});

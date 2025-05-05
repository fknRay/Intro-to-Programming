// Variable to store the interval ID for image movement
let intervalId;

// Function to start moving the image
function startMovingImage() {
    // Get the image element
    const image = document.getElementById('memeimage');
    let positionX = 0; // Initial X position
    let positionY = 0; // Initial Y position
    const step = 10; // Pixels to move per step

    // Clear any existing interval to avoid multiple intervals running
    clearInterval(intervalId);

    // Start a new interval to move the image
    intervalId = setInterval(() => {
        positionX += step; // Increment X position
        positionY += step; // Increment Y position

        // Reset position if it goes off-screen
        if (positionX > window.innerWidth - image.width) positionX = 0;
        if (positionY > window.innerHeight - image.height) positionY = 0;

        // Update the image position
        image.style.position = 'absolute';
        image.style.left = `${positionX}px`;
        image.style.top = `${positionY}px`;
    }, 100); // Move every 100ms
}

// Function to stop moving the image
function stopMovingImage() {
    clearInterval(intervalId); // Stop the interval
}

// Function to play background sound
function playBackgroundSound() {
    const audio = document.getElementById('backgroundSound');
    audio.play(); // Play the audio
}

// Function to pause background sound
function pauseBackgroundSound() {
    const audio = document.getElementById('backgroundSound');
    audio.pause(); // Pause the audio
}

// Attach event listeners to the buttons
document.getElementById('startButton').addEventListener('click', startMovingImage);
document.getElementById('stopButton').addEventListener('click', stopMovingImage);
document.getElementById('playSoundButton').addEventListener('click', playBackgroundSound);
document.getElementById('pauseSoundButton').addEventListener('click', pauseBackgroundSound);
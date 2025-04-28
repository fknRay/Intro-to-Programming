let intervalId; // Variable to store the interval ID

// Function to start moving the image
function startMovingImage() {
    const image = document.getElementById('memeimage');
    let positionX = 0;
    let positionY = 0;
    const step = 10; // Pixels to move per step

    // Clear any existing interval to avoid multiple intervals running
    clearInterval(intervalId);

    // Start a new interval to move the image
    intervalId = setInterval(() => {
        positionX += step;
        positionY += step;

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

// Attach event listeners to the buttons
document.getElementById('startButton').addEventListener('click', startMovingImage);
document.getElementById('stopButton').addEventListener('click', stopMovingImage);
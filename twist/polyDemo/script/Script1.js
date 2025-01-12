const sprite = document.getElementById('sprite');
const moveButton = document.getElementById('move-button');

let position = { x: 100, y: 170 }; // Initial position
let moving = false;

function updateSpritePosition() {
    sprite.style.left = `${position.x}px`;
    sprite.style.top = `${position.y}px`;
}

function moveSprite() {
    if (moving) return; // Prevent overlapping animations
    moving = true;

    // Change to walking animation
    sprite.style.backgroundImage = "url('imgs/walking_sheet.png')";
    sprite.style.animation = 'walk-animation 0.6s steps(4) infinite'; // 4 frames for walking

    const targetX = position.x + 200; // Move 200px to the right

    const interval = setInterval(() => {
        if (position.x < targetX) {
            position.x += 5; // Move 5px per frame
            updateSpritePosition();
        } else {
            clearInterval(interval);

            //Stop walking and return to idle animation
            sprite.style.backgroundImage = "url('imgs/smoking_sheet.png')";
            sprite.style.animation = 'idle-animation 4s steps(10) infinite'; // Return to idle
            moving = false;
        }
    }, 50); // Update position every 50ms
}

// Add event listener to the button
moveButton.addEventListener('click', moveSprite);

// Initialize position
updateSpritePosition();

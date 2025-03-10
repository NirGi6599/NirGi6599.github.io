const captor = document.getElementById('captor');
const ouchText = document.getElementById('ouch-text');
const moveToPage3Button = document.getElementById('move-to-page3');

// Trigger the attack sequence
window.addEventListener("load", () => {
    setTimeout(() => {
        // After delay, make captor visible
        captor.style.opacity = "1";

        // Start attack animation after captor appears
        setTimeout(() => {
            captor.style.animation = "captor-hit-animation 1s steps(4) forwards";

            // Add a delay for blackout effect
            setTimeout(() => {
                const blackoutDiv = document.createElement('div');
                blackoutDiv.classList.add('blackout');
                document.body.appendChild(blackoutDiv);

                // Show "Ouch" text and button
                ouchText.style.display = "block";
                moveToPage3Button.style.display = "block";
            }, 1000); // Wait for attack animation to finish
        }, 1000); // Short delay before attack animation starts
    }, 1000); // Delay before captor becomes visible
});

// Move to Page 3 when the button is clicked
moveToPage3Button.addEventListener("click", () => {
    window.location.href = "page3/page3.html"; 
});

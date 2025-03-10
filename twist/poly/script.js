const poly = document.getElementById("poly");
const enterButton = document.getElementById("enter-house");

// Walk to the house
// Walk to the house
enterButton.addEventListener("click", () => {
    poly.classList.remove("idle");
    poly.classList.add("walk");

    poly.style.transition = "bottom 3s linear"; // Smooth walk animation
    poly.style.bottom = "40%"; // Adjust to match door position

    setTimeout(() => {
        window.location.href = "page2/page2.html"; // Move to the next page
    }, 3000);
});


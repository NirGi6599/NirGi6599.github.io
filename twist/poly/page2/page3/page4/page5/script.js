const poly = document.getElementById("poly");
const enterButton = document.getElementById("Leave");

// Walk to the house
// Walk to the house
enterButton.addEventListener("click", () => {
    poly.classList.remove("idle");
    poly.classList.add("walk");

    poly.style.transition = "bottom 3s linear"; // Smooth walk animation
    poly.style.bottom = "0%"; // Adjust to match door position

    setTimeout(() => {
        window.location.href = "https://edenaycheh.github.io/finalProject/part09.html"; // Move to the next page
    }, 2000);
});


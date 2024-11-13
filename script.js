// Function to change the welcome text with the user's name and add animations
function changeText() {
    const name = document.getElementById("user-name").value;
    const welcomeText = document.getElementById("welcome-text");
    const button = document.getElementById("change-text-btn");

    // Update welcome message to include the user's name if provided
    welcomeText.innerText = `Welcome to JavaScript${name ? `, ${name}` : ""}!`;
    welcomeText.classList.add("pulse-animation");

    // Change button color randomly
    button.style.backgroundColor = getRandomColor();
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create floating shapes as a background effect
function createShapes() {
    const container = document.body;
    for (let i = 0; i < 20; i++) { // Create 20 shapes
        const shape = document.createElement("div");
        shape.classList.add("shape");
        shape.style.width = `${Math.random() * 50 + 10}px`;
        shape.style.height = shape.style.width;
        shape.style.top = `${Math.random() * 100}vh`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.animationDuration = `${Math.random() * 10 + 10}s`;
        container.appendChild(shape);
    }
}
createShapes(); // Call the function to generate shapes on page load

// Array of quotes for the random quote generator
const quotes = [
    "JavaScript is the language of the web.",
    "Coding is like humor – if you have to explain it, it’s bad.",
    "Keep calm and code JavaScript.",
    "JavaScript is lightweight, fast, and flexible."
];

// Function to display a random quote
function displayRandomQuote() {
    const quoteDisplay = document.getElementById("quote-display");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.innerText = quotes[randomIndex];
}
window.onload = displayRandomQuote; // Display a random quote on page load

// Custom cursor style and click animation
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});

document.addEventListener("click", () => {
    cursor.style.transform = "scale(1.5)";
    setTimeout(() => cursor.style.transform = "scale(1)", 150);
});

// Countdown timer function for a specific event date
function startCountdown() {
    const eventDate = new Date("2024-12-06"); // Set the event date here
    const countdownTimer = document.getElementById("days");

    setInterval(() => {
        const now = new Date();
        const timeLeft = eventDate - now;
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        countdownTimer.innerText = days;
    }, 1000); // Update every second
}
startCountdown(); // Start the countdown timer on page load

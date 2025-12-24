// ===========================
// Part 2: Function Scope, Parameters & Return Values
// ===========================

// Global counter variable
let counter = 0;

// Function to increment or decrement the counter
function incrementCounter(value) {
    // value is a parameter; counter is global
    counter += value;
    document.getElementById("counterValue").textContent = counter;
    return counter; // Returning updated value
}

// ===========================
// Part 3: Triggering Box Animation
// ===========================
document.getElementById("animateBoxBtn").addEventListener("click", function() {
    const box = document.getElementById("animatedBox");
    box.classList.toggle("animate"); // Toggle CSS class to animate
});

// ===========================
// Part 4: Card Flip Function
// ===========================
function flipCard() {
    const card = document.getElementById("flipCard");
    card.classList.toggle("flip"); // Toggle flip class
}

// Simple script to log a message to the console
document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript file loaded successfully!");

    // Example: Change header text on click
    const header = document.querySelector('header h1');
    if (header) {
        header.addEventListener('click', function() {
            header.textContent = "Header Clicked!";
        });
    }
});
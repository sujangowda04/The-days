// Get the button element by its ID
const button = document.getElementById("getDayButton");

// Get the element where the day will be displayed
const dayMessage = document.getElementById("dayMessage");

// Event listener for button click
button.addEventListener("click", function() {
    // Get the current day of the week (0-6 for Sunday-Saturday)
    const today = new Date();
    const dayOfWeek = today.getDay(); 

    // Array with the names of the days
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Display the day of the week in the paragraph
    dayMessage.textContent = `Today is: ${days[dayOfWeek]}`;
});

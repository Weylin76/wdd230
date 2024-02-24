document.addEventListener('DOMContentLoaded', function() {
    // Initialize display element variable
    const visitsDisplay = document.querySelector("#visits");
    const now = new Date(); // Current date and time

    // Retrieve the number of visits and the last visit date from localStorage
    let discoverNumVisits = Number(localStorage.getItem("discoverNumVisits")) || 0;
    const lastVisitString = localStorage.getItem("lastVisitDate");

    let message = ""; // Message to display based on the visit

    if (discoverNumVisits === 0) {
        message = "Welcome! Let us know if you have any questions.";
    } else if (discoverNumVisits === 1) {
        message = "Back so soon! Awesome!";
    } else { // discoverNumVisits > 1
        if (lastVisitString) {
            const lastVisitDate = new Date(lastVisitString);
            const timeDiff = now - lastVisitDate; // Time difference in milliseconds
            const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

            if (daysDiff <= 2) {
                message = "You last visited 1 day ago.";
            } else {
                message = `You last visited ${daysDiff} days ago.`;
            }
        }
    }

    // Increment the number of visits by one for the next visit
    discoverNumVisits++;

    // Display the appropriate message based on the visit
    visitsDisplay.textContent = message;

    // Update the last visit date and number of visits in localStorage
    localStorage.setItem("lastVisitDate", now.toISOString());
    localStorage.setItem("discoverNumVisits", discoverNumVisits.toString());
});



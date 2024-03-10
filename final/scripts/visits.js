
let numVisits = localStorage.getItem('visits') ? parseInt(localStorage.getItem('visits')) : 0;

// Grab the element where the number of visits will be displayed
const visitsDisplay = document.querySelector('#visits');

document.addEventListener('DOMContentLoaded', () => {
    // Increment the number of visits
    numVisits++;

    // Update the local storage with the new number of visits
    localStorage.setItem('visits', numVisits);

    // Update the text content of the visitsDisplay element
    visitsDisplay.textContent = numVisits.toLocaleString();
});
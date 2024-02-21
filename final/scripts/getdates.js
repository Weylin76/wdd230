// Create year and last modified variables
const now = new Date();
const currentYear = now.getFullYear();
let dateTime = document.lastModified;

// Append to footer paragraphs
const domCurrentYear = document.querySelector('#currentYear'); // Corrected the ID to match the HTML
domCurrentYear.innerText = currentYear;

const lastModified = document.querySelector('#lastmodification');
lastModified.innerText = dateTime;

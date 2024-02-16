//create year and last modified varables
const now = new Date();
const currentYear = now.getFullYear();
let dateTime = document.lastModified;

// Append to footer paragraphs
const domCurrentYear = document.querySelector('#current-year');
domCurrentYear.innerText = currentYear;

const lastModified = document.querySelector('#lastmodification');
lastModified.innerText = dateTime;
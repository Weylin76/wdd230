// Create year and last modified variables
const now = new Date();
const currentYear = now.getFullYear();

// Assuming document.lastModified returns a string in a format like '02/17/2022 16:15:23'
// Convert that string into a Date object
const modifiedDate = new Date(document.lastModified);

// Format hours for AM/PM
let hours = modifiedDate.getHours();
const minutes = modifiedDate.getMinutes();
const seconds = modifiedDate.getSeconds();

//If greater than or equal to 12 PM else AM 
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'

// Format hours, minutes, and seconds
//If value is under 10 adds the 0 as a placeholder
const formattedHour = hours < 10 ? `0${hours}` : hours;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

// Format the date
const formattedDate = `${modifiedDate.getMonth() + 1}/${modifiedDate.getDate()}/${modifiedDate.getFullYear()} ${formattedHour}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

// Append to footer paragraphs
const domCurrentYear = document.querySelector('#currentYear');
domCurrentYear.innerText = currentYear;

const lastModified = document.querySelector('#lastmodification');
lastModified.innerText = formattedDate;


// Initialize display element variable
const visitsDisplay = document.querySelector("#visits");

// Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

//display number of visits
visitsDisplay.textContent = numVisits;

//increment the number of visits by one.
numVisits++;

//store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);
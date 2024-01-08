const date = new Date();
const currentYear = date.getFullYear();
const dateTime = date.getDate();
console.log(date.toString());

const domCurrentYear = document.querySelector('#current-year');
domCurrentYear.innerText = currentYear;
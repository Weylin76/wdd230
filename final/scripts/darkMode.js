const btn = document.querySelector('#mode');
const modeIcon = document.querySelector('#mode-icon');
const hamBtn = document.querySelector('#hamBtn');
const header = document.querySelector('header');

let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

if (isDarkMode) {
    enableDarkMode();
}

btn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    if (isDarkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

function enableDarkMode() {
    document.querySelector('html').style.backgroundColor = '#2B2B2B';
    document.body.style.backgroundColor = 'black';
    modeIcon.src = 'images/dark-mode-icon.png';
    modeIcon.alt = 'Toggle Light Mode';
    hamBtn.textContent = '☰'; // Change text content instead of src for button
    hamBtn.style.color = 'white'; // Change button color
    header.style.color = 'white';
    document.querySelectorAll('.main-content, .main-content *').forEach(text => {
        text.style.color = 'white';
    });
}

function disableDarkMode() {
    document.querySelector('html').style.backgroundColor = '';
    document.body.style.backgroundColor = '';
    modeIcon.src = 'images/light-mode-icon.jpg';
    modeIcon.alt = 'Toggle Dark Mode';
    hamBtn.textContent = '☰'; // Reset button text content
    hamBtn.style.color = ''; // Reset button color
    header.style.color = '';
}


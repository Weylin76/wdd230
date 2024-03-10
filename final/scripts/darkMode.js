const btn = document.querySelector('#mode');
const modeIcon = document.querySelector('#mode-icon');

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
    document.querySelector('.footer-container').style.backgroundColor = 'darkgray';
    modeIcon.src = 'images/dark-mode-icon.png';
    modeIcon.alt = 'Toggle Light Mode';
}

function disableDarkMode() {
    document.querySelector('html').style.backgroundColor = '';
    document.body.style.backgroundColor = '';
    document.querySelector('.footer-container').style.backgroundColor = '';
    modeIcon.src = 'images/light-mode-icon.png';
    modeIcon.alt = 'Toggle Dark Mode';
}


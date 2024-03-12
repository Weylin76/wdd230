const btn = document.querySelector('#mode');
const modeIcon = document.querySelector('#mode-icon');
const hamBtn = document.querySelector('#hamBtn');
const header = document.querySelector('.header');

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
    hamBtn.src = 'images/ham-white.png';
    hamBtn.alt = 'Hamber button white';
    hamBtn.style.marginTop = '1rem';
    header.style.color = 'white';
    document.querySelectorAll('main, main *').forEach(text => {
        text.style.color = 'white';
    });
}

function disableDarkMode() {
    document.querySelector('html').style.backgroundColor = '';
    document.body.style.backgroundColor = '';
    document.querySelector('.footer-container').style.backgroundColor = '';
    modeIcon.src = 'images/light-mode-icon.png';
    modeIcon.alt = 'Toggle Dark Mode';
    hamBtn.src = 'images/hamburger-menu.svg';
    hamBtn.alt = 'Hamber button black';
    hamBtn.style.marginTop = '';
    header.style.color = '';
}


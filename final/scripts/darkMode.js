const btn = document.querySelector('#mode');
const modeIcon = document.querySelector('#mode-icon');
const hamBtn = document.querySelector('#hamBtn');
const header = document.querySelector('header');
const heroBtn = document.querySelector('#hero-btn');

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
    document.documentElement.classList.add('dark-mode');

    document.querySelector('html').style.backgroundColor = '#2B2B2B';
    document.body.style.backgroundColor = 'black';

    document.querySelectorAll('[id*="container"]').forEach(container => {
        container.style.backgroundColor = '#212121';
    }); 

    document.querySelectorAll('#rental-container > div, #rental-page-container > div').forEach(container => {
        container.style.backgroundColor = '#212121';
    }); 

    if (modeIcon) {
        modeIcon.src = 'images/dark-mode-icon.png';
        modeIcon.alt = 'Toggle Light Mode';
    }

    if (hamBtn) {
        hamBtn.textContent = '☰';
        hamBtn.style.color = 'white';
    }

    if (header) {
        header.style.color = 'white';
    }

    // Since the main content and reserve button styles are controlled by CSS when in dark mode, no need to set them here

    if (heroBtn) {
        heroBtn.style.color = 'black'; // This might need to be controlled by CSS as well
    }
}

function disableDarkMode() {
    document.documentElement.classList.remove('dark-mode');

    document.querySelector('html').style.backgroundColor = ''; 
    document.body.style.backgroundColor = ''; 

    // Reset background color for all containers
    document.querySelectorAll('[id*="container"]').forEach(container => {
        container.style.backgroundColor = ''; 
    });

    // Reset text color for all buttons with class 'reserve'
    document.querySelectorAll('.reserve').forEach(btn => {
        btn.style.color = ''; 
    });

    document.querySelectorAll('#rental-container > div, #rental-page-container > div').forEach(container => {
        container.style.backgroundColor = '#F0E68C';
    }); 

    // Resetting the icon
    if (modeIcon) {
        modeIcon.src = 'images/light-mode-icon.jpg';
        modeIcon.alt = 'Toggle Dark Mode';
    }

    if (hamBtn) {
        hamBtn.textContent = '☰';
        hamBtn.style.color = ''; // Reset to default or set a specific color
    }

    if (header) {
        header.style.color = ''; // Reset to default or set a specific color
    }

    if (heroBtn) {
        heroBtn.style.color = ''; // Reset to default or set a specific color
    }
}
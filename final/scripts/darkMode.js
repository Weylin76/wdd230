const btn = document.querySelector('#mode');
const modeIcon = document.querySelector('#mode-icon');
let isDarkMode = false; // Flag to track whether dark mode is currently enabled

btn.addEventListener('click', () => {
    if (!isDarkMode) {
        // Change to dark mode
        document.querySelector('html').style.backgroundColor = '#2B2B2B';
        document.body.style.backgroundColor = 'black';
        document.querySelector('.footer-container').style.backgroundColor = 'darkgray';
        // ... more style changes ...

        // Change the icon to dark mode icon
        modeIcon.src = 'images/dark-mode-icon.png';
        modeIcon.alt = 'Toggle Light Mode';

        isDarkMode = true; // Update flag
    } else {
        // Revert to light mode
        document.querySelector('html').style.backgroundColor = '';
        document.body.style.backgroundColor = '';
        document.querySelector('.footer-container').style.backgroundColor = '';
        // ... revert more style changes ...

        // Change the icon to light mode icon
        modeIcon.src = 'images/light-mode-icon.png';
        modeIcon.alt = 'Toggle Dark Mode';

        isDarkMode = false; // Update flag
    }
});

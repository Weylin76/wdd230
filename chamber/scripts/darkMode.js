const btn = document.querySelector('#mode');

// Check the stored value to determine if dark mode is enabled or not
let isDarkMode = localStorage.getItem('isDarkMode') === 'true'; 

// Apply dark mode if it was enabled previously
if (isDarkMode) {
    enableDarkMode();
} else {
    disableDarkMode();
}

btn.addEventListener('click', () => {
    isDarkMode = !isDarkMode; 
    localStorage.setItem('isDarkMode', isDarkMode.toString());
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
    document.querySelectorAll('section').forEach(section => section.style.borderColor = 'white');
    document.querySelectorAll('article').forEach(article => article.style.borderColor = 'white');
    document.querySelectorAll('.footer-container').forEach(element => {
        element.style.color = 'black';
        element.style.fontWeight = '900';
    });
    btn.textContent = 'Light Mode';
}

function disableDarkMode() {
    document.querySelector('html').style.backgroundColor = '';
    document.body.style.backgroundColor = '';
    document.querySelector('.footer-container').style.backgroundColor = '';
    document.querySelectorAll('section').forEach(section => section.style.borderColor = '');
    document.querySelectorAll('article').forEach(article => article.style.borderColor = '');
    document.querySelectorAll('.footer-container').forEach(element => {
        element.style.color = '';
        element.style.fontWeight = '';
    });
    btn.textContent = 'Dark Mode';
}


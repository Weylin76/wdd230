// Your JavaScript file or script tag
document.addEventListener('DOMContentLoaded', (event) => {
    const hamBtn = document.querySelector('#hamBtn');
    const nav = document.querySelector('nav');

    hamBtn.addEventListener('click', () => {
        nav.classList.toggle('display-none');
    });
});
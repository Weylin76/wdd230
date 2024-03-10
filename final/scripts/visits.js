document.addEventListener('DOMContentLoaded', () => {
    console.log('Current pathname:', window.location.pathname);
    if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname.endsWith('index.html')) {
        let numVisits = localStorage.getItem('visits') ? parseInt(localStorage.getItem('visits')) : 0;
        numVisits++; // Increment the number of visits
        localStorage.setItem('visits', numVisits);
        const visitsDisplay = document.querySelector('#visits');
        if (visitsDisplay) {
            visitsDisplay.textContent = numVisits.toLocaleString();
        } 
    } 
});

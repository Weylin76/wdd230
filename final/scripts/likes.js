// Check if there's a stored value in localStorage and initialize it if not
let likes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes')) : 0;

// Grab the variables
const likesDisplay = document.getElementById('likes');
const thumbsUpIcon = document.getElementById('thumbs-up');

// Initialize the likes display with the current number of likes
likesDisplay.textContent = likes.toLocaleString();

// Add click event listener to the thumbs-up icon
thumbsUpIcon.addEventListener('click', () => {
    likes++; // Increment likes
    localStorage.setItem('likes', likes); 
    likesDisplay.textContent = likes.toLocaleString();

    // Scale the icon to 0.9 using transform
    thumbsUpIcon.style.transform = 'scale(0.9)';

    // Set a timeout to revert the scale back to 100% after 100 milliseconds
    setTimeout(() => {
        thumbsUpIcon.style.transform = 'scale(1)';
    }, 100); 
});

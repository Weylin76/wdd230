// Check if there's a stored value in localStorage and initialize it if not
let likes = localStorage.getItem('likes') ? parseInt(localStorage.getItem('likes')) : 0;

// Reference to the likes display and thumbs-up icon
const likesDisplay = document.getElementById('likes');
const thumbsUpIcon = document.getElementById('thumbs-up');

// Initialize the likes display with the current number of likes
likesDisplay.textContent = likes;

// Add click event listener to the thumbs-up icon
thumbsUpIcon.addEventListener('click', () => {
    likes++; // Increment likes
    localStorage.setItem('likes', likes); // Update the value in local storage
    likesDisplay.textContent = likes; // Update the display
});

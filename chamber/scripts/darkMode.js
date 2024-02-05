const btn = document.querySelector('#mode');
let isDarkMode = false; // Flag to track whether dark mode is currently enabled

btn.addEventListener('click', () => {
    if (!isDarkMode) {
        // Change to dark mode
        document.body.style.backgroundColor = 'black';
        document.querySelector('.footer-container').style.backgroundColor = 'darkgray';
        
        //Loop through each section and set its border color
        document.querySelectorAll('section').forEach(section => {
            section.style.borderColor = 'white';
        });

        //Loop through each article and set its border color
        document.querySelectorAll('article').forEach(article => {
            article.style.borderColor = 'white';
        })

        //Change all footer font to black and bold
        document.querySelector('.footer-container').style.color = 'black';
        document.querySelectorAll('.footer-container').forEach(element => {
            element.style.fontWeight = '900';
        });
        
        //Change button to read Light Mode
        btn.textContent = 'Light Mode';
        isDarkMode = true; // Update flag

    } else {
        // If already in dark mode, revert to original colors
        document.body.style.backgroundColor = ''; //the original color 
        document.querySelector('.footer-container').style.backgroundColor = ''; //the original color
        
        //Loop through each section and revert its border color
        document.querySelectorAll('section').forEach(section => {
            section.style.borderColor = ''; // the original border color 
        });
        
        //Loop through each section and revert its border color
        document.querySelectorAll('article').forEach(article => {
            article.style.borderColor = ''; //the original border color 
        })

        //revert its footer font to white and reset font weight
        document.querySelector('.footer-container').style.color = '';
        document.querySelectorAll('.footer-container').forEach(element => {
            element.style.fontWeight = '';
        });

         //Change button to read Dark Mode
        btn.textContent = 'Dark Mode';
        isDarkMode = false; // Update flag
    }
});

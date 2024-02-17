// Assuming 'input', 'btn', and 'list' are already defined in your script as follows:
const input = document.querySelector('#favchap'); // The input element where users type in a chapter
const btn = document.querySelector('button'); // The button to add a new chapter
const list = document.querySelector('#list'); // The list to display chapters

function displayList(item){
    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    let capWord = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    li.textContent = capWord;
    delbtn.textContent = '❌';
    li.append(delbtn);
    list.append(li);
    delbtn.addEventListener('click', ()=>{
        list.removeChild(li);
       
    });
}

// Get the array of chapters from localStorage or define it as an empty array if it doesn't exist
let chaptersArray = JSON.parse(localStorage.getItem('myFavChapters')) || [];

// Add click event listener to the button
btn.addEventListener('click', () => {
    if (input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value); // Push the new chapter into the array
        localStorage.setItem('myFavChapters', JSON.stringify(chaptersArray)); // Update localStorage
        input.value = ''; // Clear the input
    }
});

// Display each chapter on the list
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

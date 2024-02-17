// In your js file, declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

function getChapterList() {
    const storedList = localStorage.getItem('myFavBOMList');
    return storedList ? JSON.parse(storedList) : [];
}

let chapterArray = getChapterList();

// Define displayList function to be used within the event listener and for initial display
function displayList(word) {
    const li = document.createElement('li');
    const delbtn = document.createElement('button');
    let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    li.textContent = capWord;
    delbtn.textContent = '❌';
    li.appendChild(delbtn);
    list.appendChild(li);

    delbtn.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(capWord);
        input.focus();
    });

    if (!chapterArray.includes(capWord)) {
        chapterArray.push(capWord); // Use the capitalized word for consistency
        setChapterList();
    }
}

btn.addEventListener('click', () => {
    if (input.value != '') {
        console.log('Button clicked');
        displayList(input.value);
        input.value = ''; // Clear input once after adding the item
    }
});

function setChapterList() {
    console.log('Saving to localStorage', chapterArray);
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function deleteChapter(chapter) {
    chapterArray = chapterArray.filter(item => item !== chapter);
    setChapterList();
}

// Display the chapters when the page loads
chapterArray.forEach(displayList);

console.log(localStorage.getItem('myFavBOMList'));

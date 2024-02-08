// In your js file, declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

btn.addEventListener('click', () => {
    if (input.value != ''){
        const li = document.createElement('li');
        const delbtn = document.createElement('button');
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;
        delbtn.textContent = '❌';
        li.append(delbtn);
        list.append(li);
        input.value = '';

        delbtn.addEventListener('click', ()=>{
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
});

// Lets you add to the list by hitting the Enter key instead of clicking the button.
input.addEventListener('keydown', function (event){
    if (event.key === 'Enter'){
        event.preventDefault();
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');
        // Capitalizes the first letter of the word
        let word = input.value;
        let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        li.textContent = capWord;

        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.append(li);
        input.value = '';
        
        deleteButton.addEventListener('click', function (){
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
});
// In your js file, declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

btn.addEventListener('click', () => {
    if (input.value != ''){
        const li = document.createElement('li');
        const delbtn = document.createElement('button');
        li.textContent = input.value;
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
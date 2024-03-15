const newDate = new Date().getDay();

if (newDate === 1 || newDate === 2 || newDate === 3){
   document.addEventListener('DOMContentLoaded', () => {

    //create new P tag under header
    let header = document.querySelector('header');

    //create a flex div container
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'flex-start';

    //Create a p and button tag for container
    let p = document.createElement('p');
    p.textContent = 'Please join us at the chamber of commerence meet and greet this Wednesday at 7:00 PM'
    p.style.paddingLeft = '15px';
    p.style.flexGrow = '1';
    p.style.textAlign = 'right';
    p.style.maxWidth = '250px';
    p.style.marginTop = '50px';
    let btn = document.createElement ('button');
    btn.textContent = '❌'
    btn.style.margin = '50px 20px 0px 10px';
    
    //append to the container & dom
    container.appendChild(p);
    container.appendChild(btn);
    header.appendChild(container);

    //add event listener to close banner message
    btn.addEventListener('click', () => {
        container.removeChild(p);
        container.removeChild(btn);
    })
   })
}
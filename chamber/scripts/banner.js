const newDate = new Date().getDay();

if (newDate === 1 || newDate === 2 || newDate === 3){
   document.addEventListener('DOMContentLoaded', () => {

    //create new P tag in mian
    let banner = document.querySelector('#banner');

    //create a flex div container
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.alignItems = 'flex-start';

    //Create a p and button tag for container
    let p = document.createElement('p');
    p.textContent = 'Please join us at the chamber of commerence meet and greet this Wednesday at 7:00 PM'
   
    let btn = document.createElement ('button');
    btn.textContent = '❌'
    btn.style.margin = '32px 0px';
    
    //append to the container & dom
    container.appendChild(p);
    container.appendChild(btn);
    banner.appendChild(container);

    //add event listener to close banner message
    btn.addEventListener('click', () => {
        container.removeChild(p);
        container.removeChild(btn);
    })
   })
}
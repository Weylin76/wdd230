document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const colorBox = document.getElementById('colorBox');

    button.addEventListener('click', () => {
        
        
        //apply scale
        button.style.transform = 'scale(0.90)';

        setTimeout(function(){
            button.style.transform = 'scale(1)';
            colorBox.classList.toggle('green');
        }, 150);

    });
});
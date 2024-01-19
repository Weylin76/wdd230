document.addEventListener('DOMContentLoaded', function () {
   const hamBtn = document.getElementById('menu-btn');
   const nav = document.querySelector('#nav');

   hamBtn.addEventListener('click', function() {
       nav.classList.toggle('nav-menu-close');
        
       // Apply scale
        hamBtn.style.transform = 'scale(0.90)';

       // Revert scale after a delay (e.g., 150ms)
        setTimeout(function() {
            hamBtn.style.transform = 'scale(1)';
        }, 150);
   });

});

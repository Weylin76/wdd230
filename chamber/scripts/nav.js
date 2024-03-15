document.addEventListener('DOMContentLoaded', function () {
   const hamBtn = document.getElementById('menu-btn');
   const closeBtn = document.getElementById('close-btn');
   const nav = document.querySelector('#nav');
   
   // Check the state on page load and update menu accordingly
   const isMenuOpen = localStorage.getItem('isMenuOpen') === 'true';
   if (isMenuOpen) {
       nav.classList.remove('nav-menu-close');
       closeBtn.classList.remove('close-close-btn');
       hamBtn.classList.add('close-ham-btn');
   } else {
       nav.classList.add('nav-menu-close');
       closeBtn.classList.add('close-close-btn');
       hamBtn.classList.remove('close-ham-btn');
   }

   hamBtn.addEventListener('click', function() {
       hamBtn.style.transform = 'scale(0.90)';

       setTimeout(function(){
           hamBtn.style.transform = 'scale(1)';
           nav.classList.remove('nav-menu-close');
           closeBtn.classList.remove('close-close-btn');
           hamBtn.classList.add('close-ham-btn');
           localStorage.setItem('isMenuOpen', 'true'); // Store the state
       }, 150);
   }); 

   closeBtn.addEventListener('click', function(){
       closeBtn.style.transform = 'scale(0.90)';
      
       setTimeout(function() {
           closeBtn.style.transform = 'scale(1)';
           nav.classList.add('nav-menu-close');
           hamBtn.classList.remove('close-ham-btn');
           closeBtn.classList.add('close-close-btn');
           localStorage.setItem('isMenuOpen', 'false'); // Store the state
       }, 150);
   });
});


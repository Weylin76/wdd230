document.addEventListener('DOMContentLoaded', function () {
   const hamBtn = document.getElementById('menu-btn');
   const nav = document.querySelector('#nav');

   hamBtn.addEventListener('click', function() {
       nav.classList.toggle('nav-menu-close');
   });

});

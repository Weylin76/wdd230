document.addEventListener("DOMContentLoaded", function() {
   
    function updateText() {
        let heroText = document.getElementById('hero');
        // Check viewport width and set text accordingly
        if (window.innerWidth <= 450) {
            heroText.innerHTML = '<a href= "join.html"><button>Join</button><a>';
            heroText.style.fontSize = '2rem';
        } else if (window.innerWidth <= 750) {
            heroText.innerHTML = '<a href= "join.html"><button>Join</button><a>';
            heroText.style.fontSize = '2rem';
        } else {
            heroText.innerHTML = '<a href= "join.html"><button>Join</button><a>';
            heroText.style.fontSize = '2rem';
        }
    }
 
    updateText();
 
    window.addEventListener('resize', updateText);
 });
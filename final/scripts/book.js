document.addEventListener('DOMContentLoaded', function() {
    let buttons = document.querySelectorAll('.reserve');

    buttons.forEach(button => {
        button.addEventListener('click', function(){
            setTimeout(function(){
                window.location.href = 'reservations.html';
            }, 100)
            button.style.transform = 'scale(0.9)';
        });
    });
});

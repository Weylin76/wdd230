document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const hamBtn = document.getElementById('hamBtn');

    // Function to hide the sidebar and show hamburger button
    function hideSidebar() {
        sidebar.style.display = 'none';
        hamBtn.style.display = 'block'; 
    }

    // Function to show the sidebar and hide hamburger button
    function showSidebar() {
        sidebar.style.display = 'block';
        hamBtn.style.display = 'none';
    }

    // Event listener for closing the sidebar
    closeBtn.addEventListener('click', () => {
        hideSidebar(); 
        hamBtn.style.display = 'block'; 
    }); 

    // Event listener for opening the sidebar
    hamBtn.addEventListener('click', () => {
        showSidebar();
    });

    // By default, the hamburger menu is shown and the sidebar menu is hidden
    sidebar.style.display = 'none';
    hamBtn.style.display = 'block';
});





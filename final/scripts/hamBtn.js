document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const hamBtn = document.getElementById('hamBtn');

    // Function to hide the sidebar and show hamburger button
    function hideSidebar() {
        sidebar.style.display = 'none'; // Hide the sidebar
        hamBtn.style.display = 'block'; // Show the hamburger button
    }

    // Function to show the sidebar and hide hamburger button
    function showSidebar() {
        sidebar.style.display = 'block'; // Show the sidebar
        hamBtn.style.display = 'none'; // Hide the hamburger button
    }

    // Event listener for closing the sidebar
    closeBtn.addEventListener('click', () => {
        hideSidebar(); // Hides the sidebar when 'X' is clicked
        hamBtn.style.display = 'block'; // Show the hamburger button when the sidebar is closed
    }); 

    // Event listener for opening the sidebar
    hamBtn.addEventListener('click', () => {
        showSidebar(); // Shows the sidebar when the hamburger button is clicked
    });

    // By default, the hamburger menu is shown and the sidebar menu is hidden
    sidebar.style.display = 'none';
    hamBtn.style.display = 'block';
});





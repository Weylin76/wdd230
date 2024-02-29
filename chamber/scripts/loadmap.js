function loadMap() {
    var iframe = document.createElement('iframe');
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10319.223287671342!2d-123.11585523986913!3d49.71445726792257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486f9c5b3deed77%3A0x7f0dd39e7ab59885!2sMount%20Crumpit!5e0!3m2!1sen!2sus!4v1706909452831!5m2!1sen!2sus";
    iframe.width = "600";
    iframe.height = "450";
    iframe.style.border = "0";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer-when-downgrade";
    
    var mapDiv = document.getElementById('map');
    mapDiv.innerHTML = ""; // Clear the div in case it's not the first click
    mapDiv.appendChild(iframe); // Add the iframe to the div

    // Prevent the default anchor click behavior
    return false;
}

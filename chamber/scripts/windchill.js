document.addEventListener("DOMContentLoaded", function() {
    // Function to calculate wind chill
    function calculateWindChill(tempF, speedMph) {
        return 35.74 + (0.6215 * tempF) - 35.75 * Math.pow(speedMph, 0.16) + 0.4275 * tempF * Math.pow(speedMph, 0.16);
    }

    // Function to update wind chill display
    function updateWindChill() {
        let tempF = parseFloat(document.getElementById('temp').textContent);
        let speedMph = parseFloat(document.getElementById('speed').textContent);

        // Check if conditions meet the criteria for calculating wind chill
        if (tempF <= 50 && speedMph > 3) {
            let windChill = calculateWindChill(tempF, speedMph);
            // Update the wind chill display
            document.getElementById('windchill').textContent = windChill.toFixed(0) + ' deg';
        } else {
            // If conditions do not meet, perhaps hide or indicate no wind chill calculation
            document.getElementById('windchill').textContent = 'N/A';
        }
    }

    // Call updateWindChill on initial load
    updateWindChill();
});


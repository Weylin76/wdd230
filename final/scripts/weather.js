document.addEventListener('DOMContentLoaded', function() {
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#hum');
    const weatherIcon = document.querySelector('#weather-icon'); 
    const weatherDesc = document.querySelector('#desc');
    const modal = document.getElementById("myModal");
    const day1 = document.querySelector('#day1');
    const tomorrowDesc = document.querySelector("#tomDesc")
    const day1Icon = document.querySelector('#day1-icon');
    const maxTemp = document.querySelector('#maxTemp');

    // Show Modal by default
    modal.showModal();

    // Button that closes the modal
    const closeModal = document.getElementById("closeModal");

    // Close modal on click
    closeModal.onclick = function() {
      modal.close();
    };

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Cozumel,MX&units=imperial&APPID=5d177bfcfd97660efa8f1485d0796cd6`;

    async function getWeather(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            temp.textContent = `${data.main.temp.toFixed(0)}°F`;
            humidity.textContent = `${data.main.humidity.toFixed(0)}%`;
            const iconCode = data.weather[0].icon; 
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`; 
            weatherIcon.src = iconUrl; 
            weatherIcon.alt = data.weather[0].description;
            weatherDesc.textContent = data.weather[0].description;
            maxTemp.textContent = `${data.main.temp_max.toFixed(0)}°F`;
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    getWeather(url);

    const lat = 20.4230; // Latitude for Cozumel
    const lon = -86.9223; // Longitude for Cozumel
    const apiKey = '5d177bfcfd97660efa8f1485d0796cd6';
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

    const temp3pm = document.querySelector('#temp3pm'); // Make sure you have this element in your HTML

    async function getForecast(forecastUrl) {
        try {
            const response = await fetch(forecastUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const forecastData = await response.json();

            // Get tomorrow's date and set time to 15:00 (3 pm)
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(15, 0, 0, 0); // 15:00 or 3 pm

            // Find the forecast closest to tomorrow 3 pm
            const forecast = forecastData.list.find(f => {
                const forecastTime = new Date(f.dt * 1000);
                return forecastTime >= tomorrow;
            });

            if (forecast) {
                temp3pm.textContent = `${forecast.main.temp.toFixed(0)}°F`;
                const iconCode = forecast.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
                day1Icon.src = iconUrl;
                day1Icon.alt = forecast.weather[0].description;
            } else {
                console.log('No forecast found for the specified time.');
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
    getForecast(forecastUrl);
});



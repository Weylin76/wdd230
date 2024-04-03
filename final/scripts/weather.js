// Ensure all of this code is executed after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#hum');
    const weatherIcon = document.querySelector('#weather-icon'); 
    const weatherDesc = document.querySelector('#desc');
    const maxTemp = document.querySelector('#maxTemp');
    const modal = document.getElementById("myModal");

//Show Modal by default
modal.showModal();

//Button that closes the modal
const closeModal = document.getElementById("closeModal");

// close modal on click
closeModal.onclick = function() {
  modal.close();
}
    
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
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    getWeather(url);
});

const lat = 20.4230; // Latitude for Cozumel
const lon = -86.9223; // Longitude for Cozumel
const apiKey = '5d177bfcfd97660efa8f1485d0796cd6';
const forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${apiKey}`;
//3 day forecast section
const day1 = document.querySelector('#day1');
const day1Icon = document.querySelector('#day1-icon');
const day2 = document.querySelector('#day2');
const day2Icon = document.querySelector('#day2-icon');
const day3 = document.querySelector('#day3');
const day3Icon = document.querySelector('#day3-icon');
const dayPMIcon = document.querySelector('#dayPMIcon');
const dayPM = document.querySelector('#dayPM');


async function getForecast(forecastUrl) {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const forecastData = await response.json();
        maxTemp.textContent = forecastData.daily[0].temp.max;

        const iconCode = forecastData.daily[0].weather[0].icon; 
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        
        // Process the 3-day forecast here
        day1Icon.src = iconUrl;
        day1Icon.alt = forecastData.daily[0].weather[0].description;
        day1.textContent = `Tomorrow temp: ${forecastData.daily[0].temp.day.toFixed(0)}°F`
        day2Icon.src = iconUrl;
        day2Icon.alt = forecastData.daily[0].weather[0].description;
        day2.textContent = `Day 2 temp: ${forecastData.daily[1].temp.day.toFixed(0)}°F`
        day3Icon.src = iconUrl;
        day3Icon.alt = forecastData.daily[0].weather[0].description;
        day3.textContent = `Day 3 temp: ${forecastData.daily[2].temp.day.toFixed(0)}°F`

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getForecast(forecastUrl);


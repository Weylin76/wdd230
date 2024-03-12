const apiKey = '5d177bfcfd97660efa8f1485d0796cd6'
const city = 'Laingsburg'
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&units=imperial&APPID=${apiKey}`

const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#speed');
const currentCondition = document.querySelector('#curr-cond');
const conditionIcon = document.querySelector('#weather-icon');
const humidity = document.querySelector('#hum');
const windChill = document.querySelector('#windchill');

async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
``
        // Extract the relevant data
        temp.textContent = `Temperature: ${data.main.temp.toFixed(0)}°F`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed.toFixed(0)} mph`;
        conditionIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        conditionIcon.alt = `current conditions: ${data.weather[0].main}`
        currentCondition.textContent = ` ${data.weather[0].main}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        
        // Calculate wind chill
        const windChillValue = calculateWindChill(data.main.temp, data.wind.speed);
        windChill.textContent = `${windChillValue}`;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function calculateWindChill(temperature, speed) {
    if (temperature <= 50 && speed > 3) {
        return (
            35.74 +
            0.6215 * temperature -
            35.75 * Math.pow(speed, 0.16) +
            0.4275 * temperature * Math.pow(speed, 0.16)
        ).toFixed(1) + '°F';
    } else {
        return "N/A";
    }
}

// Call the function with the URL
getWeather(url);


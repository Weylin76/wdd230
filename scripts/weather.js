const url = `https://api.openweathermap.org/data/2.5/weather?q=Laingsburg,us&units=imperial&APPID=5d177bfcfd97660efa8f1485d0796cd6`

const temp = document.querySelector('#temp');
const windSpeed = document.querySelector('#speed');
const currentCondition = document.querySelector('#curr-cond');
const humidity = document.querySelector('#hum');
const windChill = document.querySelector('#windchill');

async function getWeather(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Extract the relevant data
        temp.textContent = `Temperature: ${data.main.temp} °F`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} mph`;
        currentCondition.textContent = `Conditions: ${data.weather[0].main}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        
        // Calculate wind chill
        const windChillValue = calculateWindChill(data.main.temp, data.wind.speed);
        windChill.textContent = `${windChillValue} °F`;
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
        ).toFixed(1);
    } else {
        return "N/A";
    }
}

// Call the function with the URL
getWeather(url);


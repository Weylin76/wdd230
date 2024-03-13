const lat = 49.71433; // Latitude for Mount Crumpit
const lon = -123.105768; // Longitude for Mount Crumpit
const apiKey = '5d177bfcfd97660efa8f1485d0796cd6';
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${apiKey}`;

const temp = document.querySelector('#temp');
const speed = document.querySelector('#speed');
const currnetCondition = document.querySelector('#curr-cond');
const humidity = document.querySelector('#hum');
const windChill = document.querySelector('#windchill');
const day1Icon = document.querySelector('#day1-icon');
const day1Temp = document.querySelector('#day1-temp');
const day2Icon = document.querySelector('#day2-icon');
const day2Temp = document.querySelector('#day2-temp');
const day3Icon = document.querySelector('#day3-icon');
const day3Temp = document.querySelector('#day3-temp');

async function getForecast(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        console.log(data);

        //Today's information
        let todaysTemp = `${data.daily[0].temp.day.toFixed(0)}°F`
        temp.textContent = todaysTemp;
        iconCode = data.daily[0].weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        currnetCondition.src = iconUrl;
        currnetCondition.alt = data.daily[0].weather[0].description;
        let todaysHumidity = `${data.daily[0].humidity}`
        humidity.textContent = `${todaysHumidity}%`
        let todaysWind = `${data.daily[0].wind_speed.toFixed(1)} MPH`
        speed.textContent = todaysWind;


        // Day 1 forecast
        iconCode = data.daily[1].weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        day1Icon.src = iconUrl;
        day1Icon.alt = data.daily[1].weather[0].description;
        day1Temp.textContent = `today's temp: ${data.daily[1].temp.day.toFixed(0)}°F`;

        // Day 2 forecast
        iconCode = data.daily[1].weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        day2Icon.src = iconUrl;
        day2Icon.alt = data.daily[1].weather[0].description;
        day2Temp.textContent = `Day 2 temp: ${data.daily[1].temp.day.toFixed(0)}°F`;

        // Day 3 forecast
        iconCode = data.daily[2].weather[0].icon;
        iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        day3Icon.src = iconUrl;
        day3Icon.alt = data.daily[2].weather[0].description;
        day3Temp.textContent = `Day 3 temp: ${data.daily[2].temp.day.toFixed(0)}°F`;

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

getForecast(url);

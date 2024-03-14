const lat = 49.75;
const lon = 6.64; 
const apiKey = '5d177bfcfd97660efa8f1485d0796cd6'; 
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&appid=${apiKey}`;

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function displayResults(data) {
    // Format the temperature to have no decimal points
    currentTemp.innerHTML = `${Math.round(data.daily[0].temp.day)}&deg;F`;
  
    // Get the icon source URL
    const iconsrc = `https://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png`;
  
    // Capitalize each word in the weather description and combine all events
    let allDescriptions = data.daily[0].weather.map(event => {
        return event.description.split(' ').map(word => {
            return word[0].toUpperCase() + word.substring(1);
        }).join(' ');
    }).join(', ');

    // Set the attributes for the weather icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', allDescriptions);
  
    // Set the text for the weather description
    captionDesc.textContent = allDescriptions;
}

apiFetch(url);

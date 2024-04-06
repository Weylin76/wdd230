document.addEventListener('DOMContentLoaded', function() {
    const temp = document.querySelector('#temp');
    const humidity = document.querySelector('#hum');
    const weatherIcon = document.querySelector('#weather-icon'); 
    const weatherDesc = document.querySelector('#desc');
    const modal = document.getElementById("myModal");
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
          
          // Clear previous content
          weatherDesc.textContent = '';
          weatherIcon.innerHTML = ''; 
      
          // Loop through each weather condition
          data.weather.forEach((condition) => {
            // Append condition descriptions
            weatherDesc.textContent += `${condition.description.toUpperCase()}; `;
            
            // Create and append an image for each condition
            const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}.png`;
            const iconImg = document.createElement('img');
            iconImg.src = iconUrl;
            iconImg.alt = condition.description;
            iconImg.title = condition.description;
            weatherIcon.appendChild(iconImg); 
          });
      
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
    const temp3pm = document.querySelector('#temp3pm'); 

    async function getForecast(forecastUrl) {
        try {
          const response = await fetch(forecastUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const forecastData = await response.json();
      
          // Get tomorrow at 3pm
          let tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(15, 0, 0, 0);
      
          // Find the forecast closest to tomorrow 3 pm
          const forecast = forecastData.list.find(f => {
            const forecastTime = new Date(f.dt * 1000);
            return forecastTime >= tomorrow;
          });
      
          if (forecast) {
            temp3pm.textContent = `${forecast.main.temp.toFixed(0)}°F`;
            
            // Clear previous content
            const tomorrowConditions = document.querySelector('#tomorrow-conditions');
            tomorrowConditions.innerHTML = 'Tomorrow\'s conditions: '; 
      
            // Loop through each weather condition
            forecast.weather.forEach(condition => {
                const conditionContainer = document.createElement('div');
                
                // Create and append condition descriptions
                const conditionDesc = document.createElement('span');
                conditionDesc.textContent = `${condition.description.toUpperCase()}; `;
                conditionContainer.appendChild(conditionDesc);
                
                // Create and append an image for each condition
                const iconUrl = `https://openweathermap.org/img/wn/${condition.icon}.png`;
                const iconImg = document.createElement('img');
                iconImg.src = iconUrl;
                iconImg.alt = condition.description;
                iconImg.title = condition.description; 
                conditionContainer.appendChild(iconImg);
              
                tomorrowConditions.appendChild(conditionContainer);
              });
          } else {
            console.log('No forecast found for the specified time.');
          }
        } catch (error) {
          console.error('Fetch error:', error);
        }
      }
    getForecast(forecastUrl);
});



const apiKey = '3dc8f6a72668b8b36729603fab02d268'; // Replace with your API key

// Function to get weather by current location
function getCurrentLocationWeather() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeather(lat, lon);
    });
  } else {
    alert('Geolocation is not supported by this browser.');
  }
}

// Function to get weather by location input
function getWeatherByLocation() {
  const location = document.getElementById('locationInput').value;
  if (location) {
    fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}}`
    )
      .then((response) => response.json())
      .then((data) => displayWeather(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  } else {
    alert('Please enter a location.');
  }
}

// Function to get weather data from API
function getWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apiKey}`
  )
    .then((response) => response.json())
    .then((data) => displayWeather(data))
    .catch((error) => console.error('Error fetching weather data:', error));
}

// Function to display weather data on the page
function displayWeather(data) {
  const weatherDisplay = document.getElementById('weatherDisplay');
  if (data && data.weather) {
    weatherDisplay.innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Humidity: ${data.main.humidity} %</p>
        `;
  } else {
    weatherDisplay.innerHTML = '<p>Weather data not available.</p>';
  }
}

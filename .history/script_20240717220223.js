const apiKey = 'f7647cc1b924b665ef1a8d3a0e291600';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (!response.ok) {
    alert('City not found');
    return;
  }
  var data = await response.json();

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
  // document.getElementById('.weather').innerHTML = data.weather[0].main;

  if (data.weather[0].main === 'Clouds') {
    weatherIcon.src = 'images/clouds.png';
  } else if (data.weather[0].main === 'Clear') {
    weatherIcon.src = 'images/clear.png';
  } else if (data.weather[0].main === 'Drizzle') {
    weatherIcon.src = 'images/drizzle.png';
  } else if (data.weather[0].main === 'Mist') {
    weatherIcon.src = 'images/mist.png';
  } else {
    weatherIcon.src = 'images/sunny.png';
  }
  document.querySelector('.weather').style.display = 'block';
}

searchBtn.addEventListener('click', () => {
  const city = searchBox.value;
  checkWeather(city);
});

const apiKey = 'f7647cc1b924b665ef1a8d3a0e291600';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weather-icon

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
  document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

  if (data.weather[0].main === 'Clear') {
    document.querySelector('.weather').innerHTML = 'Clear Sky';
  } else if (data.weather[0].main === 'Clouds') {

  // document.getElementById('.weather').innerHTML = data.weather[0].main;
}

searchBtn.addEventListener('click', () => {
  const city = searchBox.value;
  checkWeather(city);
});

checkWeather();

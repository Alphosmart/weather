const apiKey = 'f7647cc1b924b665ef1a8d3a0e291600';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const checkWeather = async (city) => {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector('.error').style.display = 'block';
    document.querySelector('.weather').style.display = 'none';
    return; // Return early to prevent further UI updates
  } else {
    const data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;

    switch (data.weather[0].main) {
      case 'Clouds':
        weatherIcon.src = 'images/clouds.png';
        break;
      case 'Clear':
        weatherIcon.src = 'images/clear.png';
        break;
      case 'Drizzle':
        weatherIcon.src = 'images/drizzle.png';
        break;
      case 'Mist':
        weatherIcon.src = 'images/mist.png';
        break;
      case 'Rain':
        weatherIcon.src = 'images/rain.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
  }
};

searchBtn.addEventListener('click', () => {
  const city = searchBox.value.trim();
  checkWeather(city);
});

const apiKey = 'f7647cc1b924b665ef1a8d3a0e291600';
const apiUrl =
  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=kaduna';

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
}

checkWeather();

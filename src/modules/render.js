const form = document.querySelector('.form');
const errorText = document.querySelector('.error-text');
const location = document.querySelector('.location');
const description = document.querySelector('.description');
const degrees = document.querySelector('.degrees');
const feelsLike = document.querySelector('.feels-like');
const windSpeed = document.querySelector('.wind-speed');
const humidity = document.querySelector('.humidity');
const weatherInfo = document.querySelector('#weather-info');

function displayInfo(info) {
  weatherInfo.classList.add('fade-in2');
  location.textContent = info.city;
  description.textContent =
    info.description[0].toUpperCase() + info.description.slice(1);
  degrees.textContent = info.temp;
  feelsLike.textContent = `Feels like: ${info.feels}`;
  windSpeed.textContent = `Wind speed: ${info.windSpeed}`;
  humidity.textContent = `Humidity: ${info.humidity}`;
}

function reset() {
  form.reset();
  errorText.style.display = 'none';
  weatherInfo.classList.remove('fade-in2');
}
function alertError() {
  errorText.style.display = 'block';
}

export { displayInfo, reset, alertError };

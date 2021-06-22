// import { format } from "prettier";
import { alertError, displayInfo, reset } from './render';

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7111d03969339f152f8622845667e09d`,
      { mode: 'cors' }
    );
    if (!response.ok) throw new Error(`City ${location} not found`);
    const weatherData = await response.json();
    const weatherInfo = processData(weatherData);
    displayInfo(weatherInfo);
  } catch (error) {
    console.log(error);
    alertError();
  }
}

function showWeatherInfo(e) {
  e.preventDefault();
  const input = document.querySelector('#search-bar').value;
  const location = input.toLowerCase();

  getWeather(location);
  reset();
}

export { showWeatherInfo, getWeather };

// Helper functions
function milesToKm(miles) {
  return `${Math.round(miles * 1.609)} km/h`;
}

function kelvinToCelsius(kelvin) {
  return `${Math.round(kelvin - 273.15)}°C`;
}

function processData(data) {
  const processedInfo = {
    city: data.name,
    description: data.weather[0].description,
    temp: kelvinToCelsius(data.main.temp),
    feels: kelvinToCelsius(data.main.feels_like),
    humidity: `${data.main.humidity}%`,
    windSpeed: milesToKm(data.wind.speed),
  };

  return processedInfo;
}

// function kelvinToFahrenheit(kelvin) {
//   return `${Math.round((kelvin - 273.15) * (9 / 5) + 32)}°`;
// }

import { getWeather, showWeatherInfo } from './modules/app';

const searchForm = document.querySelector('.form');
searchForm.addEventListener('submit', showWeatherInfo);

getWeather('London');

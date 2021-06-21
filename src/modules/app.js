async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7111d03969339f152f8622845667e09d`,
      { mode: 'cors' }
    );
    const weatherInfo = await response.json();
    console.log(weatherInfo);
  } catch (error) {
    console.log(error);
  }
}

export default getWeather;

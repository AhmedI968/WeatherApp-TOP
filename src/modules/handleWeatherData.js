import fetchWeatherData from "./fetchWeatherData";

// const searchButton = document.querySelector(".search-button");

async function handleWeatherData(location) {
  const weatherData = await fetchWeatherData(location);

  const returnObject = {
    address: weatherData.resolvedAddress,
    weatherLike: weatherData.currentConditions.conditions,
    temperature: weatherData.currentConditions.temp,
    humidity: weatherData.currentConditions.humidity,
    windspeed: weatherData.currentConditions.windspeed,
    pressure: weatherData.currentConditions.pressure,
    feelsLike: weatherData.currentConditions.feelslike,
  };

  let parts = returnObject.address.split(",");
  if (parts.length < 2) {
    returnObject.address = parts[0];
  } else {
    returnObject.address = parts[0] + ", " + parts[1];
  }

  console.log(returnObject);
  return returnObject;
}

export default handleWeatherData;

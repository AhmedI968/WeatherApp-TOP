import fetchWeatherData from "./fetchWeatherData";

const searchButton = document.querySelector(".search-button");

function handleWeatherData() {
  searchButton.addEventListener("click", () => {
    const location = document.querySelector(".search-bar").value;
    const weatherData = fetchWeatherData(location);
    console.log(weatherData);
  });
}

export default handleWeatherData;

import handleWeatherData from "./handleWeatherData";

function setUpEventListeners() {
  const searchButton = document.querySelector(".search-button");

  searchButton.addEventListener("click", async () => {
    const location = document.querySelector(".search-bar").value;
    const weatherData = await handleWeatherData(location);
    updateDOM(weatherData);
  });
}

function updateDOM(weatherData) {
  const location = document.querySelector(".location");
  const weatherLike = document.querySelector(".weather-like");
  const temperature = document.querySelector(".temperature");
  const humidity = document.querySelector(".humidity");
  const windspeed = document.querySelector(".windspeed");
  const pressure = document.querySelector(".pressure");
  const feelsLike = document.querySelector(".feels-like");

  location.textContent = weatherData.address || "N/A";
  weatherLike.textContent = weatherData.weatherLike || "N/A";
  temperature.textContent = weatherData.temperature || "N/A";
  humidity.textContent = weatherData.humidity || "N/A";
  windspeed.textContent = weatherData.windspeed || "N/A";
  pressure.textContent = weatherData.pressure || "N/A";
  feelsLike.textContent = weatherData.feelsLike || "N/A";
}

export default setUpEventListeners;

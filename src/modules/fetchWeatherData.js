const API_KEY = process.env.VS_API_Key;

async function fetchWeatherData(location) {
  try {
    const response =
      await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}&contentType=json
`);
    if (!response.ok) {
      throw new Error(`Place: ${location} not found`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default fetchWeatherData;

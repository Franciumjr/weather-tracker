
import Search from './components/Search.jsx'
import Weather from './components/Weather.jsx'
import Forecast from './components/Forecast.jsx';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api.jsx';
import { useState } from 'react';

function App() {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleonSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");
  
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json(); // Fixed: use response[0] for current weather
        const forecastResponse = await response[1].json(); // Fixed: use response[1] for forecast
  
  
        setCurrentWeather({city: searchData.label, ...weatherResponse}); // set the current weather to the one fetch from the API 
        setForecast({ city: searchData.label, ...forecastResponse });
      
      } )
      .catch(
        (err) => console.error(err)
      )
  }
console.log(currentWeather);
console.log(forecast);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  mt-5">
      <h1 className="text-3xl font-bold mb-4 font-mono">weather_app</h1>
      <Search className="w-1/2" onSearchChange={handleonSearchChange}></Search>
      {currentWeather && <Weather currentWeather={currentWeather} ></Weather>}
      {forecast && <Forecast forecast={forecast}></Forecast>}

    </div>
  )
  
}

export default App

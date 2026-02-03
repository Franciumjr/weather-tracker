import React from 'react'

const Weather = ({currentWeather}) => {
    const parameters = [
        {
        label: "Humidity",
        value: currentWeather?.main?.humidity + "%"
        },
        {
        label: "Feels Like",
        value: currentWeather?.main?.feels_like + "°C"
        },
        {
        label: "Wind Speed",
        value: currentWeather?.wind?.speed + " km/h"
        },
        {
        label: "Pressure",
        value: currentWeather?.main?.pressure + " hPa"
        },
        {
        label: "UV Index",
        value: currentWeather?.main?.uvi || "N/A"
        },
        {
        label: "Visibility",
        value: currentWeather?.visibility ? (currentWeather.visibility / 1000) + " km" : "10 km"
        },
    ]

  return (
    <div className="weather">
        <div className="top">
            <p className="city">{currentWeather?.city}</p>
            <div className="current-weather flex-center gap-4">
                <img src="/weather-icons-main/animated/clear-day.svg" alt="current-weather" />
                <p>{currentWeather?.weather?.[0]?.description}</p>
            </div>
            
        </div>
        <div className="bottom">
            <div className="temperature">{Math.round(currentWeather?.main?.temp)}°C</div>
            <div className="details">
                {parameters.map((param, index) => (
                    <div key={index} className="parameter-row">
                        <span className="parameter-label">{param.label} : </span>
                        <span className="parameter-value">{param.value}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Weather

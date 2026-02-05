import React from 'react'
import * as Accordion from '@radix-ui/react-accordion';
const WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Forecast = ({forecast}) => {

    
    const dayOfWeek = new Date().getDay(); // Getting the current day of the week as a number (0-6)
    const reorderedWeek = WEEK.slice(dayOfWeek, WEEK.length ).concat(WEEK.slice(0, dayOfWeek)); // Rearranging the WEEK array to start from today

    console.log(reorderedWeek);

  return (
    <div className='flex'>
        
      <Accordion.Root allowZeroExpanded className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 '>
        {forecast.list.slice(0, 7).map((forecastItem, index) => (
            <Accordion.Item key={index}>
                <Accordion.Header>
                    <Accordion.Trigger className='cursor-pointer text-center font-mono  p-4 rounded-2xl shadow-md hover:bg-zinc-200 transition-all duration-300 hover:-translate-y-0.5'>
                        <label className='font-bold' htmlFor="">{reorderedWeek[index]}</label>
                        <div className="daily-item flex-col font-mono items-center gap-4 ">
                            
                            <img src={forecastItem.weather[0].icon ? `https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}@2x.png` : ""} className='justify-center' alt="weather" />
                            <div className="weather-description">
                            {forecastItem.weather[0].description}
                            </div>
                            <div className="min-max text-zinc-500">
                                {Math.round(forecastItem.main.temp_min)}°C / {Math.round(forecastItem.main.temp_max)}°C
                            </div>
                        </div>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content></Accordion.Content>
            </Accordion.Item>
        ))}
            
            
        
      </Accordion.Root>
    </div>
  )
}

export default Forecast

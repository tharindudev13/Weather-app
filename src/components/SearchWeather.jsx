import { useLoaderData } from 'react-router-dom';
import Icon from '../assets/thunder.svg'
import { useState } from 'react';

function SearchWeather(){

    const weather = useLoaderData()

    

    return(
        <div> 
        <div className="container">
            <div className="top-2">
                    <div className='right'>
                        <img src={Icon} alt="sun" />
                        <p>Sunrise - <span className='details'>{weather.forecast.forecastday[0].astro.sunrise}</span> <br />
                        Sunset&nbsp; - <span className='details'>{weather.forecast.forecastday[0].astro.sunset}</span></p>

                    </div> 
                    <div className='right'>
                        <img src={Icon} alt="sun" />
                        <p>Moonrise - <span className='details'>{weather.forecast.forecastday[0].astro.moonrise}</span> <br />
                        Moonset&nbsp; - <span className='details'>{weather.forecast.forecastday[0].astro.moonset}</span></p>

                    </div>     
            </div>
            <div className="bottom-2">
                <p>UV Index <br /> <span className='details'>{weather.current.uv} </span></p>
                <p>Pressure <br /><span className='details'>{weather.current.pressure_mb} mb</span></p>
                <p>Dew Point <br /><span className='details'>{weather.current.dewpoint_c }°C</span></p>
                <p>Visibility <br /><span className='details'>{weather.current.vis_km } Km</span></p>

            </div>
        </div>
    </div>
    )

}

export default SearchWeather;


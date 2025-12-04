import { useLoaderData } from 'react-router-dom';
import Icon from '../assets/thunder.svg'
import { useState } from 'react';

function SearchWeather(){

    const weather = useLoaderData()
    const [city,setCity] = useState("");
    const getCity = (e) =>{
        setCity(e.target.value)

    }

    return(
        <div className='search-root'>
        <div >
            <input  className="search" id='srch' type="text" placeholder='Search for a city'
            onChange={getCity} value={city}/>
            <button  className="search">Search</button>
        </div>
        
        <div className="container">
            <div className="top">
                <img src={weather.current.condition.icon} alt="live-weather"  />
                    <div className='right'>
                        <p className='city'>{weather.location.name}, {weather.location.country}</p>
                        <p className='status'>{weather.current.condition.text}</p>
                        <p className='temp'>{weather.current.temp_c} °C</p>
                    </div>    
            </div>
            <div className="bottom">
                <p>Wind Speed <br /> <span className='details'>{weather.current.wind_kph}kph</span></p>
                <p>Humadity <br /><span className='details'>{weather.current.humidity}%</span></p>
                <p>Feels Like <br /><span className='details'>{weather.current.feelslike_c }°C</span></p>
            </div>
        </div>
    </div>
    )

}

export default SearchWeather;

export const searchWeatherLoader = async({params}) =>{
    const {city} = params;
    const API_KEY = 'c92318b13ab84c5899a82845250412';
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=c92318b13ab84c5899a82845250412&q=${city}`);

    return res.json();
}
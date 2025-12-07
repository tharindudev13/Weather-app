import Icon from '../assets/thunder.svg'
import { useLoaderData } from 'react-router-dom';

function LiveWeather(){

    const weather = useLoaderData()
    console.log(weather)
    


    return(
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
    )

}

export default LiveWeather;


export const weatherLoader = async() =>{
    const API_KEY = 'c92318b13ab84c5899a82845250412';
    const res = await fetch(`https://api.weatheapi.com/v1/forecast.json?key=c92318b13ab84c5899a82845250412&q=Akuressa,LK`);

    if(!res.ok){
        return(<h1>Something went wrong!</h1>
        )
    }

    return res.json();
}
import { useLoaderData } from 'react-router-dom';
import pcloudy from '../assets/animated/cloudy-day-1.svg'
import day from '../assets/animated/day.svg'
import cloudy from "../assets/animated/cloudy.svg"
import overcast from '../assets/animated/cloudy-day-3.svg'
import pls from '../assets/animated/snowy-3.svg'
import lsnow from '../assets/animated/snowy-3.svg'
import pms from '../assets/animated/snowy-5.svg'
import msnow from '../assets/animated/snowy-5.svg'
import phs from '../assets/animated/snowy-6.svg'
import hsnow from '../assets/animated/snowy-6.svg'
import pld from '../assets/animated/rainy-4.svg'
import ld from '../assets/animated/rainy-4.svg'
import plr from '../assets/animated/rainy-5.svg'
import lrain from '../assets/animated/rainy-5.svg'
import mrat from '../assets/animated/rainy-3.svg'
import hrat from '../assets/animated/rainy-1.svg'
import hrain from '../assets/animated/rainy-6.svg'
import rthunder from '../assets/animated/thunder.svg'
import snow from '../assets/animated/snowy-6.svg'

function LiveWeather(){

    const weather = useLoaderData()

  
    const icons = {1000:day,
                   1003:pcloudy,
                   1006:cloudy,
                   1009:overcast,
                   1210:pls,
                   1213:lsnow,
                   1216:pms,
                   1219:msnow,
                   1222:phs,
                   1225:hsnow,
                   1153:ld,
                   1150:pld,
                   1180:plr,
                   1183:lrain,
                   1186:mrat,
                   1192:hrat,
                   1195:hrain,
                   1276:rthunder,
                   1066:snow
                    }
    const code = weather.current.condition.code

    let Icon = icons[code]

    if(Icon === undefined){
        Icon = weather.current.condition.icon
    }
    
    console.log(Icon)

    
    
    return(
        <div className="container">
           <div className="top">
                <img src={Icon} alt={weather.current.condition.text}  />
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
    const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c92318b13ab84c5899a82845250412&q=Akuressa, Lk&days=6`);

    if(!res.ok){
        return(<h1>Something went wrong!</h1>
        )
    }

    return res.json();
}
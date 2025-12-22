import { useLoaderData } from "react-router-dom"
import rainy from "../assets/animated/rainy-1.svg"
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
import mrain from '../assets/animated/rainy-5.svg'
import hrat from '../assets/animated/rainy-1.svg'
import hrain from '../assets/animated/rainy-6.svg'
import rthunder from '../assets/animated/thunder.svg'
import snow from '../assets/animated/snowy-6.svg'
import prn from '../assets/animated/rainy-3.svg'


function Forecast(){

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
                       1189:mrain,
                       1192:hrat,
                       1195:hrain,
                       1276:rthunder,
                       1066:snow,
                       1063:prn
                        }
        const code1 = weather.forecast.forecastday[0].day.condition.code    
        let Icon1 = icons[code1]
        if(Icon1 === undefined){
            Icon1 = weather.forecast.forecastday[0].day.condition.icon
        }

        const code2 = weather.forecast.forecastday[1].day.condition.code    
        let Icon2 = icons[code2]
        if(Icon2 === undefined){
            Icon2 = weather.forecast.forecastday[1].day.condition.icon
        }

        const code3 = weather.forecast.forecastday[2].day.condition.code    
        let Icon3 = icons[code3]
        if(Icon3 === undefined){
            Icon3 = weather.forecast.forecastday[2].day.condition.icon
        }

        // const code4 = weather.forecast.forecastday[3].day.condition.code    
        // let Icon4 = icons[code4]
        // if(Icon4 === undefined){
        //     Icon4 = weather.forecast.forecastday[3].day.condition.icon
        // }

        // const code5 = weather.forecast.forecastday[4].day.condition.code 
        // console.log(code5)   
        // let Icon5 = icons[code5]
        // if(Icon5 === undefined){
        //     Icon5 = weather.forecast.forecastday[4].day.condition.icon
        // }

        // const code6 = weather.forecast.forecastday[5].day.condition.code    
        // let Icon6 = icons[code6]
        // if(Icon6 === undefined){
        //     Icon6 = weather.forecast.forecastday[5].day.condition.icon
        // }


    return(
        <div className="bottom-bar">
            <h3>Next Days....</h3>
            <div className="_7-days">
                <div className="days">
                    <img src={Icon1} alt="" />
                    <p>{weather.forecast.forecastday[0].day.condition.text}</p>
                </div>

                <div className="days">
                    <img src={Icon2} alt="" />
                    <p>{weather.forecast.forecastday[1].day.condition.text}</p>
                </div>

                <div className="days">
                    <img src={Icon3} alt="" />
                    <p>{weather.forecast.forecastday[2].day.condition.text}</p>
                </div>

                
                
            </div>
        </div>
    )



}

export default Forecast
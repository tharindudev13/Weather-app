import { useLoaderData, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Moon from '../assets/animated/night.svg'
import Sun from '../assets/animated/day.svg'
import { AppContext } from './AppContext';


function SearchDetails(){

    const weather = useLoaderData()

    const {setCity} = useContext(AppContext)
    const [searchText,setSearchText] = useState("")
    const navigate = useNavigate()

   
    const handleSearch = () =>{
         const value = searchText.trim();  // use current input directly
        if (value.length === 0) return;

        setCity(value);          // update context
        navigate(`/search/${value}`);    
    }

     

 
    return(
        <div> 
            <div className="search">
                <input type="text" value={searchText} onChange={(e) =>{setSearchText(e.target.value)}}
                 placeholder='Enter a city (ex:Matara, Lk)'/>
                <button onClick={handleSearch} > Search </button>
            </div>
        <div className="container">
            <div className="top-2">
                    <div className='right'>
                        <img src={Sun} alt="sun" />
                        <p>Sunrise - <span className='details'>{weather.forecast.forecastday[0].astro.sunrise}</span> <br />
                        Sunset&nbsp; - <span className='details'>{weather.forecast.forecastday[0].astro.sunset}</span></p>

                    </div> 
                    <div className='right'>
                        <img src={Moon} alt="moon" />
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

export default SearchDetails;


import LiveWeather from "../components/LiveWeather"
import SearchWeather from "../components/Details"
import Forecast from "../components/Forecast"


function RootLayout(){
    return(
        <div className="contents">
            <LiveWeather />
            <SearchWeather />
            <Forecast />

        </div>
    )
}

export default RootLayout
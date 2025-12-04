import LiveWeather from "../components/LiveWeather"
import SearchWeather from "../components/SearchWeather"


function RootLayout(){
    return(
        <div className="contents">
            <LiveWeather />
            <SearchWeather />

        </div>
    )
}

export default RootLayout
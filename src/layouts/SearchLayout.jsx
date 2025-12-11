import LiveWeather from "../components/LiveWeather"
import SearchWeather from "../components/Details"
import SearchForecast from "../components/SearchForecast"
import SearchCity from "../components/searchCity"
import SearchDetails from "../components/SearchDetails"


function SearchLayout(){
    return(
        <div className="contents">
            <SearchCity />
            <SearchDetails />
            <SearchForecast />

        </div>
    )
}

export default SearchLayout
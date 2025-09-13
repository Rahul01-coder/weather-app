import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    
    const [weatherInfo, setWeatherInfo] = useState({
        city:"mumbai",
        temp: 20,
        tempMin: 30,
        tempMax: 45,
        humidity: 23,
        feelsLike: 34.3,
        weather: "haze",
    })

    let updateInfo= (result) =>{
        setWeatherInfo(result);
    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
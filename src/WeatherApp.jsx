

import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";


export default function WeatherApp(){

    const [weatherInfo , setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelsLike:13.97,
            temp: 14.05,
            tempMin:14.05,
            tempMax: 14.05,
            humidity:94,
            weather: "fog",
    
        }
    )


    let updateInfo = (newInfo) =>{
            setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Weather app by prathamesh</h1>

            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    );
}
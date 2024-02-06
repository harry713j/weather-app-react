import { useState } from "react";
import { useWeatherDataContext } from "../WeatherDataContext";

function Temparature(){
    const [isToggled, setToggled] = useState(false);

    const handleToggle = () => {
      setToggled(!isToggled);
    }

    const {weatherData} = useWeatherDataContext();
    return (
        <div>
        {isToggled ? (<div>
        <p style={{
          fontSize: '62px',
          fontWeight: '400',
          margin: '0',
         }}>{weatherData.current.temp_c}<span >°</span>
          </p>
          <h6 style={{
            fontSize: "22px",
            fontWeight: '400',
            margin: '0',
          }}>{weatherData.forecast.forecastday[0].day.maxtemp_c}°/ 
            {weatherData.forecast.forecastday[0].day.mintemp_c}° </h6>
        </div>) : (<div>
        <p style={{
          fontSize: '62px',
          fontWeight: '400',
          margin: '0',
         }}>{weatherData.current.temp_f}<span >°</span>
          </p>
          <h6 style={{
            fontSize: "22px",
            fontWeight: '400',
            margin: '0',
          }}>{weatherData.forecast.forecastday[0].day.maxtemp_f}°/ 
            {weatherData.forecast.forecastday[0].day.mintemp_f}° </h6>
        </div>)}
        
          <div className="mt-4 toggle-container">
          <button className={`toggle-button ${isToggled ? '' : 'f-selected'}`}
          onClick={handleToggle}
          >{isToggled ? '°C' : '°F'}</button>
          </div>

          
        </div>
          
    );
}

export default Temparature;

import { useWeatherDataContext } from "../WeatherDataContext";

function Temparature({ isToggled }){
    

    const {weatherData} = useWeatherDataContext();
    return (
        <div className="d-flex flex-column justify-content-center" style={{
          maxHeight: '202px',
          maxWidth: '164px',
          }}>
        {isToggled ? (<div className="temp">
        <p style={{
          fontSize: '62px',
          fontWeight: '400',
          margin: '0 5px',
         }}>{weatherData.current.temp_c}<span >°</span>
          </p>
          <h6 style={{
            fontSize: "22px",
            fontWeight: '400',
            margin: '0 5px',
          }}>{weatherData.forecast.forecastday[0].day.maxtemp_c}°/ 
            {weatherData.forecast.forecastday[0].day.mintemp_c}° </h6>
        </div>) : (<div className="temp">
        <p style={{
          fontSize: '62px',
          fontWeight: '400',
          margin: '0 5px',
         }}>{weatherData.current.temp_f}<span >°</span>
          </p>
          <h6 style={{
            fontSize: "22px",
            fontWeight: '400',
            margin: '0 5px',
          }}>{weatherData.forecast.forecastday[0].day.maxtemp_f}°/ 
            {weatherData.forecast.forecastday[0].day.mintemp_f}° </h6>
        </div>)}
          
        </div>
          
    );
}

export default Temparature;
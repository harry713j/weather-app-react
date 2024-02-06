import { useWeatherDataContext } from "../WeatherDataContext";

function OtherDetails(){
    const {weatherData} = useWeatherDataContext();
    return (
        <div className="card" style={{
            
            width: '100%',
            backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/01/57/38/360_F_301573846_7L4jW6ub2eS93JGsTNLGsZttzPnwotFl.jpg")',
            backgroundColor: 'rgba(0,0,0,0.3)',
            backgroundBlendMode: 'darken',
            color: '#F6F6F9',
        }}>
         <div className="card-body">
            <div className="row">
                <div className="col">
                    <h6>Real feel</h6>
                    <p>{weatherData.current.feelslike_c}<span>°c</span></p>
                </div>
                <div className="col">
                     <h6>Humidity</h6>
                     <p>{weatherData.current.humidity}%</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                     <h6>Chance of rain </h6>
                     <p>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                </div>
                <div className="col">
                     <h6>Chance of snow </h6>
                     <p>{weatherData.forecast.forecastday[0].day.daily_chance_of_snow}%</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h6>Wind speed </h6>
                <p>{weatherData.current.wind_kph} km/hr</p>
                </div>
                <div className="col">
                <h6>Pressure </h6>
                <p>{weatherData.current.pressure_mb}mbar</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h6>UV index </h6>
                <p>{weatherData.current.uv}</p>
                </div>
            </div>
        </div>
     </div>

    );
}

export default OtherDetails;
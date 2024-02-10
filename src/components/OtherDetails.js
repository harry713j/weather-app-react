import { useWeatherDataContext } from "../WeatherDataContext";

function OtherDetails(){
    const {weatherData} = useWeatherDataContext();
    return (
        <div className="other-details-card">
         <div className="card-body">
            <div className="row">
                <div className="col">
                    <h6 style={{
                        marginBottom: '0',
                        }}>Real feel</h6>
                    <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.current.feelslike_c}<span>°c</span></p>
                </div>
                <div className="col">
                     <h6 style={{
                        marginBottom: '0',
                        }}>Humidity</h6>
                     <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.current.humidity}%</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                     <h6 style={{
                        marginBottom: '0',
                        }}>Chance of rain </h6>
                     <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                </div>
                <div className="col">
                     <h6 style={{
                        marginBottom: '0',
                        }}>Chance of snow </h6>
                     <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.forecast.forecastday[0].day.daily_chance_of_snow}%</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h6 style={{
                        marginBottom: '0',
                        }}>Wind speed </h6>
                <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.current.wind_kph} km/hr</p>
                </div>
                <div className="col">
                <h6 style={{
                        marginBottom: '0',
                        }}>Pressure </h6>
                <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.current.pressure_mb}mbar</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <h6 style={{
                        marginBottom: '0',
                        }}>UV index </h6>
                <p style={{
                        opacity: '0.8',
                        marginTop: '0',
                        fontSize: '13px',
                        }}>{weatherData.current.uv}</p>
                </div>
            </div>
        </div>
     </div>

    );
}

export default OtherDetails;
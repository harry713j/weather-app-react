import { useWeatherDataContext } from "../WeatherDataContext";

function ImageCondition(){
    const {weatherData} = useWeatherDataContext();
    return (
        <div className="d-flex flex-column text-center mt-5 " >
            <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text}
            className="img-fluid " style={{
                maxWidth: '100px',
                marginLeft: 'auto',
                marginRight: 'auto',
                
            }}>

            </img>
            <h5>{weatherData.current.condition.text}</h5>
        </div>
    );
}


export default ImageCondition;
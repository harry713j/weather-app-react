import { useWeatherDataContext } from "../WeatherDataContext";

function UpcomingDaysDetails({ isToggled }){
    const {weatherData} = useWeatherDataContext();
    const days = weatherData.forecast.forecastday;

    const dayCards = days.map((day, index) => {
        let currentDate = new Date().getDate();
        const date = new Date(day.date).toString().split(" ");
        currentDate = (currentDate < 10) ? `0${currentDate}` : `${currentDate}`;
        return (
         <div key={index} className="day-card">
            {isToggled ? (<section className="card-body d-flex flex-column justify-content-center align-items-center m-0 p-0">
                <p className="day-text">{(currentDate === date[2]) ? "Today" : 
                ((parseInt(currentDate) + 1) === parseInt(date[2])) ? "Tommorow" : date[0]}</p> 
                <p className="date-text">{`${date[1]} ${date[2]}`}</p>
                <img className="day-icon" src={day.day.condition.icon} alt={day.day.condition.text} />
                <p className="day-condition-text">{day.day.condition.text}</p>
                <p className="day-temp">{`${day.day.maxtemp_c}°/${day.day.mintemp_c}°`}</p>
              </section>) : (<section className="card-body d-flex flex-column justify-content-center align-items-center m-0 p-0">
                <p className="day-text">{(currentDate === date[2]) ? "Today" : 
                ((parseInt(currentDate) + 1) === parseInt(date[2])) ? "Tommorow" : date[0]}</p> 
                <p className="date-text">{`${date[1]} ${date[2]}`}</p>
                <img className="day-icon" src={day.day.condition.icon} alt={day.day.condition.text} />
                <p className="day-condition-text">{day.day.condition.text}</p>
                <p className="day-temp">{`${day.day.maxtemp_f}°/${day.day.mintemp_f}°`}</p>
         </section>)}
         
         </div>
        )
    });
    return (
        <div className="d-flex justify-content-evenly mb-5">
         {dayCards}
        </div>
        
    );
}

export default UpcomingDaysDetails;
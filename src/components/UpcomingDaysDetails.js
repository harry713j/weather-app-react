import { useWeatherDataContext } from "../WeatherDataContext";

function UpcomingDaysDetails({ isToggled }){
    const {weatherData} = useWeatherDataContext();
    const days = weatherData.forecast.forecastday;

    const dayCards = days.map((day, index) => {
        let currentDate = new Date().getDate();
        const date = new Date(day.date).toString().split(" ");
        currentDate = (currentDate < 10) ? `0${currentDate}` : `${currentDate}`;
        return (
         <div key={index} className="card day-card" style={{
            height: '10rem',
            width: '8rem',
            backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/01/57/38/360_F_301573846_7L4jW6ub2eS93JGsTNLGsZttzPnwotFl.jpg")',
            backgroundColor: 'rgba(0,0,0,0.2)',
            backgroundBlendMode: 'darken',
            color: '#F6F6F9',
         }}>
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
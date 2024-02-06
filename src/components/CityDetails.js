import { useWeatherDataContext } from "../WeatherDataContext";

function CityDetails(){
    const {weatherData} = useWeatherDataContext();
    const datetimeString = weatherData.location.localtime;
    const date = new Date(datetimeString);
    const daysOfWeek = {Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday",
                           Fri: "Friday", Sat: "Saturday", Sun: "Sunday"};
    const monthsOfYear = {Jan: "January", Feb: "February", Mar: "March", Apr: "April", May: "May", Jun: "June",
                          Jul: "July", Aug: "August", Sep: "September", Oct: "October", Nov: "November", 
                          Dec: "December"}
    
    const allInfo = date.toString().split(" ");
    return (
        <div className="d-flex flex-column align-content-start">
        <p style={{
            fontSize: '17px',
            fontWeight: '500',
            lineHeight: '1.1',
            margin: '0',
        }}>{weatherData.location.name}, {weatherData.location.region}</p>
            <p style={{
                fontSize: '13px',
                fontWeight: '400',
                opacity: '0.8',
                margin: '0',
            }}>
            {daysOfWeek[allInfo[0]]}, {`${monthsOfYear[allInfo[1]]} ${allInfo[2]}, ${allInfo[3]}`}
            </p>
        </div>
        
    );
}

export default CityDetails;
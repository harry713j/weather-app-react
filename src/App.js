import './App.css';
import { useWeatherDataContext } from './WeatherDataContext';
import AllWeekDayDetails from './components/AllWeekDayDetails';
import CityDetails from './components/CityDetails';
import ImageCondition from './components/ImageCondition';
import OtherDetails from './components/OtherDetails';
import Temparature from './components/Temperature';


function App() {
  const {weatherData,loading} = useWeatherDataContext();
  console.log(weatherData);
  
  return (
    <div className="container d-flex align-items-center justify-content-center mt-5">
      <div className="card mt-5 shadow rounded " style={{
        width: '40rem',
        height: '25rem',
        backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/01/57/38/360_F_301573846_7L4jW6ub2eS93JGsTNLGsZttzPnwotFl.jpg")',
        backgroundColor: 'rgba(0,0,220,0.5)',
        backgroundBlendMode: 'darken',
        color: '#ffffff'
        }}>
        {loading ? (<p> loading...</p>) : (<div className="card-body pt-4 d-flex flex-column">
           <div className="row mt-2 mx-2 " style={{
            height: '16rem',
           }}>

           <div className="col-7 d-flex flex-column "  >
           <CityDetails />
           <ImageCondition />
           </div>


           <div className="col-5 d-flex text-center align-items-center justify-content-center">
           <Temparature />
           </div>

           </div>

           <div className="row my-3 mx-2" >
           <div className="col-12 mt-auto">
           <AllWeekDayDetails />
           </div>
           </div>
           <div className="row d-flex flex-column align-items-center" style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
           }}>
            <div className="col-8">
            <OtherDetails />
            </div>
           </div>

        </div>) }
        
      </div>
    </div>
  );
}

export default App;

import { createContext, useState, useEffect, useContext } from "react";

const WeatherDataContext = createContext();

 const WeatherDataProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'e53ac9cbc2mshe4ebc3e1d9e5732p1074adjsncd62d6884ea8',
		    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	    }
    };
     fetch(url, options).then(response => {
      if(!response.ok){
        throw new Error(`error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      setWeatherData(data);
      setLoading(false);
    }).catch(error => {
      console.log("Error: ", error);
      setLoading(false);
    });
  },[]);
    return <WeatherDataContext.Provider value={{weatherData, loading}}>
        {children}
    </WeatherDataContext.Provider>
}

export const useWeatherDataContext = () => {
    return useContext(WeatherDataContext);
}

export default WeatherDataProvider;
import { useEffect, useState } from "react";
import { useWeatherDataContext } from "../WeatherDataContext";

function SearchPlaces(){
    const {searchInput, handleChange, searchResults, updateSelectedPlace} = useWeatherDataContext();
    const [placesWeatherData, setPlacesWeatherData] = useState([]);

    const handlePlaceSelect = (place) => {
        updateSelectedPlace(place);
    }

    useEffect(() => {
        const fetchData = (result) => {
            return new Promise((resolve, reject) => {
            const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${result.name}`;
            const options = {
	        method: 'GET',
	        headers: {
	        	'X-RapidAPI-Key': 'e53ac9cbc2mshe4ebc3e1d9e5732p1074adjsncd62d6884ea8',
		        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	            }
            };

           fetch(url, options).then(response => {
                if(!response.ok){
                    throw new Error("status : ", response.status);
                }
                return response.json();
            }).then(data => resolve(data)).catch(err => reject(err));
            
        });
     };

     const updateWeatherData = () => {
        const promises = searchResults.map(result => fetchData(result));

        Promise.all(promises).then(data => setPlacesWeatherData(data)).catch(err => console.log(err));
     };

     updateWeatherData();
    },[searchResults]);
    console.log("array: ",placesWeatherData);
    const suggetions = placesWeatherData.map((result, index)=> {
        return (
            <button key={index} className="card-button" onClick={() => handlePlaceSelect(result.location.name)}>
            <div  className="place-card">
                <section className="d-flex flex-column justify-content-center" >
                    <p style={{
                        fontSize: '16px',
                        fontWeight: '500',
                        color: '#444447',
                        marginTop: '5px',
                        marginBottom: '2px',
                        padding: '3px 1px 0 5px',
                        lineHeight: '0.9',
                    }}>
                    {result.location.name}
                    </p>
                    <p style={{
                        fontSize: '12px',
                        fontWeight: '400',
                        color: '#444447',
                        opacity: '0.9',
                        marginTop: '0',
                        marginBottom: '0',
                        padding: '0 1px 0 5px',
                        
                    }}>
                        {result.location.region}, {result.location.country}
                    </p>
                </section>
                <section className="d-flex align-items-center " >
                    <p style={{
                        color: '#444447',
                        fontSize: '18px',
                        fontWeight: '500',
                        marginTop: '7px',
                        padding: '2px',
                    }}>
                        {result.current.temp_c}℃
                    </p>
                </section>
            </div>
            </button>
            
        )
    });
    return (

            <div className="search-form" >
            
                <i className="fa-solid fa-magnifying-glass search-icon" style={{
                    fontSize: '13px',
                }}></i>
                <input type="text" className="search-input" 
                    placeholder="Enter your location (e.g. New Delhi)"
                    value={searchInput}
                    onChange={handleChange}
                    style={{border:'1px solid black'}}
                />
                {searchInput.length > 0 && (<div className="suggested-places-holder">
                <div className="suggested-places">
                    {(suggetions.length) ? suggetions : (<div className="nothing-found">No location found</div>)}
                </div>
                </div>)}   
            </div>
    );
}

export default SearchPlaces;
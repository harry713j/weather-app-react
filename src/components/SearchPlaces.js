
function SearchPlaces(){
    return (

            <div className="search-form">
            
                <i className="fa-solid fa-magnifying-glass search-icon" style={{
                    fontSize: '13px',
                }}></i>
                <input type="text" className="search-input" 
                    placeholder="Enter your location (e.g. Delhi)"
                />
            </div>
    );
}

export default SearchPlaces;
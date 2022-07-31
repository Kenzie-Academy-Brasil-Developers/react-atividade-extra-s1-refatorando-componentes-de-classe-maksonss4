import { useEffect, useState } from "react";

import "./style.css";

function SearchWeather ({handleChangeWeather}) {
  const [inputValue, setInputValue] = useState("Curitiba")

  useEffect(() => {
    handleSubmit(inputValue);    
  }, []) 
  

  function handleSubmit (cityName) {
    fetch(`https://goweather.herokuapp.com/weather/${cityName}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        
        handleChangeWeather(response, inputValue)
      });
  };

  return (
    <div className="search-container">
      <div>
        <input
          className="search-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div>
        <button className="search-button" onClick={() => handleSubmit(inputValue)}>
          Search
        </button>
      </div>
    </div>
  );
  
}

export default SearchWeather;

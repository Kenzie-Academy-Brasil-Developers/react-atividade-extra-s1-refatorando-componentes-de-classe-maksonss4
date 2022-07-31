import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";

import "./App.css";
import { useState } from "react";

function App () {
  const [weather, setWeather] = useState(null)
  const [cit, setCit] = useState("")
  // state = {
  //   weather: {},
  //   city: "",
  // };

  function handleChangeWeather (weatherData, city) {
    setCit(city)
    setWeather(weatherData)
    // this.setState({ weather: weatherData, city: city });
  };

  
  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather city={cit} weather={weather} />
    </div>
  );
  
}

export default App;

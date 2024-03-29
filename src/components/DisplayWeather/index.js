import "./style.css";

function DisplayWeather ({weather, city}) {
  
  return (
    <div className="display-container">
      <div className="display-city">{city}</div>
      <div className="display-temperature">{weather ? weather.temperature : "Carregando..."}</div>
    </div>
  );
  
}

export default DisplayWeather;

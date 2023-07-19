import axios from "axios";
import { useState } from "react";

const App = () => {
  const [city, setCity] = useState("delhi");
  const [value, setValue] = useState({
    name: "",
    description: [],
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    country: "",
    windSpeed: 0,
  });
  const handleClick = async () => {
    const data = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=57202aa5bb4f81df798b7c4a89bd7cf5`
    );
    console.log(data);
    setValue({
      name: data.data.name,
      description: data.data.weather[0].description,
      temp: data.data.main.temp,
      temp_max: data.data.main.temp_max,
      temp_min: data.data.main.temp_min,
      humidity: data.data.main.humidity,
      country: data.data.sys.country,
      windSpeed: data.data.wind.speed,
    });
  };
  return (
    <div className="container text-center body ">
      
      <h1 className="text-light mb-5 ">Weather App</h1>
      <input
        type="text"
        className="form-control"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="btn btn-warning mt-3 p-2"
        type="submit"
        onClick={handleClick}
      >
        Get Details
      </button>

      <div className="d-flex flex-wrap justify-content-center m-3">
        <div className="card m-1">
          <div className="card-body">Name: {value.name}</div>
        </div>
        <div className="card m-1"></div>
        <div className="card m-1">
          <div className="card-body">Description: {value.description}</div>
        </div>
        <div className="card m-1">
          <div className="card-body">
            Max Temp: {(value.temp_max - 273.15).toFixed(2)}°C
          </div>
        </div>
        <div className="card m-1">
          <div className="card-body">
            Min Temp: {(value.temp_min - 273.15).toFixed(2)}°C
          </div>
        </div>
        <div className="card m-1">
          <div className="card-body">Humidity: {value.humidity}</div>
        </div>
        <div className="card m-1">
          <div className="card-body">WindSpeed: {value.windSpeed}</div>
        </div>
        <div className="card m-1">
          <div className="card-body">Country: {value.country}</div>
        </div>
      </div>
    </div>
  );
};

export default App;

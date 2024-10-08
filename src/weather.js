import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
// installing axios to use api
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  // function to api responses
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      //multiplication is for the date
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  // using api
  function search() {
    const apiKey = "eac360db5fc86ft86450f3693e73o43f";
    // unit= metrics is for showing celsius or fahrenheit
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 ">
              {/* the search input */}
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control search-input"
                onChange={handleCityChange}
              />
            </div>
            {/* the search button */}
            <div className="col-3 p-0">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        {/* name of the city and the image */}
        <WeatherInfo data={weatherData} />
        {/* forecasting and details of each day temp */}
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
        {/* footer */}
        <footer>
          This project was coded by{" "}
          <a href="/" target="_blank" rel="noopener noreferrer">
            GhazalKamari
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/GhazalKa/ShecodesReactProject"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://shecodes-react-project.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Vercel
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

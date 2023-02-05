import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleresponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }
  if (ready) {
    return (
      <div className="container weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city name"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              {" "}
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>London</h1>
        <ul>
          <li>Saturday 20:06</li>
          <li>Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
              />
              <span className="temperature">{temperature}</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Percipitation: 0%</li>
              <li> Humidty: 81%</li>
              <li>Wind: 10km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    const apiKey = "2b7d5c12915b9caf06435cbda1f81a91";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unites=metric`;
    axios.get(apiUrl).then(handleresponse);
    return "Loading...";
  }
}

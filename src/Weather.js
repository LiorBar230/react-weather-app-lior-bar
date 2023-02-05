import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container weather">
      <h1>London</h1>
      <ul>
        <li>Saturday 20:06</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />{" "}
          6°C
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
}

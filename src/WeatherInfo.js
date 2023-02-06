import React from "react";
import DateDisplay from "./DateDisplay";
import WeatherIcon from "./WeatherIcon";
import WeatherTempUnit from "./WeatherTempUnit";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DateDisplay date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div>
            <WeatherIcon code={props.data.icon} />
            <WeatherTempUnit celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidty: {props.data.humidty}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

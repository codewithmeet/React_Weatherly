import React, { useState, useEffect, useContext } from "react";
import "./WeatherCard.css";
import GeoMap from "../GeoMap/GeoMap";
// Weather Icons

// Icons
import { IoLocation } from "react-icons/io5";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { BsDropletHalf } from "react-icons/bs";
import { ImMeter } from "react-icons/im";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { RiWindyFill } from "react-icons/ri";
import { GlobalContext } from "../../context/GlobalContext";
import { TempConverter } from "../../helpers/KelvintoCelsius";
import { epochToTime } from "../../helpers/epochToTime";

const DateMaker = (d: Date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const day = days[d.getDay()];
  const month = months[d.getMonth()];
  const year = d.getFullYear();
  const date = d.getDate();

  return `${day} ${date} ${month}, ${year}`;
};
const WeatherCard = () => {
  const { data } = useContext(GlobalContext);

  return (
    <div className="App__WeatherCardWrapper">
      <div className="App__WeatherCardContainer">
        <div className="App__WeatherCardMainSection">
          <div className="App__WeatherCardIconContainer">
            {/* Temp Icon */}
            <img
              src={`/assets/weather-icons/${data?.weather[0].icon}.png`}
              alt={data?.weather[0].main}
            />
            {/* Temp Cele */}
            <h2>
              {TempConverter(data?.main.temp)}°C
              <span>{data?.weather[0].main}</span>
            </h2>
          </div>
          <div className="App__WeatherCardCityContainer">
            <p>{DateMaker(new Date())}</p>
            <div className="App__WeatherCardCity">
              <IoLocation />
              <h2>
                {data?.name}, {data?.sys.country}
              </h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="App__WeatherCardInfoSection">
          <div className="App__WeatherCardInfoSectionRow">
            <div className="App__WeatherCardInfoCard">
              <FaTemperatureHigh size={40} />
              <p>
                <span>Temp Max.</span>
                {TempConverter(data?.main.temp_max)}°C
              </p>
            </div>
            <div className="App__WeatherCardInfoCard">
              <FaTemperatureLow size={40} />
              <p>
                <span>Temp Low.</span> {TempConverter(data?.main.temp_min)}°C
              </p>
            </div>
          </div>
          <div className="App__WeatherCardInfoSectionRow">
            <div className="App__WeatherCardInfoCard">
              <BsDropletHalf size={40} />
              <p>
                <span>Humidity </span>
                {data?.main.humidity}%
              </p>
            </div>
            <div className="App__WeatherCardInfoCard">
              <ImMeter size={40} />
              <p>
                <span>Pressure.</span>
                {data?.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="App__WeatherCardInfoSection">
          <div className="App__WeatherCardInfoSectionRow">
            <div className="App__WeatherCardInfoCard">
              <FiSunrise size={40} />
              <p>
                <span>Sunrise</span>
                {epochToTime(data?.sys.sunrise)}
              </p>
            </div>
          </div>
          <div className="App__WeatherCardInfoSectionRow">
            <div className="App__WeatherCardInfoCard">
              <FiSunset size={40} />
              <p>
                <span>Sunset</span> {epochToTime(data?.sys.sunset)}
              </p>
            </div>
          </div>
          <div className="App__WeatherCardInfoSectionRow">
            <div className="App__WeatherCardInfoCard">
              <RiWindyFill size={40} />
              <p>
                <span>Wind</span>
                {Math.round(data?.wind.speed * 3.6)} km/h
              </p>
            </div>
          </div>
        </div>
        <GeoMap />
      </div>
    </div>
  );
};

export default WeatherCard;

import React, { useState } from 'react'
import './weatherapp.css'
import search_icon from "../assests/search.png";
import clear_icon from "../assests/clear.png";
import cloud_icon from "../assests/cloud.png";
import drizzle_icon from "../assests/drizzle.png";
import rain_icon from "../assests/rain.png";
import snow_icon from "../assests/snow.png";
import wind_icon from "../assests/wind.png";
import humidity_icon from "../assests/humidity.png";

const Weather = () => {

  let api_key ="f420886e11e98b1ccb1f9e1caf47da95";
  
  const [wicon,setwicon] = useState(cloud_icon);

  const search = async() => {
      const element = document.getElementsByClassName("cityInput");
      console.log(element);
      if(element[0]?.value === "")
      {
        return 0;
      }
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0]?.value}&units=Metric&appid=${api_key}` ;
      let response = await fetch(url);
      console.log(response)
      let data =  await response.json();
      console.log("data", data)
      const humidity = document .getElementsByClassName("humidity-percent");
      const wind = document.getElementsByClassName("wind-rate");
      const temperature = document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");
      if(!data.weather) return 0;
      if(data?.weather[0]?.icon==="01d" || data?.weather[0]?.icon==="01n")
      {
        setwicon(clear_icon);
      }
      else if(data?.weather[0]?.icon==="02d" || data?.weather[0]?.icon==="02n")
      {
         setwicon(cloud_icon);
      }
      else if(data?.weather[0]?.icon==="03d" || data?.weather[0]?.icon==="03n")
      {
        setwicon(drizzle_icon);
      }
      else if(data?.weather[0]?.icon==="04d" || data?.weather[0]?.icon==="04n")
      {
        setwicon(drizzle_icon);
      }
      else if(data?.weather[0]?.icon==="09d" || data?.weather[0]?.icon==="09n")
      {
        setwicon(rain_icon);
      }
      else if(data?.weather[0]?.icon==="10d" || data?.weather[0]?.icon==="10n")
      {
        setwicon(rain_icon);
      }
      else if(data?.weather[0]?.icon==="13d" || data.weather[0]?.icon==="13n")
      {
        setwicon(snow_icon)
      }
      else
      {
        setwicon(clear_icon);
      }


      humidity[0].innerHTML = data.main.humidity+ " %";
      wind[0].innerHTML = data.wind.speed+ " Km/hr";
      temperature[0].innerHTML = data.main.temp+" °c";
      location[0].innerHTML = data.name;


  }

  return (
    <div className='container'>
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='search' />
        <div className="search-icon" onClick={()=>{search()}}>
            <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-location">London</div>
      <div className="data-container">
        <div className="element">
            <img src={humidity_icon} alt="" className="icon" />
            <div className="data">
                <div className="humidity-percent">64%</div>
                <div className="text">Humidity</div>
            </div>
        </div>
        <div className="element">
            <img src={wind_icon} alt="" className="icon" />
            <div className="data">
                <div className="wind-rate">18 Km/hr</div>
                <div className="text">Wind speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
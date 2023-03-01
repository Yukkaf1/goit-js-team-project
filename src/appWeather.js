import { fetchWeatherGeo } from './fetchWeather';
import { fetchWeatherCity } from './fetchWeather';
import './css/appWeather.css';
import moment from 'moment';

const weatherEl = document.querySelector('#root'); 
day =  moment(new Date()).format('ddd')
date = moment(new Date()).format('DD MMM YYYY')

const weatherApp = () => {
  geoWeatherApp()
    }

  function geoWeatherApp() {
      // if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const units = 'metric'


      fetchWeatherGeo(lat, lon, units)
           .then(renderWeather)
            .catch(error => {});
      }
     )
    // } else {fetchWeatherGeo()}
    }
    

    function renderWeather(weather) {
console.log(weather.main.temp, weather.name, Math.round(weather.main.temp), weather.weather[0].icon, weather.weather[0].description, new Date().getDay(), new Date().getDate(), new Date().getFullYear(), new Date().getMonth());
console.log(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

weatherEl.innerHTML = `
        
        <div class="main-container">

        <div class="weather-nav">
        <div class="city-temp">
        ${Math.round(weather.main.temp)}
            <sup>&deg;</sup>
        </div>
  
        <div class="city-info">
            <p class = "weather-description">${weather.weather[0].description}</p>
            <p class = "city-name">
                <span class = "weather-name">${weather.name}</span>

            </p>
        
      </div>
    </div>
          
              <div class="info-icon">
                  <img class="city-icon" src="${`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}" alt="${weather.weather[0].description}"/>
              </div>
  
              <div  class = "info-down">
                <p class="info-date"> ${day} <br> ${date} </p>

                <button class="weatherBtn">weather for week</button>
              </div>
        `
}

weatherApp();

export default weatherApp;
     
 
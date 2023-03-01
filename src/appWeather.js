import { fetchWeather } from './fetchWeather';
import './css/appWeather.css';


const weatherEl = document.querySelector('#root'); 

navigator.geolocation.getCurrentPosition(function(position) {
 console.log(position.coords.latitude, position.coords.longitude);
});

const App = () => {
  const lat ='49.742'
  const lon = '6.5626'
  const units = 'metric'
  fetchWeather(lat, lon, units)
       .then(renderWeather)
        .catch(error => {});

      //  const query = 'berlin,de'
      //  fetchWeather(query)
      //  .then(renderWeather)
      //   .catch(error => {});
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
        <ul class="info">
          <li class="weather-info">
            <p>${weather.weather[0].description}</p>
          </li>
          <li class="city-name">
          <div className="city">
            <p>
                <span>${weather.name}</span>
                <sup>${weather.sys.country}</sup>
            </p>
          </div>
          </li>
        </ul>
      </div>
    </div>
          
              <div class="info-icon">
                  <img class="city-icon" src="${`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}" alt="${weather.weather[0].description}"/>
              </div>
  
              <div>
                <p class="info-date"> ${new Date().getDay()} <br> ${new Date()} </p>
                <button class="weatherBtn">weather for week</button>
              </div>
        
        `
}

App();

export default App;
     
 
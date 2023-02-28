import { fetchWeather } from './fetchWeather';
import './css/appWeather.css';


const weather = document.querySelector('#root'); 

navigator.geolocation.getCurrentPosition(function(position) {
 console.log(position.coords.latitude, position.coords.longitude);
});

const App = () => {
       const query = 'berlin,de'
       fetchWeather(query)
       .then(renderWeather)
        .catch(error => {});
    }

    function renderWeather(weather) {
console.log(weather.main.temp, weather.name, Math.round(weather.main.temp), weather.weather[0].icon, weather.weather[0].description);
console.log(`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);

weather.innerHTML = `
        <div className="main-container">
                <div className="city">
                    <h2 className="city-name">
                        <span>${weather.name}</span>
                        <sup>${weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        ${Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src=${`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=${weather.weather[0].description} />
                        <p>${weather.weather[0].description}</p>
                    </div>
                </div>
        </div> `
}

export default App;
     
 
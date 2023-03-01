import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'be0f81a8f9f4c462088b51501fa506a7'


// export const fetchWeatherCity = async (query, units='metric') => {
//     console.log('Нет гео')
//     const { data } = await axios.get(`${URL}/?&q=${query}&units=${units}&exclude=deyly&APPID=${API_KEY}`);
//     console.log (data);
//     return data;
// }

export const fetchWeatherGeo = async (lat=90.0000, lon=-135.0000, units='metric') => {
 console.log('Есть гео')

 const { data } = await axios.get(`${URL}/?lat=${lat}&lon=${lon}&units=${units}&exclude=deyly&APPID=${API_KEY}`);
    console.log (data);
    return data;

}
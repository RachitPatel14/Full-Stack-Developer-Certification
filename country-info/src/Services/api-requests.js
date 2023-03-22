import axios from 'axios'
const api_key = process.env.REACT_APP_API_KEY
const getAll = () => axios.get('https://restcountries.com/v3.1/all').then(res => res.data)
const getWeather = (lat, long) => axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`).then(res => res.data);

export default { getAll, getWeather }
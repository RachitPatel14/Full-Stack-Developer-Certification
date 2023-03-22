import { useEffect,useState } from 'react';
import request from './Services/api-requests'
import Country from './Components/Country';
import CountryList from './Components/CountryList';
// everytime when you start your application you have to use this line
// ($env:REACT_APP_API_KEY="36def0c4313248fcbfd3ac0f7a459059") -and (npm start)


function App() {
  const [filter, setFilter] = useState((''))
  const [data, setData] = useState([])
  const [lat, setLat] = useState([])
  const [long, setLong] = useState([])
  const [weatherData, setWeatherData] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {request.getAll().then(res => setData(res))},[])
  useEffect(() => { if(filter) if(filterData().length === 1) setCountry(filterData()) }, [filter])

  useEffect(() => {
    const fetchData = async () => {if(lat.length === 1 && long.length === 1) request.getWeather(lat[0],long[0]).then(res => setWeatherData(res))}
    fetchData(); 
  },[lat, long])

  useEffect(() => {
    if(country){
      setLat([].concat(country[0].capitalInfo.latlng[0]))
      setLong([].concat(country[0].capitalInfo.latlng[1]))  }
  },[country])

  const handlingFilter = (event) => {setFilter(event.target.value)}
  const filterData = () => data.filter(value => value.name.common.match(new RegExp(filter, "i")));
  const changeData = entry => {
    const value = data.filter(value => value === entry)
    setFilter(value[0].name.common)
  }

  return(
    <div>
      <p>find countries <input  value={filter} onChange={handlingFilter} /></p>
      {filterData().length > 10 ? "Too many requests, use another filter" : 
       filterData().length === 1 ? <Country country={country !== null ? country : ""} weather={typeof weatherData.main !== 'undefined' ? weatherData : ""}/> 
       : filterData().map(country => <CountryList key={country.name.common} country={country} showData={() => changeData(country)} /> ) }
      </div>
  )
}
export default App;

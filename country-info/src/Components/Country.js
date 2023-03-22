const Country = ({country, weather}) => {
    if(typeof country[0] !== 'undefined' && typeof weather.main !== 'undefined') {
    return(
        <div key={country[0].cca2}>
        <h1>{country[0].name.common}</h1>
        <p>capital {country[0].capital}</p>
        <p>area {country[0].area}</p>
        <h5>Languages:</h5>
        <ul>
          {Object.keys(country[0].languages).map(lang => <li key={lang}>{country[0].languages[lang]}</li>)}
        </ul>
        <img src={country[0].flags.png} alt={country[0].flags.alt}/>
        <h1>Weather in {country[0].capital}</h1>
        <p>temperature {(weather?.main?.temp-273.15).toFixed(2)} Celcius</p>
        <img src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}.png`} 
        alt={weather?.weather?.description} />
        <p>wind {weather?.wind?.speed} m/s</p>
      </div>
    )
  } 
}
export default Country
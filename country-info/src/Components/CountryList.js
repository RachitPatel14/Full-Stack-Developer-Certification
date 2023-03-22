const CountryList = ({key,country, showData}) => {
    return(
        <li key={key}>
            {country.name.common} <button onClick={showData} type="button">show</button>
        </li>
    )
}

export default CountryList
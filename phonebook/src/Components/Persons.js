const Persons = (props) => {
    return(
      <li>
        {props.person.name} {props.person.number} <button onClick={props.deleteRecord}>delete</button>
      </li>
    )
  }
export default Persons
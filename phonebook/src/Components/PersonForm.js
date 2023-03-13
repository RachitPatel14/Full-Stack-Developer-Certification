const PersonForm = (props) => {
    return (
      <>
      <form onSubmit={props.addNameMethod}>
          <div>
            name: <input value={props.newName} 
            onChange={props.nameMethod}/>
          </div>
          <div>
              number: <input value={props.newNumber}
              onChange={props.numberMethod}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </>
    )
  }
  export default PersonForm
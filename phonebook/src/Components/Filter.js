const Filter = (props) => {
    return (
    <>
    <p>fitler shown with <input value={props.filter}
        onChange={props.method} /></p>
    </>
    )
  }
export default Filter
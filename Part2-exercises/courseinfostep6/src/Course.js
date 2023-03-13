const Course = (props) => {
    const part = props.course.map(cour => cour.parts)
    console.log(part.map(part => part.map(pt => pt.exercises).reduce((s,p) => {return s+p})))
    return(
      <div >
        <h1>Web development curriculum</h1>
        { props.course.map(cour => {
          
          return (
            <div key={cour.id}>
            <h2>{cour.name}</h2>
            {
              cour.parts.map((part) => {
                return (
                  <div key={part.id}>
                    <p>{part.name} {part.exercises}</p>
                  </div>
                )
              })
            }
            <h4>total of {
              cour.parts.map((part) => part.exercises).reduce((s,p) => s+p)
            } exercises</h4>
            </div>
          )
        }
        )
        }
        
      </div>
    )
  }
  export default Course
/* Now we use React to know more about Component state, event handlers */
// basic app.js
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

/// Component helper functions
const bornYear = () => {    const yearNow = new Date().getFullYear()    return yearNow - props.age  }

/* Now we use destructuring so we can replace the multiple use of props.name and props.age */

//Like this
const name = props.name
const age =  props.age

//the helper function like this
const bornYear = () => new Date().getFullYear() - age

// Or may be like this
const {name, age} = props
//Or we can assign those variables name on the function like this
const Hello = ({name, age}) => {
	return()
}

/* Page re-rendering */
/* const App = (props) => {
	  const {counter} = props
	  return (
	    <div>{counter}</div>
	  )
	}

	export default App */
// As the above is return as React file
// here we made a counter variable and putting in a div
// This is the index.js file only the needed part

/*
	let counter = 1

ReactDOM.createRoot(document.getElementById('root')).render(
  <App counter={counter} /> */

  // But if we add any value to counter after that then it will not render.
// So we made a function to reuse multiple times
/* const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App counter={counter} />
  )
}

refresh()
counter += 1 */

// but the change will be unnoticable so we put an interval between the re-rendering like this

/* setInterval(() => {
  refresh()
  counter += 1
}, 1000) */
	
// Next we will introduce a better way to do re-rendering.

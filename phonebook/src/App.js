import { useState, useEffect } from 'react'
import personsServices from './Services/persons'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import Notification from './Components/Notification'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => 
  {
    personsServices
          .getAll()
          .then( res => { setPersons(res)})
  }, []);

  const deleteRecord = person => 
  {
    console.log(person)
    if(window.confirm(`Delete ${person.name}`))
    { 
      personsServices
      .deletePhoneRecord(person.id)
      .then(res => 
        {
          setErrorMessage(`Deleted "${person.name}" successfully`)
          setTimeout(() => {setErrorMessage(null)},5000)
        })
    }
    personsServices.getAll().then( res => setPersons(res))
  }

  const addName = (event) => 
  {
    event.preventDefault()
    if(persons.map(person => person.name).includes(newName)) 
      { 
        const record = persons.find(p => p.name === newName)
        const changedRecord = {...record, number: newNumber}
        if(window.confirm(`${newName} is already added to your phonebook, replace the old number with a new one?`))
        {
            personsServices.update(changedRecord.id, changedRecord)
                           .then(res => 
                            {
                              setPersons(persons.map(p => p.id !== changedRecord.id ? p : res))
                              setErrorMessage(`Added new number to '${changedRecord.name}'`)
                              setTimeout(() => {setErrorMessage(null)}, 5000)
                           })
                           .catch(error => {
                            setErrorMessage(`Information on ${changedRecord.name} has already been removed from server`)
                            setTimeout(() => {setErrorMessage(null)},5000)
                            personsServices.getAll().then(res => setPersons(res))
                           })
        }
      }
    else
    {
        const nameObject = {
          name: newName,
          number: newNumber,
        } 
        personsServices.create(nameObject)
             .then(res => {
              setPersons(persons.concat(res))
              setNewName('')
              setNewNumber('')
              setErrorMessage(`Added ${res.name} to the list`)
              setTimeout( () => {setErrorMessage(null)},5000)
              }) 
      }
    }

  const handleNewNumber = (event) => { setNewNumber(event.target.value) }
  const handleNewName = (event) => { setNewName(event.target.value) }
  const handleFilter = (event) => { setFilter(event.target.value) } 
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Filter filter={filter} method = {handleFilter}/>
      <h3>Add a new</h3>
      <PersonForm addNameMethod={addName} newName={newName} newNumber={newNumber} numberMethod={handleNewNumber}  nameMethod={handleNewName}/>
      <h2>Numbers</h2>
        {persons.filter(person => person.name.match(new RegExp(filter,"i"))).map(person => {
          return(
            <Persons key= {person.id} person={person} deleteRecord={() => deleteRecord(person)}/>
          )
        })} 
        
    </div>
  )
}

export default App
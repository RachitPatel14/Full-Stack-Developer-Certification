/* Functions - In ES6 we use arrows to decalare a function */
const sum = (p1, p2) => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
} // basic declaration

const result = sum(1, 5)
console.log(result) // this how we can use it.

// Function with a single parameter
const square = p => {
  console.log(p)
  return p * p
}

// Function contain only a single expression
const square = p => p * p

// This way become handy when using map function.
const t = [1,2,3,4]
const tSquared = t.map(p => p * p)

/* Object method and this - Arrow functions and functions defined using the function keyword vary substantially when it comes to how they behave with respect to the keyword this, which refers to the object itself. */

const arto = {
name: 'Arto Hellas',
age: 35,
education: 'PhD',
greet: function() {    console.log('hello, my name is ' + this.name) 
},
doAddition: function(a, b) {    console.log(a + b)  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed

// Methods can be assigned even after the creation of the object: 

arto.growOlder = function() {
this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed

// Let use the modify the oject 
arto.doAddition(1,4) // 5 is printed

const referenceToAddition = arto.doAddition
referenceToAddition(10,15) // 25 is printed

// We can not use the reference in the greet method because the this keyword will not able to get the value as it will become global object and the end result is often not what the soft dev has originally intended.

//One situation leading to the "disappearance" of this arises when we set a timeout to call the greet function on the arto object, using the setTimeout function.

setTimeout(arto.greet, 1000)

// As the value of this in JS is defined based on how the method is being called. 
// Or we can bind the object to only arto like this 
setTimeout(arto.greet.bind(arto), 1000)
//Calling arto.greet.bind(arto) creates a new function where this is bound to point to Arto, independent of where and how the method is being called.

/* Classes in JS which can be used for object oriented but it does not have the full exxtend of OOP */

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name)
  }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Garnbret', 23)
janja.greet()

// As we are using the new Hooks feature of React so we have no concrete use for JS class syntax.

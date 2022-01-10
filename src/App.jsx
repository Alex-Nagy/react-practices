import { useState } from "react"

// variables
const myName = "Alex" 
let myNum = 7
let myBool = true

let myArray = [ 1, 2, 3, "Bela", true, false, "Kazmer" ]

let person = {
  name: "bela",
  age: 20
}

// loops in js
let people = [
  { name: "Béla", age: 40 },
  { name: "Lajos", age: 20 },
  { name: "Kázmér", age: 17 },
  { name: "Ottó", age: 120 },
  { name: "Bodri", age: 24 },
]
// conditional rendering
// operators


const App = () => {

  let [ isShown, setShouldShow ] = useState(false)

  const myToggleFunction = () => {
    setShouldShow(!isShown)
  }

  const [counter, setCounter] = useState(1)

  const myIncrementFunction = () => {
    setCounter(counter+1)
  }
  
  return (
    <div className="App">

      <button onClick={myToggleFunction}>Toggle</button>

      <p>Counter value: {counter}</p>
      <button onClick={myIncrementFunction}>Increment</button>

      <h1>Hello world!!!!</h1>
      <p>{ myName }</p>
      <p>{ myNum * 3}</p>
      <p>{ myBool.toString() }</p>
      <p>{ myArray }</p>
      <p>Név: { person.name } ({ person.age })</p>
      <p id="first">First paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input type="password" placeholder="Ide írj!" />
    

    {
      people.map(p => (
        <div className="card" key={p.name}>
          <p className="card-content">{ p.age < 18 ? "****" : p.name }</p>
          <p>Some other content</p>
        </div>
        )
      )
    }
  </div>
  );
}

export default App;

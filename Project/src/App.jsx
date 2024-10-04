import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  let [counter , setCounter] = useState(5)

  // let counter = 5;

  const addvalue = () => {
    console.log("clicked",counter);
    counter = counter + 1;
    setCounter(counter)
  }

  const decvalue = () => {
    counter = counter - 1;
    setCounter(counter)
    if (counter < 0)
    {
      setCounter(0)
    }
  }

  const del = () => {
    setCounter(0)
  }

  return (
    <>
      <h1> Starts Project </h1>
      <h2> Counter value : {counter}</h2>
      {/* <h2>{pov}</h2> */}
      
      <button
      onClick={addvalue}
      >add</button>
      <button
      onClick={decvalue}>Remove</button>

      <br/>

      <button
      onClick={del}>delete</button>
    </>
  )
}

export default App

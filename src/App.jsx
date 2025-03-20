import { useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const counterInitialState = 0

const counterReducer = (state, action) => {
  switch (action) {
    case "Add":
      return state + 1;  // we shoud to return
    case "Minus":
      return state - 1;
    case "Reset":
      return counterInitialState
    default:
      break;
  }
}



function App() {

  const [count, countDispatch] = useReducer(counterReducer, counterInitialState)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => countDispatch("Add")}>
          Add
        </button>

        <button onClick={() => countDispatch("Minus")}>
          Minus
        </button>
        <button onClick={() => countDispatch("Reset")}>
          Reseat
        </button>
</div>
      </>
      )
}

      export default App

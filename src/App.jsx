import { useState, useEffect, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const counterInitialState = {
  number: 0,
  subject: ["react", "angular", "vue"]
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return {
        ...state,
        number: state.number + 1
      }
    case "Minus":
      return {
        ...state,
        number: state.number - action.payload
      }
    case "Reset":
      return counterInitialState
    case "AddSubject":
      return {
        ...state,
        subject: [...state.subject, action.payload]
      }
      case "ErrorAPI":
        return {
          ...state,
          error: action.payload
        }
    default:
      return state;
  }
}



function App() {

  const [count, countDispatch] = useReducer(counterReducer, counterInitialState)

  console.log("Count is ", count)

  useEffect(() => {
    fetch("https://jsonplaceholder.typ2icode.com/posts/1")
      .then(response => response.json())
      .catch(error => countDispatch({type:"ErrorAPI",payload:error.message}))
  }, [])

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
      <h1>{count.number}</h1>
      {count.error && <p>{count.error}</p>}
      <ul>
          {
            count.subject?.map(subject => <li key={subject}>{subject}</li>)
          }
      </ul>

      <div className="card">
        <button onClick={() => countDispatch({type:"Add"})}>
          Add
        </button>

        <button onClick={() => countDispatch({type:"AddSubject",payload:"node"})}>
          Add Subject
        </button>

        <button onClick={() => countDispatch({type:"Minus",payload:2})}>
          Minus
        </button>
        <button onClick={() => countDispatch({type:"Reset"})}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App

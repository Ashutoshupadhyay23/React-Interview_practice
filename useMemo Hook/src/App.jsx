import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(100)

  const squaredValue = () => {
    return counter * counter;
  }

  const memoisedSquareValue = useMemo(squaredValue, [counter]);


  return (
    <div className='app'>
      <h2>Counter: {counter} </h2>
      <h2>Squared Counter: {memoisedSquareValue} </h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment
      </button>

      <h2>Counter: {counter2} </h2>
      <button onClick={() => setCounter2(counter2 - 1)}>
        Decrement
      </button>
    </div>
  )
}

export default App

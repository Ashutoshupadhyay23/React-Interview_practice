import { useState } from 'react'
import './App.css'
import { useMemo } from 'react'
import useCustomMemo from './hoooks/useCustomMemo'

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(100)

  const squaredValue = () => {
    console.log('Expensive Calculation...')
    return counter * counter;
  }

  const memoisedSquareValue = useCustomMemo(squaredValue, [counter]);


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

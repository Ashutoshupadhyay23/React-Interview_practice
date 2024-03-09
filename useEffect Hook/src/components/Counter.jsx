import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        console.log('useEffect triggered', count);
    }, [])

    console.log('rendered')

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
        <h1>Counter: {count} </h1>
        <button onClick={increment}> Increment </button>
        <button onClick={decrement}> Decrement </button>
    </div>
  )
}

export default Counter
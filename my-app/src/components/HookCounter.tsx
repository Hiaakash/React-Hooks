import React, { useState } from 'react'

const HookCounter = () => {
  const initialCount = 0

  const [count, setCount] = useState(initialCount)

  const incrementCount = () => {
    setCount(prevState => prevState + 1)
  }
  const decrementCount = () => {
    setCount(prevState => prevState - 1)
  }
  return (
    <div><h1>HookCounter</h1>
    <div><button onClick={incrementCount}>IncrementCount {count}</button></div>
    <div><button onClick={decrementCount}>DecrementCount {count}</button></div>
    <div><button onClick={() => setCount(initialCount)}>Reset {count}</button></div>
    </div>
  )
}

export default HookCounter

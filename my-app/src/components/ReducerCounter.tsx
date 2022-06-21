import React, { useReducer } from 'react'
const initialState : number = 0
const reducer = (state:number ,action: string) =>{
  switch (action) {
    case 'increment':
      return state +1
    case 'decerement':
      return state -1
    case 'reset':
      return initialState
    default:
      return state
  }

}
const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div> <h1>ReducerCounter</h1>
    <div>Count - { state }</div>
      <div style={{display: "inline-block"}}><button onClick={()=> dispatch('increment')}> INCREMENT </button> </div>
      <div style={{display: "inline-block"}}> <button  onClick={()=> dispatch('decerement')}> DECEREMENT </button></div>
      <div style={{display: "inline-block"}}> <button onClick={()=> dispatch('reset')}> RESET </button></div>
    </div>
  )
}

export default ReducerCounter

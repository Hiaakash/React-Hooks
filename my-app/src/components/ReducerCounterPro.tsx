import React, { useReducer } from 'react'

interface stateObject {
  firstCounter:number,
  secondCounter:number
}
interface actionType {
  Type: string,
  value: number
}
const initialState: stateObject = {
firstCounter : 0,
secondCounter: 10
}
const reducer = (state: stateObject,action: actionType) =>{
  switch (action.Type) {
    case 'increment':
      return {
        ...state, firstCounter: state.firstCounter  + action.value
            }
    case 'decerement':
      return {
        ...state, firstCounter: state.firstCounter - action.value
            }
    case 'increment2':
      return  {
        ...state, secondCounter : state.secondCounter + action.value
            }
    case 'decerement2':
      return {
        ...state, secondCounter : state.secondCounter - action.value
            }
    case 'reset':
      return initialState
    default:
      return state
  }

}
const ReducerCounterPro = () => {
  const [state , dispatch] = useReducer(reducer, initialState)
  return (
    <div> <h1>ReducerCounter</h1>
    <div>Counter A - { state.firstCounter }</div>
    <div>Counter B - { state.secondCounter }</div>
      <div style={{display: "inline"}}><button onClick={()=> dispatch({Type: 'increment', value: 1})}> INCREMENT A</button> </div>
      <div style={{display: "inline"}}> <button  onClick={()=> dispatch({Type: 'decerement', value : 1})}> DECEREMENT A</button></div>

      <div style={{display: "inline"}}><button onClick={()=> dispatch({Type: 'increment2', value: 2})}> INCREMENT B</button> </div>
      <div style={{display: "inline"}}> <button  onClick={()=> dispatch({Type: 'decerement2',value: 2})}> DECEREMENT B</button></div>

      <div style={{display: "inline"}}> <button onClick={()=> dispatch({Type: 'reset', value : 0})}> RESET ALL</button></div>
    </div>
  )
}


export default ReducerCounterPro

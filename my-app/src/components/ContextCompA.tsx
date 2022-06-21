import React from 'react'
import ContextCompB from './ContextCompB'
export const nameCon = React.createContext({})
const ContextCompA = () => {
  return (
    <nameCon.Provider value = {'Aakash'} >
    <div> ContextCompA <ContextCompB /> </div>
    </nameCon.Provider>
  )
}

export default ContextCompA

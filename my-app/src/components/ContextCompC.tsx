import React, { useContext } from 'react'
import { nameCon } from './ContextCompA'

const ContextCompC = () => {
  const name = useContext(nameCon)
  return (
    <div>
    <div> { `ContextCompC ${name}`}</div>

</div>
  )
}

export default ContextCompC

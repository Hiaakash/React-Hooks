import React from 'react'
import ChildComp from './ChildComp'

type Props = {}

const ParentComp = (props: Props) => {
  const inputRef = React.createRef<HTMLInputElement>()
  const  handleInputFocus = () =>{
    inputRef.current?.focus()

  }
  return (
    <div><h1>Parent Component</h1>
    <ChildComp ref={inputRef}/>
    <button onClick={handleInputFocus}>FocusInput</button>
    </div>
  )
}

export default ParentComp

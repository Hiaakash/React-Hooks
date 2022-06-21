import React,{useRef,useEffect} from 'react'

const RefInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus()
  },[])

  return (
    <div><h1>REF HOOK</h1>
    <input type="text" ref={inputRef}  />
    </div>
  )
}

export default RefInput

import React,{useEffect, useRef, useState} from 'react'

type Props = {}

const FunctTimer = (props: Props) => {
  const [timer, setTimer] = useState(0)
  const intervalRef = useRef<NodeJS.Timer>()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevState => prevState +1)
    },1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <div><h1>FunctTimer</h1>
    <div>Timer - {timer}</div>
    <div><button onClick={ () => clearInterval(intervalRef.current)}>Clear</button></div>
    </div>
  )
}

export default FunctTimer

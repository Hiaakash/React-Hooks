import React,{useMemo, useState} from 'react'

const MemoCounter = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = ( ) =>{
    setCount1(count1+1)
  }
  const increment2 = () =>{
    setCount2(count2+1)
  }
  const isEven = useMemo( ( ) =>{
    let start = new Date().getTime()
    let i = 0
    while(i < 3000000000){
      i++;
    }
    let end = new Date().getTime() - start
    console.log("EXECUTION TIME ",end)
    return count1%2 === 0
  },[count1])

  return (
    <div><h1>MemoCounter </h1>
    <div><button onClick={ increment1}>Count-1 - {count1}</button> {isEven ? "EVEN" : "ODD"}  </div>
    <div><button onClick={ increment2}> Count-2 - {count2}</button></div>
    </div>
  )
}

export default MemoCounter

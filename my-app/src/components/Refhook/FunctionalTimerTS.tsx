import React from 'react'

type Props = {}

const FunctionalTimerTS = (props: Props) => {
  const callback = (counter: number) => {
    console.log(counter)
    return counter < 5
  }
  const startTimer = (callback: (counter: number) => boolean,interval :number) =>{
    let initialCounter: number = 1

      let intervalMain = setInterval(() => {
        let stopTimer = callback(initialCounter)
        if(!stopTimer){
          clearInterval(intervalMain)
        }else{
          initialCounter++;
        }
      },interval)

  }

  startTimer(callback,50)

  return (
    <div><h1>FunctionalTimerTS</h1></div>
  )
}

export default FunctionalTimerTS

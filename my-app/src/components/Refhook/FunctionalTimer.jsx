import React from 'react'

const FunctionalTimer = () => {
const callback = (counter) => {
    console.log(counter)
    return counter < 5
  }
const startTimer = (callback,interval) =>{
  let initialCounter = 1

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
    <div><h1>FunctionalTimer</h1></div>
  )
}

export default FunctionalTimer

import React, { Component } from 'react'

type TimerState = {
  timer: number
}
export class ClassTimer extends Component<{},TimerState> {
  interval: any
    state = {
       timer: 0
    }

  setTimer = () => {
      this.interval = setInterval (() => {
        this.setState((prevState) => ({timer: prevState.timer + 1}))
      },1000)
}

componentDidMount = () =>{
  this.setTimer()
}

componentWillUnmount = () =>{
  clearInterval(this.interval)
}


  render() {
    return (
      <div><h1>ClassTimer</h1>
      <div>Timer - {this.state.timer}</div>
      <button onClick={ () => clearInterval(this.interval)}>Clear</button>
      </div>
    )
  }
}

export default ClassTimer

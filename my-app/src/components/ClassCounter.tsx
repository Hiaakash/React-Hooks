import React, { Component } from 'react'

type CounterState = {
  count: number
}

class ClassCounter extends Component <{},CounterState> {


  state = {
     count: 0,
  }
  // this.incrementCount = this.incrementCount.bind(this)

incrementCount =  () => {

  this.setState((prevState) => ({count: prevState.count +1})
  )
}

  render() {
    return (
      <div><h1>ClassCounter</h1>
      <div><button onClick={this.incrementCount}>Count {this.state.count}</button></div>
      </div>
    )
  }
}

export default ClassCounter

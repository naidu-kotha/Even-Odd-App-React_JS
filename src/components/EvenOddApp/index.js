// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  incrementCount = () => {
    const number = Math.round(Math.random() * 100, 0)
    this.setState(prevState => ({number: prevState.number + number}))
  }

  render() {
    const {number} = this.state

    const type = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">
            Count <span>{number}</span>
          </h1>
          <p className="num-type">Count is {type}</p>
          <button type="button" onClick={this.incrementCount}>
            Increment
          </button>
          <p className="hint">*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

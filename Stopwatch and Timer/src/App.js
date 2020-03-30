import React from 'react';
import uuid1 from 'uuid/v4';
import StopWatch from './components/Stopwatch';
import Timer from './components/Timer'

import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      timer: null,
      stop: false,
      stopTimer: false,
      stopWatch: true
    }
  }
  handleStart = () => {
    if (!this.state.stop) {
      this.setState({
        stop: true
      })
    }

    this.gogo = setInterval(() => {
      if (this.state.millisecond === 100) {
        this.setState({
          millisecond: 0,
          second: this.state.second + 1
        })
      }
      if (this.state.second === 60) {
        this.setState({
          second: 0,
          minute: this.state.minute + 1
        })
      }
      if (this.state.minute === 60) {
        this.setState({
          minute: 0,
          hour: this.state.hour + 1
        })
      }

      this.setState({
        millisecond: this.state.millisecond + 1
      })
    }, 10)

  }

  handleStop = () => {
    if (this.state.stop) {
      this.setState({
        stop: false
      })
    }
    clearInterval(this.gogo)

  }
  handleReset = () => {
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      TimerResetValue: 0
    })
  }
  handleTimerInput = (e) => {
    this.handleStopTimer()
    let timerValue = Number(e.target.value)
    setTimeout(() => {
      this.setState({
        Timer: timerValue,
        TimerResetValue: timerValue
      })
    }, 250)
  }

  handleStartTimer = () => {
    if (!this.state.stopTimer) {
      this.setState({
        stopTimer: true
      })
    }
    if (this.state.Timer >= 0) {
      this.gogoTimer = setInterval(() => {
        this.setState({
          Timer: this.state.Timer - 1
        })
      }, 1000)
    }
  }

  componentDidUpdate() {
    if (this.state.Timer === 0) {
      this.handleStopTimer()
    }

    if (document.getElementById("toZeroSec")) {
      if (this.state.Timer <= 3 && this.state.Timer >= 0) {
        document.getElementById("toZeroSec").style.color = "red"
      }
    }
    // if(this.state.Timer<=3 && this.state.Timer >=0){
    //   document.getElementById("toZeroSec").style.color="red"}

  }

  handleStopTimer = () => {
    if (this.state.stopTimer) {
      this.setState({
        stopTimer: false
      })
    }
    clearInterval(this.gogoTimer)

  }
  handleResetTimer = (e) => {
    this.handleStopTimer()
    this.setState({
      Timer: this.state.TimerResetValue
    })
  }

  handleStopWatch = () => {
    this.handleStopTimer()
    this.setState({
      stopWatch: true
    })
  }

  handleStopWatchOpp = () => {
    this.setState({
      stopWatch: false
    })
  }


  render() {
    return (
      <div >
        <div>
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a onClick={this.handleStopWatch} className="nav-link active" data-toggle="tab" href="#xStopwatch">StopWatch <span role="img" aria-label="StopWatch">⏱️</span></a>

            </li>
            <li className="nav-item">
              <a onClick={this.handleStopWatchOpp} className="nav-link" data-toggle="tab" href="#xTimer">Timer <span role="img" aria-label="Timer">⌛</span></a>
            </li>
          </ul>
        </div>



        {(this.state.stopWatch) ? <div id="xStopwatch" className="col-lg-3 col-sm-5 col-md-4">
          <StopWatch key={uuid1()} hours={this.state.hour} minutes={this.state.minute} seconds={this.state.second} milliseconds={this.state.millisecond} />
          {(this.state.stop) ? 
          <button onClick={this.handleStop} type="button" className="btn btn-primary ml-4">Stop</button>
           : <button onClick={this.handleStart} type="button" className="btn btn-primary ml-4">Start</button>}
          <button onClick={this.handleReset} type="button" className="ml-1 btn btn-outline-primary">Reset</button></div> 
           : <div id="xTimer" className="col-lg-2 col-sm-4 col-md-4">

            <Timer key={uuid1()} inputfunction={this.handleTimerInput} TimerX={this.state.Timer} />

            {(this.state.stopTimer) ? 
            <button onClick={this.handleStopTimer} type="button" className="btn btn-primary ml-4">Stop</button> 
            : <button onClick={this.handleStartTimer} type="button" className="btn btn-primary ml-4">Start</button>}
            <button onClick={this.handleResetTimer} type="button" className="ml-1 btn btn-outline-primary">Reset</button>
          </div>}

      </div>
    )
  }
}

export default App;
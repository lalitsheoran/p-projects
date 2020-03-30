import React from 'react';
class Timer extends React.Component {
    render() {
        return (
            <div className="mt-3">
                <input onChange={this.props.inputfunction} type="number" placeholder="Enter Seconds here !" className="input" />
                {(this.props.TimerX != null) ? <div className="row"> <p id="toZeroSec" className="text-center ml-3 p-0 mr-0 text-center col-sm display-3">{this.props.TimerX}<span className="mt-5 h5 text-muted"> seconds</span></p> </div> : <p></p>}
            </div>
        )
    }
}

export default Timer;

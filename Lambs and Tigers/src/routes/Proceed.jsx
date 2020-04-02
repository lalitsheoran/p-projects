import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { opponent } from '../redux/gameDetails/actions'


class Proceed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opponent:"Opponent"
    };
  }
  handleInput=(e)=>{
    this.setState({
      opponent:e.target.value
    })
  }
  handleProceed=()=>{
    this.props.opponentx(this.state.opponent)
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="p-3 text-center text-white">Game Info</h1>
        <div className="container p-5">
          <div className="d-flex justify-content-between">
              <div>
              <img src="/images/lambplay.svg" alt="lamb" />
    <p className="h3 text-center text-white py-2">{this.props.player1}</p>
              </div>
              <div>
              <img src="/images/tigerplay.svg" alt="tiger" />
              {this.props.game_modex=="Vs_Computer" ? <p className="h3 text-center text-white py-2">Computer</p> : <p className="h3 text-center text-white py-2">{this.state.opponent}</p>}
              </div>
          </div>
          <div className="text-center ">
            {this.props.game_modex=="Vs_Computer" ? <Link to="/game"><button onClick={this.handleProceed} className="btn btn-light text-danger px-4"><p className="h1">Proceed</p></button></Link> : <Link to="/localgame"><button onClick={this.handleProceed} className="btn btn-light text-danger px-4"><p className="h1">Proceed</p></button></Link> }
            {this.props.game_modex=="Vs_Computer" ? <></> : <input onChange={this.handleInput}  className="form-control col-3 mx-auto my-5 text-dark py-2" type="text"  placeholder="Insert your opponent's name"/>}
          </div>
        </div>
        {!this.props.isAuth && <Redirect to="/login" />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  game_modex:state.gameDetailsReducer.game_mode,
  player1:state.authReducer.userInfo.displayName,
  isAuth:state.authReducer.isAuth
})

const mapDispatchToProps =dispatch=> ({
  opponentx:(value)=>dispatch(opponent(value))
})


export default connect(mapStateToProps,mapDispatchToProps)(Proceed);

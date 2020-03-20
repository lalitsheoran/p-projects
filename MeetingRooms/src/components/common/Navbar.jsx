import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-light bg-light justify-content-between  ">
        <Link className="ml-3 navbar-brand" to="/">
         Home
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse " id="navbarSupportedContent">
          <span>{(!this.props.islogged) ? <Link to="/login"><p className="text-danger mt-3 ml-3">Bookings</p></Link>:<Link to="bookings"><p className="text-success mt-3 ml-3">Bookings</p></Link>}</span>
          <span className="mx-3 text-muted">Book meeting rooms</span>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  islogged:state.LoggedIn
})

export default connect(mapStateToProps,null)(Navbar)
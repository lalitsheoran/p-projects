import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { logoutUser } from "../redux/authentication/actions";
import firebase from "firebase";

class Welcome extends Component {
  logOutButton = () => {
    this.props.logout();
  };

  render() {
    const {displayName, photoUrl, email} = this.props.userInfo
    const { isAuth } = this.props;
    if (!isAuth) {
      return <Redirect to="/login" />;}
      else{
        return (
          <div className="text-white text-center">
            <div className="display-3 p-5">
              Welcome {displayName}
            </div>
            <div className="d-flex justify-content-center p-5">
              <Link to="/mode">
                <button type="button" className="btn-lg btn-success px-5 p-3">
                  LETS PLAY
                </button>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-lg btn-danger" onClick={this.logOutButton}>
                LOGOUT
              </button>
            </div>
          </div>
        );
      }
  
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  userInfo : state.authReducer.userInfo
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

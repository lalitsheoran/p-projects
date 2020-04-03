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
                <button style={{cursor:"pointer"}} type="button" className="btn-lg btn-success px-5 p-3">
                  LETS PLAY
                </button>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <button style={{cursor:"pointer"}} className="btn btn-lg btn-danger" onClick={this.logOutButton}>
                LOGOUT
              </button>
            </div>
            {!this.props.isAuth && <Redirect to="/login" />}

          </div>
        );
      }
  
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth,
  userInfo : state.authReducer.userInfo,
  isAuth:state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);

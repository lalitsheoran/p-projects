import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    const { displayName, photoURL, email } = this.props.userInfo;
    //console.log(displayName, photoURL, email);
    return (
      <div className="text-white">
        <div className="display-3 p-5 text-center">USER PROFILE</div>
        <div className="d-flex align-items-center flex-column ">
          <img src={photoURL} alt="profile" height="200px" width="200px" />
          <div className="p-5">
            <h3> Name : {displayName}</h3>
            <h3> Email : {email}</h3>
          </div>
          <Link to="/mode">
            <button className="btn btn-lg btn-success">GO Back</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userInfo: state.authReducer.userInfo
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

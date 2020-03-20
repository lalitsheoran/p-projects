/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import styles from "./NavBarPublic.module.css";

class NavBar extends React.Component{
constructor(props){
  super(props)
}
  render(){
    return (
      <div className={`d-flex justify-content-between ${styles.navlink}`}>
        <div>
          <Link to="/">Home</Link>
        </div>
  
        <div>
          <Link className="mx-3" to="/login">
            {this.props.isLogged ? <>Logged In</> : <>Login</>}
          </Link>
          {!this.props.isLogged ? <Link className="mx-3" to="/register">
            Register
          </Link> : <Link className="mx-3" to="/profile">
            Profile
          </Link>}
          
          <Link className="mx-3" to="/about">
            About
          </Link>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  isLogged:state.authReducer.isAuth
})

export default connect(mapStateToProps,null)(NavBar)

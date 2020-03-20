import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {login} from './action'


class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:"",
      password:""
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleLogin=()=>{
    let obj=JSON.stringify(this.state)
    console.log(this.state)
    this.props.login(obj)
    console.log(this.props.islogged)
  }
  render() {
    // if(this.props.loggedin){
    //     return(
    //         <div>
    //           <p className="text-center mt-5 h3">You are logged in, proceed to <Link exact to="/categories"><span className="text-primary">categories</span></Link></p>
    //         <p className="text-center mt-5"><Button
    //         className="m-1 col-3 py-2"
    //         variant="contained"
    //         color="secondary"
    //         onClick={this.props.handleLogout}
    //       >
    //         Logout
    //       </Button></p>
    //         </div>
    //         )

    // }



    // else{
        return (
            <div className="text-center d-flex flex-column col-md-5 col-sm-7 col-8 col-lg-3 mt-5 mx-auto p-4 shadow-lg">
              <p className="row mb-5 text-center mx-auto h5">Kindly login to continue</p>
              <TextField className="m-1" variant="outlined" label="Username" id="iUsername"onChange={this.handleChange} name="username" />
              <TextField
                className="m-1"
                variant="outlined"
                type="password"
                label="Password"
                id="iPassword"
                name="password"
                onChange={this.handleChange}
              />
              
                <p className="text-center">
                <Button
                  className="m-1 col-8 py-2"
                  variant="contained"
                  color="primary"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
                </p>
            </div>
  
          );
    }
  }
 const mapStateToProps = state => {
   return {
     islogged:state.LoggedIn
   }
 }

 const mapDispatchToProps = dispatch => {
   return {
     login: (value)=>dispatch(login(value))
   }
 }


  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
  

import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"

export default class Login extends React.Component {

  render(props) {
    if(this.props.loggedin){
        return(
            <p className="text-center mt-5 h3">You are logged in, proceed to <Link exact to="/products"><span className="text-primary">shopping</span></Link></p>
        )
    }
    else{
        return (
            <div className="text-center d-flex flex-column col-md-5 col-sm-7 col-8 col-lg-3 mt-5 mx-auto p-4 shadow-lg">
              <p className="row mb-5 text-center mx-auto h5">Kindly login before adding products to the cart</p>
              <TextField className="m-1" variant="outlined" label="Username" id="iUsername"onChange={this.props.handleChange} name="username" />
              <TextField
                className="m-1"
                variant="outlined"
                type="password"
                label="Password"
                id="iPassword"
                name="password"
                onChange={this.props.handleChange}
              />
              <p className="text-center mt-3">
                <Button
                  className="m-1 col-8 py-2"
                  variant="contained"
                  color="primary"
                  onClick={this.props.handleLogin}
                >
                  Login
                </Button>
              </p>
            </div>
          );
    }
  }
}

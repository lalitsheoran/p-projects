import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom"
import Switch from '@material-ui/core/Switch';


export default class Login extends React.Component {
  constructor(props){
    super(props)
    this.state={
      isAdmin:false
    }
  }
  handleSwitch=(e)=>{
    this.setState({
      isAdmin:!this.state.isAdmin
    })
    
  }
  componentDidMount(){
    console.log(this.state.isAdmin)

  }
  
  render() {
    if(this.props.loggedin && !this.state.isAdmin){
        return(
            <div>
              <p className="text-center mt-5 h3">You are logged in, proceed to <Link exact to="/categories"><span className="text-primary">categories</span></Link></p>
            <p className="text-center mt-5"><Button
            className="m-1 col-3 py-2"
            variant="contained"
            color="secondary"
            onClick={this.props.handleLogout}
          >
            Logout
          </Button></p>
            </div>
            )

    }

    else if(this.props.loggedin && this.state.isAdmin){
      return(
          <div>
            <p className="text-center mt-5 h3">You are logged in as Admin, proceed to <Link exact to="/admin"><span className="text-primary">admin page</span></Link></p>
          <p className="text-center mt-5"><Button
          className="m-1 col-3 py-2"
          variant="contained"
          color="secondary"
          onClick={this.props.handleLogout}
        >
          Logout
        </Button></p>
          </div>
          )

  }

    else{
        return (
            <div className="text-center d-flex flex-column col-md-5 col-sm-7 col-8 col-lg-3 mt-5 mx-auto p-4 shadow-lg">
              <p className="row mb-5 text-center mx-auto h5">Kindly login to continue</p>
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
              <p className="text-center mt-3">Admin
              <Switch ounchecked={this.state.giland} onClick={this.handleSwitch} />
                <Button
                  className="m-1 col-8 py-2"
                  variant="contained"
                  color="primary"
                  onClick={this.props.handleLogin}
                >
                  {(this.state.isAdmin)? <>Login as Admin</>:<>Login</>}
                </Button>
              </p>
            </div>
          );
    }
  }
}

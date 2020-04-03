import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./Login.module.css";
import { StyledFirebaseAuth } from "react-firebaseui";
import { connect } from "react-redux";
import firebase from "firebase";
import {
  loginUser,
  // logoutUser,
  loginUserSuccess
} from "./../redux/authentication/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      ready: false
    };
  }

  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handelSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  };

  componentDidMount() {
    const { isAuth } = this.props;
    if (!isAuth) {
      firebase.auth().onAuthStateChanged(user => {
        let userInfo = user;
        // console.log(user)
        this.setState(
          {
            ready: !!user
          },
          () => this.state.ready && this.props.directLogin(userInfo)
        );
      });
    }
  }

  render() {
    const { isAuth } = this.props;
    if (isAuth) {
      return <Redirect to="/welcome" />;
    } else {
      return (
        <>
          <div className={styles.headBackground}>
            <div className="display-4">
              <div className="text-center p-4 ">LOG IN</div>
            </div>
          </div>

          <div className={styles.bodyBackground}>
            <div className="d-flex justify-content-center p-5">
              <form onSubmit={this.handelSubmit} className="p-5">
                <div className="form-group">
                  <label htmlFor="email">EMAIL</label>
                  <input
                    value={this.state.email}
                    onChange={this.handelChange}
                    type="email"
                    className="form-control"
                    placeholder="EMAIL"
                    id="email"
                    required
                  />
                </div>

                <div className="form-group ">
                  <label htmlFor="password">PASSWORD</label>
                  <input
                    value={this.state.password}
                    onChange={this.handelChange}
                    type="password"
                    className="form-control"
                    placeholder="PASSWORD"
                    id="password"
                    required
                  />
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button
                    type="submit"
                    className={`btn btn-dark ${styles.btnOrange}`}
                  >
                    LOGIN
                  </button>
                </div>

                <div>
                  <StyledFirebaseAuth
                    uiConfig={this.uiConfig}
                    firebaseAuth={firebase.auth()}
                  />
                </div>

                <div className="d-flex justify-content-end mt-4">
                  <div className="mr-3 p-2">FIRST TIME USER</div>
                  <Link
                    className={`p-2 ${styles.headBackgroundSignup}`}
                    to="/register"
                  >
                    SIGNUP
                  </Link>
                  <div />
                </div>
              </form>
            </div>
          </div>
        </>
      );
    }
  }
}

const mapStateToProps = state => ({
  isAuth: state.authReducer.isAuth
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(loginUser(payload)),
  directLogin: payload => dispatch(loginUserSuccess(payload)),
  // logout: payload => dispatch(logoutUser(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
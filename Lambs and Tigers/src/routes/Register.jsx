import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import firebase from "firebase";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      fireError: "",
      logIn: false
    };
  }

  handelSubmit = e => {
    e.preventDefault();
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User created");
        let user = firebase.auth().currentUser;
        user
          .updateProfile({
            displayName: name,
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
          .then(function() {
            console.log("User created", firebase.auth().currentUser);
          })
          .catch(function(error) {
            alert(error.message)
            // console.log("Error occurred in updating profile");
          });
      })
      .catch(function(error) {
        console.log("User creation error");
      });
  };

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    // console.log(this.state);
    return (
      <>
        <div className={styles.headBackground}>
          <div className="display-4">
            <div className="text-center p-4 ">REGISTRATION</div>
          </div>
        </div>
        <div className={styles.bodyBackground}>
          <div className="d-flex justify-content-center p-5">
            <form onSubmit={this.handelSubmit} className="p-5">
              <div className="form-group">
                <label htmlFor="Name">NAME</label>
                <input
                  name="name"
                  value={this.state.name}
                  onChange={this.handelChange}
                  type="text"
                  className="form-control"
                  placeholder="NAME"
                />
              </div>

              <div className="form-group">
                <label htmlFor="Email">EMAIL</label>
                <input
                  name="email"
                  value={this.state.email}
                  onChange={this.handelChange}
                  type="email"
                  className="form-control"
                  placeholder="EMAIL"
                />
              </div>
              <div className="form-group ">
                <label htmlFor="Password">PASSWORD</label>
                <input
                  name="password"
                  value={this.state.password}
                  onChange={this.handelChange}
                  type="password"
                  className="form-control"
                  placeholder="PASSWORD"
                />
              </div>
              <div className="d-flex justify-content-center mt-5">
                <button
                  type="submit"
                  className={`btn btn-dark ${styles.btnOrange}`}
                >
                  REGISTER
                </button>
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center">
            <Link className={styles.btnOrange} to="/login">
              BACK TO LOG IN
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Register;

import React from "react";
import { Link } from "react-router-dom";
export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top shadow-lg navbar-expand-lg navbar-light bg-warning  ">
        <Link className="ml-3 navbar-brand" to="/">
          <img
            style={{ height: "40px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Car_with_Driver-Silhouette.svg/1221px-Car_with_Driver-Silhouette.svg.png"
            alt="logo"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div  className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mx-3" data-toggle="collapse" data-target=".nav-collapse.in">
              <Link className="nav-link mt-1" to="/" >
                Home
              </Link>
            </li>
            <li className="nav-item mx-3" data-toggle="collapse" data-target=".nav-collapse.in">
              <Link className="nav-link mt-1" to="/categories" >
                Categories
              </Link>
            </li>
           {(this.props.loggedin) ?  <li className="nav-item mx-3" data-toggle="collapse" data-target=".nav-collapse.in">
              <Link className="nav-link mt-1" to="/login" >
                Logged in
              </Link>
            </li>: <li className="nav-item mx-3" data-toggle="collapse" data-target=".nav-collapse.in">
              <Link className="nav-link mt-1" to="/login" >
                Login
              </Link>
            </li>}
          </ul>
        </div>
      </nav>
    );
  }
}

import React from "react";
import { Link, Redirect } from "react-router-dom";
// import Button from "@material-ui/core/Button";


export default class Categories extends React.Component {
  render() {
    if(this.props.loggedin){
        return (
            <div className="">
                <p className="text-center h3"m-1 >Select vehicle category</p>
                <div className="row mt-5">
                <div className="col-3 m-1 mx-auto">
                  <Link to="vehicles/?type=scooter"><img src="https://us.123rf.com/450wm/natchapohn/natchapohn1807/natchapohn180700006/104069016-stock-vector-motor-scooter-transportation-cartoon-character-side-view-isolated-on-white-background-vector-illustr.jpg?ver=6" className="img-fluid rounded-circle border" alt="..." /></Link>
                </div>
                <div className="col-3 m-1 mx-auto">
                  <Link to="vehicles/?type=bike"><img src="https://cdn2.vectorstock.com/i/1000x1000/19/31/flat-motorcycle-design-vector-20871931.jpg" className="img-fluid rounded-circle border" alt="..." /></Link>
                </div>
                <div className="col-3 m-1 mx-auto">
                  <Link to="vehicles/?type=car"><img src="https://us.123rf.com/450wm/natchapohn/natchapohn1805/natchapohn180500038/101580956-stock-vector-convertible-transportation-cartoon-character-side-view-isolated-on-white-background-vector-illustrat.jpg?ver=6" className="img-fluid rounded-circle border" alt="..." /></Link>
                </div>
            </div>
            </div>
          );
    }
    else{
        return <Redirect to="/login" />
    }
  }
}

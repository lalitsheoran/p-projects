import React from "react";
import {Link} from 'react-router-dom'
export default class RentVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toRent: "",
      perKm: "",
      perHour: "",
      perDay: "",
      bill:0,
      ready: false
    };
  }
  componentDidMount() {
    let data = this.props.vehicles;
    const query = new URLSearchParams(this.props.location.search);
    let queryRent = query.get("rent");
    data = data.filter(e => e.id == queryRent);
    this.setState({
      toRent: data,
      perKm: data[0].rentkm,
      perHour: data[0].renthr,
      perDay: data[0].rentday,
      rideinput:"",
      ready: true
    });
  }
  handleSelect=(e)=>{
      console.log(e.target.value)
      let bill=0
    if(e.target.value=="Km"){
        bill=this.state.rideinput*this.state.perKm
        console.log("i m in km")
        
        this.setState({
            bill:bill
        })

    }
    else if(e.target.value=="Hour"){
        console.log("i m in hr")
        bill=this.state.rideinput*this.state.perHour
        this.setState({
            bill:bill
        })


    }
    else if (e.target.value=="Days"){
        console.log("i m in day")
        bill=this.state.rideinput*this.state.perDay
        this.setState({
            bill:bill
        })

        
    }
  }
  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleOrder=()=>{
     alert("Thank you for the order, driver will contact you soon") 
  }
  render() {
    return (
      <div>
          <div className="border">
        {this.state.ready &&
          this.state.toRent.map(e => (
            <div className="row">
              <div className="col-lg-3 col-sm-6 col-md-4 mx-5">
                <div className="col">
                  <img className="img-fluid" src={e.image} alt="vehicle" />
                </div>
                <div>
                  <p className="h4 text-center">{e.name}</p>
                </div>
              </div>
              <div className="input-group mb-3 col border col-sm-12 col-md-5 mx-auto">
                <input
                    name="rideinput"
                    onChange={this.handleChange}
                  type="number"
                  className="form-control"
                  placeholder="Enter Ride details"
                  aria-describedby="button-addon2"
                  id="rideInput"
                />
                <div className="input-group-append">
                <select onChange={this.handleSelect} className="custom-select bg-warning" name="" id="button-addon2">
                          <option selected value="Km">Km</option>
                          <option value="Hour">Hour</option>
                          <option value="Days">Days</option>
                      </select>
                </div>
              </div>
            </div>
            
          ))}
      </div>
          {(this.state.bill>0)&&<div className="text-center"><p className="h2 text-danger"><span className="h3 text-dark">Amount payable is</span> Rs. {this.state.bill}<span className="h3 text-dark"> (inclusive of all taxes)</span></p><Link to="/orderplaced"><button type="button" onClick={this.props.handleOrders} class="btn btn-primary">Place Order</button></Link></div>}
      </div>
    );
  }
}

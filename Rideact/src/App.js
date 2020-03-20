import React from 'react';
import { Route, Link} from 'react-router-dom'
import Categories from './components/Categories'
import Login from './components/Login'
import Vehicles from './components/Vehicles'
import Selected from './components/Selected'
import RentVehicle from './components/RentVehicle'
import Thanks from './components/Thanks'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Admin from './components/Admin'


export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      vehicles:[
        {
        name:"Pulsar",
        brand:"Bajaj",
        model:"Pulsar 220",
        type:"bike",
        id:"594785",
        fuel:"Petrol",
        image:"https://cdn.autoportal.com/bp-v3/img/models/88/9/bajaj-pulsar-1464785923.jpg",
        availability:"Currently available",
        maxSpeed:"140",
        rentkm:"20",
        renthr:"100",
        rentday:"1200",
        kmsdone:"8740"
        },
        {
        name:"Jupiter",
        brand:"TVS",
        model:"Jupiter",
        type:"scooter",
        id:"478951",
        fuel:"Petrol",
        image:"https://assetscdn1.paytm.com/images/catalog/product/S/SC/SCOTVS-JUPITER-RAJP860383CD78AADE/1561973869000_9.jpg",
        availability:"Currently available",
        maxSpeed:"80",
        rentkm:"12",
        renthr:"70",
        rentday:"800",
        kmsdone:"5760"
        },
        {
        name:"Swift",
        brand:"Suzuki",
        model:"Maruti Suzuki Swift",
        type:"car",
        id:"354895",
        fuel:"Petrol",
        image:"https://www.drivespark.com/car-image/640x480x100/car/8602019-maruti_swift.jpg",
        availability:"Currently available",
        maxSpeed:"140",
        rentkm:"40",
        renthr:"390",
        rentday:"3985",
        kmsdone:"17560"
        }
      ],
      username:"",
      password:"",
      isAuthenticated:false,
      orders:0,
      ordererdVehicle:[],
      

    }

  }


  handleOrders=(callback)=>{
    this.setState({
      orders:this.state.orders+1,
      ordererdVehicle:[...this.state.ordererdVehicle,callback]
    })
  }

  handleRemoval=(callback)=>{
    console.log(callback)
   let data=this.state.vehicles.filter(e=>e.id!=callback)
    this.setState({
      vehicles:data
    })
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  handleLogin=()=>{
    if(this.state.username=="masai" && this.state.password=="12345"){
      this.setState({
        isAuthenticated:true
      })
    }
  }

  handleLogout=()=>{
      this.setState({
        isAuthenticated:false
      })
    
  }

  handleAddCar=(addbyAdmin)=>{
    this.setState({
      vehicles:[...this.state.vehicles,addbyAdmin]
    })
    alert("Vehicle added Successfully")
  }

render(){
    return(
      <>
                    

      <Navbar loggedin={this.state.isAuthenticated} />
      {/* <Categories/> */}
      {/* <Login /> */}
      <Route exact path="/" render={()=><Home/>}/>
      <Route path="/login" render={()=><Login handleChange={this.handleChange} handleLogin={this.handleLogin} loggedin={this.state.isAuthenticated} handleLogout={this.handleLogout}/>}/>
      <Route exact path="/categories" render={()=><Categories loggedin={this.state.isAuthenticated}/>} />
      <Route path="/vehicles" render={(props)=><Vehicles {...props} vehicles={this.state.vehicles} />}/>
      <Route exact path="/selected" render={(props)=><Selected vehicles={this.state.vehicles} {...props}/>}/>
      <Route path="/rentVehicle" render={(props)=><RentVehicle vehicles={this.state.vehicles} {...props} handleOrders={this.handleOrders}/>}/>
      <Route path="/orderplaced" render={()=><Thanks/>} />
      <Route path="/admin" render={()=><Admin orders={this.state.orders} addCar={this.handleAddCar} removal={this.handleRemoval}/>}/>
      </>
    )
  }
}


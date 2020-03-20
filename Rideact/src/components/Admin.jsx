import React from 'react'


export default class Admin extends React.Component {
    constructor(props){
        super(props)
        this.state={
                name:"",
                brand:"",
                model:"",
                type:"",
                id:false,
                fuel:"",
                image:"",
                availability:"Not available",
                maxSpeed:"",
                rentkm:"",
                renthr:"",
                rentday:"",
                kmsdone:""
        }
    }
    
    handletfFun=()=>{
       this.setState({
           availability:"Yes available"
       })
    }
    handleRemove=()=>{
        let idx=document.getElementById("toRemove").value
        console.log(idx)
        this.props.removal(idx)
        alert("Vehicle removed successfully")
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleAddtoDB=()=>{
        let newEntry=this.state
        this.props.addCar(newEntry)
        alert("Added to database successfully")
    }
    render() {
        return (
           <>
            <div className=" text-center display-4">
                Administator
            </div>
            <div className="text-center text-muted h4">
                Vehicles on rent : {this.props.orders}
            </div>
            <div className="text-center">
              {this.state.availability=="Not available" && <button type="button" className="col-5 col-lg-3 mt-4 btn btn-primary"onClick={this.handletfFun}>Add Vehicle</button>}
          {(this.state.availability!="Not available")?<div className="col-lg-5 col-md-6 col-sm-8 mx-auto">
               <input onChange={this.handleInputChange} className="input-group" placeholder="Name" type="text" name="name" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Brand" type="text" name="brand" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Model" type="text" name="model" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Vehicle Type" type="text" name="type" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Id" type="number" name="id" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Fuel type" type="text" name="fuel" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Image url" type="text" name="image" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Availbility" type="text" name="availability" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Max Speed" type="number" name="maxSpeed" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Rent per km" type="number" name="rentkm" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Rent per hour" type="number" name="renthr" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Rent per day" type="number" name="rentday" id=""/><br/>
               <input onChange={this.handleInputChange} className="input-group" placeholder="Kms done" type="number" name="kmsdone" id=""/>
               <button onClick={this.handleAddtoDB} className="btn btn-warning m-3" >Add to database</button>
           </div>:<></>}<br></br>
           </div>
           <div className="text-center ">
           {(!this.state.id) && <button type="button" onClick={()=>this.setState({id:true})} className="col-5 col-lg-3  m-3 btn btn-danger">Remove Vehicle</button>}
           {(this.state.id)?<div className="mt-4 mx-auto col-6 col-lg-3"><input className="input-group" placeholder="Enter vehicle id" type="number" name="id" id="toRemove"/>
           <button type="button" onClick={this.handleRemove} className="  m-3 btn btn-danger">Remove Vehicle</button></div>:<></>}
           </div>
           

            
           </>
        )
    }
}

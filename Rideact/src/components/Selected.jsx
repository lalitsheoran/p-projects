import React from 'react'
import { Link } from 'react-router-dom'

export default class Selected extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selected:""
        }
    }
    componentDidMount(){
      let data = this.props.vehicles;
      const query = new URLSearchParams(this.props.location.search);
      let queryType = query.get("id");
      data=data.filter(e=>e.id==queryType)
      this.setState(
        {
          selected: data,
          ready: true
        }
      );
    }
    render(){
        return(
            <>
            {(this.state.ready)&& this.state.selected.map((e)=>{
                return(
                    <div>
                        <div className="d-flex mx-2 flex-sm-column flex-lg-row ">
                        <div className="col">
                        <img className="img-fluid" src={e.image} alt=""/>
                        </div>
                        
                        <div className="col row d-flex justify-content-between mt-5 mx-2">
                        <div className="font-weight-bold">
                            <p>Name</p>
                            <p>Brand</p>
                            <p>Model</p>
                            <p>Fuel type</p>
                            <p>Vehicle Id</p>
                            <p>Availability</p>
                            <p>Top Speed</p>
                            <p>Kms done</p>
                        </div>
                        <div>
                            <p>{e.name}</p>
                            <p>{e.brand}</p>
                            <p>{e.model}</p>
                            <p>{e.fuel}</p>
                            <p>{e.id}</p>
                            <p>{e.availability}</p>
                            <p>{e.maxSpeed} km/hr</p>
                            <p>{e.kmsdone}</p>
                        </div>
                        </div>
                    </div>
                    <Link to={`/rentVehicle/?rent=${e.id}`}><p className="text-center"><button type="button" class="btn btn-primary">Rent this vehicle</button></p></Link>
                    </div>
                )
            })}
            </>
        )
    }
}
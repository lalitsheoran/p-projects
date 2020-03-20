import React, { Component } from 'react'
import {connect} from 'react-redux'

class Bookings extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         ready:false
      };
    };
    componentDidMount(){
        let datax=this.props.data
        datax=datax.filter(e=>e.available=="No")
        this.setState({
            data:datax,
            ready:true
        })
    }
    render(){
        if (this.state.data.length!=0){
            return (
                <div className="col">
                    <table className="table">
                        <thead>
                            <th>Name</th>
                            <th>Capacity</th>
                            <th>Bill</th>
                            <th>Floor</th>
                            <th>Booking id</th>
                        </thead>
                <tbody>
            {this.state.ready && this.state.data.map(e=><tr><td>{e.name}</td><td>{e.capacity}</td><td>{e.price}</td><td>{e.floor}</td><td>{e.id}</td></tr>)}
                </tbody>
                    </table>
                 {/* {(this.state.ready) ? (this.state.data.length!0) ? this.state.data.map(e=><div><p>Room name - {e.name}</p><p>Room price - {e.price}</p></div>) :<p>No bookings found</p> : <p>Error Occured try later<p>}   */}
                </div>
            )
        }
            else{
                return(
                    <p className="h3 text-center mt-5"><span className="text-warning">No bookings found</span> - consider booking some meeting rooms.</p>
                ) 
            }
        }
    
    
    }

const mapStateToProps = (state) => ({
  data:state.data  
})


export default connect(mapStateToProps,null)(Bookings)
import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid-random'
import { confirm } from '../common/action'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'

class Book extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         ready:false
      };
    };
    componentDidMount(){
    let datax=this.props.data
    const query= new URLSearchParams(this.props.location.search)
    let targetId=query.get("id")
    datax=datax.filter(e=>e.id==targetId)[0]
    console.log(datax)
    this.setState({
        data:[...this.state.data,datax],
        ready:true
    },console.log(this.state.data))
    }

    handleConfirm=(e)=>{
        let idx=this.state.data[0].idx
        console.log("yha dekh",idx)
        this.props.confirm(idx)

    }


    render() {
       if (this.props.islogged){
        if (this.state.ready){
            return(
                <div>
        <p className="display-2 text-center">{this.state.data[0].name}</p>
        <p className="text-center"><img src={this.state.data[0].url} alt="image"/></p>
        <p className="h3 text-center">It will be suitable for {this.state.data[0].capacity} persons.</p>
        <p className="h4 text-center">You need to make payment of Rs.{this.state.data[0].price}</p>
        <p className="h5 text-center">Transaction id : {uuid()}</p>
        <p className="h4 text-center">Booking Id {this.state.data[0].id}</p>
        <p className="h5 text-center">Press below button to confirm your booking</p>
            <p>{this.state.data[0].idx}</p>
        <Link to="/confirmed"><p className="text-center"><button type="button" class="btn btn-primary" onClick={this.handleConfirm} >Confirm booking</button></p></Link>
                </div>
            )
        }
        else{
            return(
                <div className="h4 text-center">
                    Data not loaded properly, please try again
                </div>
            )
        }
       }
       else{
        return <Redirect to="/login" />;
       }
    }
}

const mapStateToProps=(state)=>{
    return{
        data:state.data,
        islogged:state.LoggedIn
    }
}

const mapDispatchToProps =dispatch=> {
    return{
        confirm:(value)=>dispatch(confirm(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)

import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



class Success extends React.Component {
    render() {
        if(this.props.islogged){
            return (
                <div className="text-center">
                    <p className="display-2 text-primary">Hurray...</p>
                    <p className="display-4">Booking <span className="text-warning display-4">Successful</span></p>
                    <p>Enjoy the benefits of a meeting room.</p>
        
                </div>
            )
        }
        else{
            return <Redirect to="/login" />;
        }
    }
}


const mapStateToProps=(state)=>{
    return{
        islogged:state.LoggedIn
    }
}

export default connect(mapStateToProps, null)(Success)




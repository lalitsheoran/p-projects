import React from 'react'
export default class NotFound extends React.Component{
    render(){
        return(
            <div className="text-center">
                <p style={{fontSize:"180px"}} className=" mt-5 font-weight-bold">4<span className="text-warning">0</span>4</p>
                <p className="text-muted">The page your're looking <br/>for can't be found.</p>
            </div>
        )
    }
}
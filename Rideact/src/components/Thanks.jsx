import React from 'react'
export default class Thanks extends React.Component{
    render(){
        return(
            <div>
                <div className="text-center">
                <p className="display-2 mt-5">Thank <span className="text-warning">you</span></p>
                <p className="h3">Our driver will contact you soon</p> 
                </div>
            </div>
        )
    }
}
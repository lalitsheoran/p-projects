import React from 'react'
import './Home.css';

export default class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <p className="bfont text-white">Ride<span className="text-warning">act</span></p>
                <p className="sbfont text-right text-white">The ride <span className="text-warning">you</span> need, whenever <span className="text-warning">you</span> need.</p>
            </div>
        )
    }
}
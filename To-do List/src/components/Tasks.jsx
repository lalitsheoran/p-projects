import React from 'react';
import './style.css';
class Tasks extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="row col-md-3 col-8 col-xs mx-auto  d-flex justify-content-between">
                    <p onClick={this.props.selectX} className="h3 mx-auto text-truncate col-10" style={{ cursor: "pointer", color: "red" }}>{this.props.taskName}</p>
                    <i onClick={this.props.selectD} style={{ fontSize: "34px", cursor: "pointer" }} className="material-icons">
                        delete
                    </i>
                </div>
            </div>
        )
    }
}

export default Tasks;
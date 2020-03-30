import React from 'react';
class StopWatch extends React.Component {
    render() {
        //   {
        //       if(this.props.hours==0){
        //           if(this.props.minutes==0){
        //             if(this.props.seconds==0){
        //                 <p className="mr-4 text-center"> {this.props.milliseconds}ms</p>
        //             }
        //             else{
        //                 <p className="mr-4 text-center">{this.props.seconds}s {this.props.milliseconds}ms</p>
        //             }
        //           }
        //           else{
        //             <p className="mr-4 text-center">{this.props.minutes}m {this.props.seconds}s {this.props.milliseconds}ms</p>  
        //           }

        //       }
        //       else{
        //         <p className="mr-4 text-center">{this.props.hours}h {this.props.minutes}m {this.props.seconds}s {this.props.milliseconds}ms</p>

        //       }
        //   }
        return (
            <div className="mt-3" >
                <div className="ml-3 row">
                    <p className="mr-2 ml-3 text-center h3">{this.props.hours}h {this.props.minutes}m {this.props.seconds}s </p>
                    <p>{this.props.milliseconds}ms</p>
                </div>
            </div>
        )
    }
}

export default StopWatch;

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { opponent , game_mode } from '../redux/gameDetails/actions'
import { connect } from 'react-redux'

class Mode extends React.Component {
  constructor(props){
    super(props)
    
  }
  handleComputer=()=>{
    this.props.game_modex("Vs_Computer")
  }
  handleLocal=()=>{
    this.props.game_modex("Vs_Local_Friend")
  }
  render(){
  return (
    <>
      <div className={styles.headBackground}>
        <div className="display-4">
          <div className="text-center p-4  ">Choose Mode</div>
        </div>
      </div>

      <div className="d-flex flex-lg-row flex-column justify-content-around">
       <Link onClick={this.handleComputer} style={{ textDecoration: 'none' }} to="/proceed" className=" mx-auto card-deck col-sm-10 col-md-6 col-lg-3 h2 text-center">
        <div className={`card py-5 my-5 text-white align-content-center  ${styles.modes}`}>
        <p className="card-title my-auto py-2" >
            <span className={`display-4 ${styles.vs}`}>Vs</span><br/> Computer
        </p>
        </div>
       </Link>
       <Link onClick={this.handleLocal} style={{ textDecoration: 'none' }} to="/proceed" className="mx-auto card-deck col-sm-10 col-md-6 col-lg-3 h2 text-center">
        <div className={`card py-5 my-5 text-white align-content-center  ${styles.modes}`}>
        <p className="card-title my-auto py-2 ">
            <span className={`display-4 ${styles.vs}`}>Vs</span><br/> Friend Locally
        </p>
        </div>
       </Link>
       <div className="mx-auto card-deck col-sm-10 col-md-6 col-lg-3 h2 text-center">
       <div className={`card py-5 my-5 text-white align-content-center ${styles.modes}`}>
        <p className="card-title mt-4 py-2">
            <span className={`display-4 ${styles.vs}`}>Vs</span><br/> Friend Online 
            
        </p>
        <small className="m-0 p-0">(Coming Soon)</small>
        </div>
       </div>
      </div>
    </>
  );
};
}
const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps =dispatch=> ({
  game_modex:(value)=>dispatch(game_mode(value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Mode)

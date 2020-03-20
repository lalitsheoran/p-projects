import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import uuid from 'uuid-random'


class Home extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
    data:[],
    ready:false 
   };
 };
 

  componentDidMount() {
    let datax=this.props.data
    this.setState({
      data:datax,
      ready:true,
    })
   
  }

  handleChange=e=>{
    let datax=this.props.data
    let sBasis=e.target.value
    if (sBasis=="name"){
      datax.sort(function(a, b){
        if(a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if(a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
    })
      this.setState({
        data:datax
      })
    }
    if (sBasis=="capacity"){
      datax.sort((a,b)=>(a.capacity-b.capacity))
      this.setState({
        data:datax
      })
    }
  if (sBasis=="price"){
    datax.sort((a,b)=>(a.price-b.price))
    this.setState({
      data:datax
    })
  }
  if (sBasis=="floor"){
    datax.sort((a,b)=>(a.floor-b.floor))
    this.setState({
      data:datax
    })
  }

}

  render() {
    return (
      <>
      {/* <div class=" mx-2 input-group col col-md-4 col-lg-3">
        <label className="m-2">Sort</label>
        <select onChange={this.handleChange} class="custom-select form-control" name="" id="">
          <option value="default" default selected>Default</option>
          <option value="name">Name</option>
          <option value="capacity">Capacity</option>
          <option value="price">Price</option>
          <option value="floor">Floor</option>
        </select>
      </div> */}
          <div className="row mt-2">
            {(this.state.ready) && this.state.data.map(e => {
              return (
                <Card key={uuid()} className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "250px" }}
                      image={e.url}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                        {e.name}
                      </Typography>
                      <Typography>Floor : {e.floor}</Typography>
                      <Typography>Capacity : {e.capacity} persons</Typography>
                      <Typography>Rs. {e.price}</Typography>
                      <Typography>Availabilty : {e.available}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                    {(e.available=="Yes")?<Link to={`/book?id=${e.id}`}>
                      <Button size="small" color="primary">
                        Book this room
                      </Button>
                    </Link> : <Typography className="text-danger">Already booked</Typography>}
                  </CardActionArea>
                </Card>
              );
            })}
          </div>
        
      </>
    );
  
}
}
const MapStateToProps=(state)=>{
    return{
        data:state.data
    }
}
// const mapDispatchToProps = {
    
// }


export default connect(MapStateToProps,null)(Home)
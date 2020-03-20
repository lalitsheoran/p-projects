import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import uuid1 from 'uuid/v4';


export default class Vehicles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        received: "",
        ready: false
      };
    }
  
    componentDidMount() {
      let data = this.props.vehicles;
      const query = new URLSearchParams(this.props.location.search);
      let queryType = query.get("type");
      data=data.filter(e=>e.type==queryType)
      this.setState(
        {
          received: data,
          ready: true
        }
      );
    }
  
    render() {
      return (
        <>
          {this.state.ready && (
            <div className="row mt-2">
              {this.state.received.map(e => {
                return (
                  <Card key={uuid1()} className="mx-auto m-1 my-2" style={{ width: "300px" }}>
                    <CardActionArea >
                      <CardMedia
                        className="mx-auto"
                        component="img"
                        style={{ width: "200px" }}
                        image={e.image}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h5" className="text-center">
                          {e.name}
                        </Typography>
                        <div className="d-flex justify-content-between">
                        <div>
                        <Typography>Brand</Typography>
                        <Typography>Kms done</Typography>
                        </div>
                        <div>
                        <Typography>{e.brand}</Typography>
                        <Typography>{e.kmsdone}</Typography>
                        </div>
                        </div>
                        {/* <Typography>Model : {e.model}</Typography>
                        <Typography>Vehicle Id : {e.id}</Typography>
                        <Typography>Fuel type : {e.fuel}</Typography>
                        <Typography>Top speed : {e.speed}</Typography> */}
                        
                      </CardContent>
                    </CardActionArea>
                    <CardActionArea className="text-center">
                      <Link to={`/selected/?id=${e.id}`}>
                        <Button size="small" color="primary">
                          Know more
                        </Button>
                      </Link>
                    </CardActionArea>
                  </Card>
                );
              })}
            </div>
          )}
        </>
      );
    }
  }
  
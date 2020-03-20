import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import uuid1 from 'uuid/v4';


export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      received: "",
      ready: false
    };
  }

  componentDidMount() {
    let data = this.props.products;
    const query = new URLSearchParams(this.props.location.search);
    let queryOrder = query.get("order");
    if (queryOrder == "asc") {
      data = data.sort(function(a, b) {
        return a.price - b.price;
      });
    } else {
      data = data.sort(function(a, b) {
        return b.price - a.price;
      });
    }
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
                  <CardActionArea className="text-center">
                    <CardMedia
                      className="mx-auto"
                      component="img"
                      style={{ width: "200px" }}
                      image={e.imgUrl}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5">
                        {e.name}
                      </Typography>
                      <Typography>{e.id}</Typography>
                      <Typography>Rs. {e.price}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActionArea className="text-center">
                    <Link to={`/shoppingcart/?id=${e.id}`}>
                      <Button size="small" color="primary">
                        Add to cart
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

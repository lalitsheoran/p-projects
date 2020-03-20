import React from "react";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import uuid1 from 'uuid/v4';


export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalproducts: [],
      addedtocart: [],
      ready: false
    };
  }
  componentDidMount() {
    this.setState(
      {
        totalproducts: this.props.products
      },
      () => {
        if (this.props.location.search.length > 5) {
          const query = new URLSearchParams(this.props.location.search);
          let queryID = query.get("id");
          let selected = this.state.totalproducts.find(
            ({ id }) => id == queryID
          );
          this.props.handleAdded(selected);

          this.setState({
            ready: true
          });
        }
      }
    );
    
  }
  componentWillUnmount() {
    this.setState({
      ready: false,
      totalproducts: ""
    });
  }

  render() {
    if (this.props.loggedin) {
      return (
        <div className="text-center mt-5">
          <div className="text-center">
            <p className="text-muted  h2 mb-5">Shopping cart</p>
            </div>
          <div className="row">
            
            {this.state.ready && this.props.added.length > 0 ? (
              this.props.added.map(e => {
                return (
                  <p className="mx-auto text-center" key={uuid1()}>
                    <img style={{ height: "70px" }} src={e.imgUrl} alt="" />
                    <p className="h4 mt-2">{e.name}</p>
                    <p className="h4 mt-2 text-primary mx-3">Rs. {e.price}</p>
                  </p>
                );
              })
            ) : (
              <div className="text-center col">
                <p className="display-4 ">Cart is empty</p>
                <p className="text-warning h5 mb-5">Go shop and add some</p>
              </div>
            )}
            <br></br>
          </div>
          <Button
            onClick={this.props.handleLogout}
            variant="contained"
            color="secondary"
            className="mt-5"
          >
            Logout
          </Button>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

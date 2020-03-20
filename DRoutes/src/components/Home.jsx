import React from "react";
import { Link } from "react-router-dom";
import './home.css';


export default class extends React.Component {
  render() {
    return (
      <div  className=" card bg-dark text-white border-0">
        <img src="home.jpg" class="bg card-img" alt="home" />
        <p className="card-img-overlay text-secondary display-4 mt-5 text-center">
          <div
            id="carouselInterval"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item active text-center "
                data-interval="2500"
              >
                <p>welcome..</p>
              </div>
              <div class="carousel-item text-center" data-interval="2500">
                <Link to="/products?order=asc">
                  <p className="text-secondary">
                  shop <span className="text-secondary h2"> p<span className="text-warning">₹</span>ice low..</span>
                  </p>
                </Link>
              </div>
              <div class="carousel-item text-center" data-interval="2500">
                <Link to="/products?order=des">
                  <p className="text-secondary">
                  shop <span className="text-secondary h2"> p<span className="text-warning">₹</span>ice high..</span>
                  </p>
                </Link>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselInterval"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselInterval"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </p>
        <p className="text-center mt-1">Made with <i class="fas fa-heart"></i>  at Masai School </p><small className="text-muted text-center">Disclaimer : I dont claim ownership of the images/icons used in this project.</small>
        
      </div>
    );
  }
}

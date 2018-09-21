import React, { Component } from "react";
import "./Welcome.css";


class Welcome extends Component {

  render() {
    return (

      <div className="container-fluid " >
        <div className="overlay"><h1>Overlay Text</h1></div>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={require("./handyImage9.jpeg")} alt="First slide" height="550" width="220" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Handy Helper</h5>
                <p>Find Your Help!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("./handyImage2.jpg")} alt="Second slide" height="550" width="220" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Handy Helper</h5>
                <p>Find Your Help!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={require("./handyImage7.jpg")} alt="Third slide" height="550" width="220" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Handy Helper</h5>
                <p>Find Your Help!</p>
                <button className="btn btn-warning px-4">
                  <a href="login.html">Log In</a>
                </button>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="main-text hidden-xs">
          <div className="col-md-12 text-center">
            <h1>
              Static Headline And Content</h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h3>
            <div className="">
              <a className="btn btn-clear btn-sm btn-min-block" href="http://www.jquery2dotnet.com/">Login</a><a className="btn btn-clear btn-sm btn-min-block"
                href="http://www.jquery2dotnet.com/">Registration</a></div>
          </div>
        </div>


        <div className="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="/"> Handy Helper</a>
        </div>


      </div>
    );
  }
}
export default Welcome;



//export default withAuth(App);


import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {

  render() {
    return (
      
        <div className="container-fluid " >



{/* <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img src={require("./handyImage9.jpeg")} alt="First slide"/>
                        <div className="carousel-caption">
                            <h3>
                                First slide</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("./handyImage9.jpeg")} alt="Second slide"/>
                        <div className="carousel-caption">
                            <h3>
                                Second slide</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={require("./handyImage9.jpeg")} alt="Third slide"/>
                        <div className="carousel-caption">
                            <h3>
                                Third slide</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span></a><a className="right carousel-control"
                        href="#carousel-example-generic" data-slide="next"><span className="glyphicon glyphicon-chevron-right">
                        </span></a>
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
            </div> */}




<div className="overlay"><h1>Overlay Text</h1></div>
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={require("./handyImage9.jpeg")} alt="First slide" height="550" width="220"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Handy Helper</h5>
    <p>Find Your Help!</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require("./handyImage2.jpg")} alt="Second slide" height="550" width="220"/>
      <div className="carousel-caption d-none d-md-block">
    <h5>Handy Helper</h5>
    <p>Find Your Help!</p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={require("./handyImage7.jpg")} alt="Third slide" height="550" width="220"/>
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



        {/* style={{backgroundimage: "url('welcomeImage.jpg')"}}
       
       <div className="jumbotron">
            <h1 className="text-center"><span className="glyphicon glyphicon-wrench"></span><i class="fa fa-wrench" aria-hidden="true"></i> Handy Helper </h1>
            <hr/>
            <h2 className="text-center">Find Your Help! or Find Your Cash!</h2>
            <br/>

            <div className="text-center">
                <a href="/Login"><button type="button" className="btn btn-lg btn-primary"><span className="glyphicon glyphicon-list-alt"></span>
                        Login</button></a>
                <a href="/register"><button type="button" className="btn btn-lg btn-danger"><span className="glyphicon glyphicon-credit-card"></span>
                        Register</button></a>
            </div>

        </div> */}

    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="/"> Handy Helper</a>
    </div>


       </div>
    );
  }
}
 export default Welcome;
//export default withAuth(App);


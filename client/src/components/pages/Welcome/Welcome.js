import React, { Component } from "react";
import "./Welcome.css";
import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (
    <div className="container-fluid " >




      <Jumbotron>
        <div className="main-text hidden-xs" id="jumbo">
          <div className="col-md-12 text-center transbox">
            <br /><br />
            <h1 className="title font-weight-bold" style={{ "color": "rgb(196, 18, 18)", "font-size":"100px" }}><strong>Need Help?</strong></h1>
            <br /><br /><br />

            <p className="lead">
              <a className="btn btn-clear btn-lg btn-min-block" href="/login"><strong>Login</strong></a><a className="btn btn-clear btn-lg btn-min-block"
                href="/register"><strong>Registration</strong></a>
            </p>
          </div>
        </div>
      </Jumbotron>

              <div class="footer-copyright text-center ">© 2018 Copyright:
      <a href="/"> Handy Helper</a>
        </div>



      {/* <div className="main-text hidden-xs">
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



    </div>



  );
}


export default Welcome;



      //export default withAuth(App);


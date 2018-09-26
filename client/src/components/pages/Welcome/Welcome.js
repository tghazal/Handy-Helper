import React, { Component } from "react";
import "./Welcome.css";
import { Jumbotron, Button } from 'reactstrap';

const Welcome = (props) => {
  return (


    <div className="jumbotron jumbotron-billboard">
      <div className="img"></div>
      <div className="container">
        <div className="col-md-12 text-center transbox">
          <br />
          <h1 className="title font-weight-bold" style={{ "color": "rgb(196, 18, 18)", "font-size": "100px" }}><strong>Need Help?</strong></h1>
          <br /><br /><br /><br />

          <p className="lead">
            <a className="btn btn-clear btn-lg btn-min-block" href="/login"><strong>Login</strong></a><a className="btn btn-clear btn-lg btn-min-block"
              href="/register"><strong>Registration</strong></a>
              <br/><br/><br/><br/><br/><br/><br/>
          </p>
        </div>

      </div>

    </div>

  );
}


export default Welcome;



      //export default withAuth(App);


import React from "react";
import "./Welcome.css";

const Welcome = (props) => {
  return (
    <div className="container-fluid d-flex flex-grow-1">
      <div className="row flex-grow-1">
        <div className="col p-0 col-style d-flex flex-column align-items-center justify-content-around text-center">
          <h1 className="title display-1 font-weight-bold">
            <strong>Need Help?</strong>
          </h1>
          <div>
            <a className="btn btn-clear btn-lg btn-min-block" href="/login">
              <strong>Login</strong>
            </a>
            <a className="btn btn-clear btn-lg btn-min-block"
              href="/register">
              <strong>Registration</strong>
            </a>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Welcome;



import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {

  render() {
    return (

      <div className="container" >
        <div className="row">
          <div className="col">
            Welcome to our awesome app.
       </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
//export default withAuth(App);


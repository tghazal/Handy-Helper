import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./Welcome.css";

const Welcome = (props) => {
  return (
    <div className="container-fluid " >
      <div>
        <Jumbotron>
          <h1 className="display-3">Need Help?</h1>
          <p className="lead">Welcome to the <br/>Handy Helper.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </div>
      <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="/"> Handy Helper</a>
      </div>
    </div>
  );
};

export default Welcome;
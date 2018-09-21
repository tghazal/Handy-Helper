import React, { Component } from "react";
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import "./Welcome.css";

class Welcome extends Component {

  render() {
    return (

      <div className="container-fluid">
        <div class="row justify-content-between form-group justify-content-around">
          <div class="col-md-3">
            <Card>
              <CardBody>
                <CardTitle>First Last</CardTitle>
                <CardSubtitle></CardSubtitle>
              </CardBody>
              <div class="picture">
                <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <div class="middle">
                <a> + </a>
                </div>
              </div>
            </Card>
          </div>
          <div class="col-md-5">
            <ListGroup>
              <ListGroupItem>Pending 1</ListGroupItem>
              <ListGroupItem>Pending 2</ListGroupItem>
              <ListGroupItem>Pending 3</ListGroupItem>
              <ListGroupItem>Pending 4</ListGroupItem>
              <ListGroupItem>Pending 5</ListGroupItem>
            </ListGroup>
          </div>
        </div>
        <div class="row justify-content-between justify-content-around">
          <div class="col-md-3">
            <ListGroup>
              <ListGroupItem>Skill 1</ListGroupItem>
              <ListGroupItem>Skill 2</ListGroupItem>
              <ListGroupItem>Skill 3</ListGroupItem>
              <ListGroupItem>Skill 4</ListGroupItem>
              <ListGroupItem>Skill 5</ListGroupItem>
            </ListGroup>
          </div>
          <div class="col-md-5">
            <ListGroup>
              <ListGroupItem>Search 1</ListGroupItem>
              <ListGroupItem>Search 2</ListGroupItem>
              <ListGroupItem>Search 3</ListGroupItem>
              <ListGroupItem>Search 4</ListGroupItem>
              <ListGroupItem>Search 5</ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
//export default withAuth(App);


import React from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalBody } from 'reactstrap';
import Spinner from '../../../../../images/spinner.svg';
import './PostJob.css';
import axios from 'axios';

export default class PostJob extends React.Component {
  state = {
    title: '',
    category: '',
    description: '',
    modal: false,
  }

  handler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  submit(event) {
    event.preventDefault();
    this.toggle();
    axios.post('./api/jobs', {
      owner: this.props.userId,
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      address: {
        address1: String,
        address2: String,
        city: String,
        state: String,
        zip: Number
      },
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col border rounded py-3 my-3 mx-2 bg-light">
            <h4 className="text-center">Post a Job</h4>
            <Form>
              <FormGroup>
                <Label>Title</Label>
                <Input type="text" id="title-input" placeholder="title" name="title" value={this.state.title} onChange={this.handler.bind(this)} />
              </FormGroup>
              <FormGroup>
                <Label>Category</Label>
                <Input type="text" id="category-input" placeholder="category" name="category" value={this.state.category} onChange={this.handler.bind(this)} />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" id="description-input" placeholder="description" rows="5" name="description" value={this.state.description} onChange={this.handler.bind(this)} />
              </FormGroup>
              <button className="btn btn-primary" onClick={this.submit.bind(this)}>Submit</button>
            </Form>
          </div>
        </div>
        <Modal isOpen={this.state.modal} zIndex="10000" className="pr-0" centered>
          <ModalBody className="d-flex justify-content-center bg-none">
            <img src={Spinner} alt="spinner" />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}
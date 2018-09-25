import React from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalBody, FormFeedback, ModalHeader, ModalFooter } from 'reactstrap';
import Spinner from '../../../../../images/spinner.svg';
import './PostJob.css';
import axios from 'axios';

export default class PostJob extends React.Component {
  state = {
    title: '',
    category: '',
    description: '',
    modal1: false,
    modal2: false
  }

  handler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  resetForm() {
    this.setState({
      title: '',
      category: '',
      description: ''
    })
  }

  submit(event) {
    event.preventDefault();
    const title = this.state.title;
    const category = this.state.category;
    const description = this.state.description;
    const titleInput = document.getElementById('title-input');
    const categoryInput = document.getElementById('category-input');
    const descriptionInput = document.getElementById('description-input');


    //form validation
    if (!title || !category || !description) {
      if (!title) titleInput.classList.add('is-invalid');
      else {
        titleInput.classList.remove('is-invalid');
        titleInput.classList.add('is-valid');
      }
      if (!category) categoryInput.classList.add('is-invalid');
      else {
        categoryInput.classList.remove('is-invalid');
        categoryInput.classList.add('is-valid');
      }
      if (!description) descriptionInput.classList.add('is-invalid');
      else {
        descriptionInput.classList.remove('is-invalid');
        descriptionInput.classList.add('is-valid');
      }
    } else {
      this.toggle1();
      axios.post('/api/jobs', {
        owner: this.props.mainState.id,
        title: this.state.title,
        description: this.state.description,
        category: this.state.category,
        address: this.props.mainState.address,
      })
        .then(res => {
          this.toggle1();
          this.toggle2();
          this.resetForm();
          console.log(res);
        })
        .catch(err => {
          console.error(err);
          this.toggle1();
        })
    }
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  redirect() {
    window.location = window.location.origin + '/main/home'
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col border rounded py-3 my-3 mx-2 bg-light">
            <h4 className="text-center">Post a Job</h4>
            <Form id="post-job-form">
              <FormGroup>
                <Label>Title</Label>
                <Input type="text" id="title-input" placeholder="title" name="title" value={this.state.title} onChange={this.handler.bind(this)} />
                <FormFeedback>Plase add a title.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Category</Label>
                <Input type="text" id="category-input" placeholder="category" name="category" value={this.state.category} onChange={this.handler.bind(this)} />
                <FormFeedback>Plase add a Category.</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" id="description-input" placeholder="description" rows="5" name="description" value={this.state.description} onChange={this.handler.bind(this)} required />
                <FormFeedback>Plase add a Description.</FormFeedback>
              </FormGroup>
              <button className="btn btn-primary" onClick={this.submit.bind(this)} type="submit">Submit</button>
            </Form>
          </div>
        </div>
        <Modal isOpen={this.state.modal1} zIndex="10000" className="pr-0" centered onEnter={this.removeStyling}>
          <img src={Spinner} alt="spinner" />
        </Modal>
        <Modal isOpen={this.state.modal2} zIndex="10000" className="pr-0" centered onEnter={this.addStyling}>
          <ModalHeader>
            Success!!
          </ModalHeader>
          <ModalBody>
            Job created!
          </ModalBody>
          <ModalFooter>
            <div className="w-100">
              <button className="btn btn-block btn-primary" onClick={this.toggle2.bind(this)}>Create Another Job</button>
              <button className="btn btn-block btn-primary mt-3" onClick={this.redirect.bind(this)}>Close</button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}
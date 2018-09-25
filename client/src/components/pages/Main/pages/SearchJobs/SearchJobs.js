import React from 'react';
import './SearchJobs.css';
import { Form, FormGroup, Label } from 'reactstrap';
import axios from 'axios';
import ZipInput from './components/ZipInput';

class SearchJobs extends React.Component {

  state = {
    zipcode: ''
  }

  componentDidUpdate() {
    if (this.state.zipcode.length > 5) {
      this.setState({
        zipcode: this.state.zipcode.slice(0, -1)
      })
    }
  }

  handler(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  searchJobs(event) {
    event.preventDefault();
    axios.get('/api/jobs', { params: { zipcode: this.state.zipcode } })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h1>Search</h1>
          </div>
        </div>
        <Form>
          <FormGroup>
            <div className="row justify-content-center">
              <div className="col-auto m-0 pr-0 d-flex align-items-center">
                <Label for="zip-code-input" className="mb-0">Zip Code</Label>
              </div>
              <ZipInput handler={this.handler.bind(this)} value={this.state.zipcode} name='zipcode' searchJobs={this.searchJobs.bind(this)} />
            </div>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SearchJobs;
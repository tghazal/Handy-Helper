import React from 'react';
import './SearchJobs.css';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import Map from './components/Map';

class SearchJobs extends React.Component {

  state = {
    zipcode: '',
    jobs: null,
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
    axios.get('/api/jobs/' + this.state.zipcode)
      .then(res => {
        console.log(res);
        this.showJobs(res);
      })
      .catch(err => console.error(err));
  }

  showJobs(res) {
    this.setState({
      jobs: res.data
    })
  }

  render() {
    const jobsArray = [];
    if (this.state.jobs) {
      if (this.state.jobs.length === 0) {
        jobsArray.push(
          <div className="row my-3" key='no-jobs'>
            <div className="col">
              <h1>No Results.</h1>
            </div>
          </div>
        )
      }
    }
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
              <div className="col-auto d-flex align-items-center">
                <Label for="zip-code-input" className="mb-0"></Label>
              </div>
              <div className="col pl-0" style={{ maxWidth: '400px' }}>
                <Input className="form-input" id="zip-code-input" placeholder="Zip Code" onChange={this.handler.bind(this)} value={this.state.zipcode} name='zipcode' />
              </div>
              <div className="col-auto p-0">
                <button className="btn btn-primary" onClick={this.searchJobs.bind(this)} >Search</button>
              </div>
            </div>
          </FormGroup>
        </Form>
        <Map />
        {jobsArray}
      </div>
    )
  }
}

export default SearchJobs;
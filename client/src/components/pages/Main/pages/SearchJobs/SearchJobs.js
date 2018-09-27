import React from 'react';
import './SearchJobs.css';
import { Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import Map from './components/Map';
import Spinner from '../../../../Spinner/Spinner';

class SearchJobs extends React.Component {

  state = {
    zipcode: '',
    jobs: null,
    spinner: false,
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
    this.toggle1();
    axios.get('/api/jobs/' + this.state.zipcode)
      .then(res => {
        console.log(res);
        this.toggle1();
        this.showJobs(res);
      })
      .catch(err => console.error(err));
  }

  showJobs(res) {
    this.setState({
      jobs: res.data
    })
  }

  toggle1() {
    this.setState({
      spinner: !this.state.spinner
    });
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
      <div className="container text-center filler">
        <div className="row">
          <div className="col">
            <h1>Search</h1>
          </div>
        </div>
        <Form>
          <FormGroup>
            <div className="row justify-content-center">
              <div className="col" style={{ maxWidth: '400px' }}>
                <Input className="form-input" id="zip-code-input" placeholder="Zip Code" onChange={this.handler.bind(this)} value={this.state.zipcode} name='zipcode' />
              </div>
              <div className="col-auto pl-0 py-0">
                <button className="btn btn-primary" onClick={this.searchJobs.bind(this)} >Search</button>
              </div>
            </div>
          </FormGroup>
        </Form>
        <Map />
        {jobsArray}
        <Spinner isOpen={this.state.spinner} />
      </div>
    )
  }
}

export default SearchJobs;
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';

class SearchJobs extends React.Component {
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
              <div className="col" style={{ maxWidth: '400px' }}>
                <Input type="number" id="zip-code-input" placeholder="zip code" />
              </div>
            </div>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default SearchJobs;
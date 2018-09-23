import React from 'react';
import { Input } from 'reactstrap';

class ZipInput extends React.Component {
  render() {
    return (
      <div className="col d-flex" style={{ maxWidth: '400px' }}>
        <Input type="number" id="zip-code-input" placeholder="zip code" className="mr-2" onChange={this.props.handler} value={this.props.value} name={this.props.name} />
        <button className="btn btn-primary" onClick={this.props.searchJobs}>Search</button>
      </div>
    )
  }
}

export default ZipInput;
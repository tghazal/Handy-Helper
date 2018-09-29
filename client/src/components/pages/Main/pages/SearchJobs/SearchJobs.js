import React from 'react';
import './SearchJobs.css';
import { Form, FormGroup, Input } from 'reactstrap';
import axios from 'axios';
import Map from './components/Map';
import Spinner from '../../../../Spinner/Spinner';
import API from '../../../../../utils/API';
//import bootbox from "../../../../../bootbox.min";

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

  makeBid = (jobId) => {
const input=document.getElementById(jobId);
let priceInput = input.value;
let priceNumber=Number(priceInput);
let user= this.props.mainState.id;
let status="pending"
API.saveBid(user,priceNumber,status,jobId)
.then(res=>console.log(res.data))//need modal here for res.data
.catch(err=>console.log(err))
  }
  
  toggle1() {
    this.setState({
      spinner: !this.state.spinner
    });
  }
  
  showDescription = (des) =>{
    console.log(des)//need modal here for des


  }

  render() {
    let jobsArray = [];
    if (this.state.jobs) {
      const myJobs = this.state.jobs;

      myJobs.forEach(elem => {
        let address = elem.address.address1 + "," + elem.address.address2 + "," + elem.address.state + "," + elem.address.city + "," + elem.address.zip
        jobsArray.push(
          <tr key={elem._id}>

            <th scope="col-md-3">
              {elem.title}
            </th>

            <th scope="col-md-3">
              {elem.category}
            </th>

            <th scope="col-md-3">
             <a href ="#" onClick={()=>this.showDescription(elem.description)}>Description</a>
            </th>

            <th scope="col-md-3">
              {address}
            </th>

            <th scope="col-md-3">
            <Input className="priceInput" placeholder="price $" id={elem._id} />
            </th>

            <th scope="col-md-3">
              <button className="bidButton btn btn-primary text-center" onClick={()=>this.makeBid(elem._id)} > Submit a bid </button>
            </th>

           

          </tr>
        )
      })
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
        <div className="col-md-10 mb-5 mt-5 offset-md-1 ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col-md-3">Title</th>
                <th scope="col-md-3">Category</th>
                <th scope="col-md-3">Description</th>
                <th scope="col-md-3">Address</th>
              </tr>
            </thead>
            <tbody>

              {this.state.jobs ? jobsArray : "No Results."}

            </tbody>
          </table>

        </div>
        <Spinner isOpen={this.state.spinner} />
      </div>
    )
  }
}

export default SearchJobs;
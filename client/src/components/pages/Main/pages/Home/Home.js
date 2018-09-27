import React from 'react';
import Dropzone from "react-dropzone"
import Address from "./components/Address";
import Skills from "./components/Skills";
import { Link } from 'react-router-dom';
import { FaExclamationCircle } from 'react-icons/fa';
import './Home.css';

export default class Home extends React.Component {


  render() {
    const jobsArray = [];
    const myJobs = this.props.mainState.myJobs;
    myJobs.forEach(elem => {
      jobsArray.push(
        <div className="row p-2" key={elem._id}>
          <div className="col border-bottom m-1">
            {elem.title}
          </div>
          <div className="col border-bottom m-1">
            {elem.category}
          </div>
          <div className="col-auto"><FaExclamationCircle size="1.5em" color="lightGrey" /></div>
        </div>
      )
    })

    return (
      <div>
        <div className="container ">

          <div className="row my-4 bg-light border rounded  ">

            <div className="col-md-4 picture picturepadding d-flex justify-content-center mt-2">
              <div className="middle">
                <h1> <ion-icon name="add-circle-outline" >+</ion-icon></h1>
              </div>
              <Dropzone width="100%"  onDrop={this.props.onDrop} className="img-thumbnail" ><img className="img-thumbnail" width="100%" height="100%" src={this.props.mainState.image?  this.props.mainState.image : "../../../../../images/profileImage.png"} className="img-responsive" /></Dropzone>
            </div>

            <div className="col-md-6 mt-4 mb-4">
              <div className="row">

                <div className="col-md-12"> 
                 <h1>
                  {this.props.mainState.name}
                </h1></div>
                <div className="col-md-12"> 
                <h3>
                 {this.props.mainState.email}
                </h3></div>
                <div className="col-md-12 mb-2"> 
                <h3>Address:   {this.props.mainState.address1}, {this.props.mainState.address2} {this.props.mainState.state}, {this.props.mainState.city}, {this.props.mainState.zip}.
                </h3>
                    <a href="" onClick={this.props.onView}>Edit Address</a>
                </div>

                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <Link to="/main/post-job" className="w-100"><button className="btn btn-primary btn-block">Post a Job</button></Link>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <Link to="/main/search-jobs" className="w-100"><button className="btn btn-primary btn-block">Search jobs</button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row  mt-5 ">
            <div className="col-md-8  ">
              <div className="row">
                <div className="col-md-12  mb-5">
                  <div className="card">
                    <div className="card-header" >
                      My Jobs
                  </div>
                    <div className="card-body">
                      {this.props.mainState.myJobs ? jobsArray : null}
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-5">
                  <div className="card">
                    <div className="card-header" >
                      My Bids
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-5">
                  <div className="card">
                    <div className="card-header" >
                      Job History
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            {this.props.mainState.addressFlag ?
                <Address
                address1={this.props.mainState.address1}
                  address2={this.props.mainState.address2}
                  city={this.props.mainState.city}
                  state={this.props.mainState.state}
                  zip={this.props.mainState.zip}
                  onChange={this.props.onChange}
                  onClick={this.props.onAddressClick}
                /> : null}
              <Skills
                skills={this.props.mainState.skills}
                skill={this.props.mainState.skill}
                onChange={this.props.onChange}
                onClick={this.props.onClick}
              />
            
            
            
            </div>



          </div>





          {/* <div className="row my-3">
            <div className="col-lg-6">
              <div className="border p-3 mb-3 rounded">
                <div className="row">
                  <div className="col picture picturepadding d-flex justify-content-center">
                    <div className="middle">
                      <h1><input type="file" id="file-input" hidden /> <ion-icon name="add-circle-outline" >+</ion-icon></h1>
                    </div>
                    <Dropzone width="100%" onDrop={this.props.onDrop} ><img alt="alt" width="100%" height="100%" src={this.props.mainState.image} className="img-responsive" /></Dropzone>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h2>
                      Name: {this.props.mainState.name}
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h2>
                      Email: {this.props.mainState.email}
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h2>Address:
                      {this.props.mainState.addrees1}
                      {this.props.mainState.addrees2}
                      {this.props.mainState.state}
                      {this.props.mainState.city}
                      {this.props.mainState.zip}
                    </h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <a href="" onClick={this.props.onView}>Edit Address</a>
                  </div>
                </div>
              </div>
              {this.props.mainState.addressFlag ?
                <Address
                  address1={this.props.mainState.address1}
                  address2={this.props.mainState.address2}
                  city={this.props.mainState.city}
                  state={this.props.mainState.city}
                  zip={this.props.mainState.zip}
                  onChange={this.props.onChange}
                  onClick={this.props.onAddressClick}
                /> : null}
              <Skills
                skills={this.props.mainState.skills}
                skill={this.props.mainState.skill}
                onChange={this.props.onChange}
                onClick={this.props.onClick}
              />
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="row mb-3">
                <div className="col d-flex align-items-center justify-content-center">
                  <Link to="/main/post-job" className="w-100"><button className="btn btn-primary btn-block">Post a Job</button></Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <Link to="/main/search-jobs" className="w-100"><button className="btn btn-primary btn-block">Make a Bid</button></Link>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header" >
                      My Jobs
                  </div>
                    <div className="card-body">
                      {this.props.mainState.myJobs ? jobsArray : null}
                    </div>
                  </div>
                </div>
                <div className="col-12 my-4">
                  <div className="card">
                    <div className="card-header" >
                      My Bids
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="card-header" >
                      Job History
                    </div>
                    <div className="card-body">
                    </div>
                  </div>
                </div>
              </div> */}
            {/* </div>
          </div> */}
        </div >
      </div >
    )
  }
}
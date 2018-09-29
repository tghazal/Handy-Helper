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
              <Dropzone width="100%" onDrop={this.props.onDrop} className="img-thumbnail" ><img className="img-thumbnail" width="100%" height="100%" src={this.props.mainState.image ? this.props.mainState.image : "../../../../../images/profileImage.png"} className="img-responsive" /></Dropzone>

            </div>
            <div className="col-6 col-md flex-column justify-content-between align-self-stretch p-3 p-md-4">
              <h1>
                {this.props.mainState.name}
              </h1>
              <h3>
                {this.props.mainState.email}
              </h3>
              <div className="d-flex justify-content-around">
                <div class="col align-self-center">
                  <Link to="/main/post-job" className="w-100 mr-1" style={{ maxWidth: '300px' }}><button className="btn btn-primary btn-block">Post a Job</button></Link>
                  <Link to="/main/search-jobs" className="w-100 ml-1" style={{ maxWidth: '300px' }}><button className="btn btn-primary btn-block">Search jobs</button></Link>
                </div></div>
            </div>
            <div className="col-6 col-md flex-column justify-content-between align-self-stretch p-3 p-md-4">
              <h3>Address:

                <br />
                <div className="address">
                  {this.props.mainState.address1}
                  {this.props.mainState.address2}
                  <br />
                  {this.props.mainState.city}
                  <br />
                  {this.props.mainState.state}
                  <br />
                  {this.props.mainState.zip}
                </div>

              </h3>
              <a href="" onClick={this.props.onView}>Edit Address</a>


            </div>
          </div>

          <div className="profile">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12 mb-5">
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
                  <div className="col-md-12 mb-4">
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
          </div>
        </div >
      </div >
    )
  }
}
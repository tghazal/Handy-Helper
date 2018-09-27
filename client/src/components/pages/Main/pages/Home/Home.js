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
        <div className="container">
          <div className="row mt-3 mx-0 border rounded d-flex align-items-center justify-content-center justify-content-md-around bg-light">
            <div className="col-12 col-md picture picturepadding p-md-3 pt-4" style={{ maxWidth: '250px', maxHeight: '250px' }}>
              {/* <div className="middle">
                <h1> <ion-icon name="add-circle-outline" >+</ion-icon></h1>
              </div> */}
              <Dropzone onDrop={this.props.onDrop} className="img-thumbnail" inputProps={{ style: { maxWidth: '10px' } }}>
                <img className="img-thumbnail" width="100%" height="100%" src={this.props.mainState.image ? this.props.mainState.image : "https://process.filestackapi.com/AIsgBhhXAQiO1fMgTiIKSz/resize=width:650,height:650,fit:scale,align:center/rotate=deg:exif/https://cdn.trustwork.com/images/internal_assets/default-profile-img-1.png"} className="img-responsive" alt="alt" />
              </Dropzone>
            </div>
            <div className="col-12 col-md d-flex flex-column justify-content-between align-self-stretch p-3 p-md-4">
              <h1>
                {this.props.mainState.name}
              </h1>
              <h3>
                {this.props.mainState.email}
              </h3>
              <h3>Address:
                {this.props.mainState.address1},
                {this.props.mainState.address2},
                {this.props.mainState.state},
                {this.props.mainState.city},
                {this.props.mainState.zip}.
              </h3>
              <a href="" onClick={this.props.onView}>Edit Address</a>
              <div className="d-flex justify-content-around">
                <Link to="/main/post-job" className="w-100 mr-1" style={{ maxWidth: '300px' }}><button className="btn btn-primary btn-block">Post a Job</button></Link>
                <Link to="/main/search-jobs" className="w-100 ml-1" style={{ maxWidth: '300px' }}><button className="btn btn-primary btn-block">Search jobs</button></Link>
              </div>
            </div>
          </div>
          <hr />
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
        </div >
      </div >
    )
  }
}
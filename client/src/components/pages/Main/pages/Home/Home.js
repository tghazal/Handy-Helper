import React from 'react';
import Dropzone from "react-dropzone"
import Address from "./components/Address";
import Skills from "./components/Skills";
import { Link } from 'react-router-dom';
import './Home.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="App-intro">
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6   mt-2">
              <div className="row">
                <div className="col-md-6 picture picturepadding">
                  <div className="middle">
                    <h1><input type="file" id="file-input" hidden /> <ion-icon name="add-circle-outline" ></ion-icon></h1>
                  </div>
                  <div className="ml-4">
                    <Dropzone width="100%" onDrop={this.props.mainState.image} ><img alt="alt" width="100%" height="100%" src={this.props.mainState.image} className="img-responsive" /></Dropzone>
                  </div>
                </div>
                <div className="col-md-12"> <h2>Name: {this.props.mainState.name} </h2></div>
                <div className="col-md-12"> <h2>Email: {this.props.mainState.email}</h2></div>
                <div className="col-md-12"><h2>Address:{this.props.mainState.address1} {this.props.mainState.address2} {this.props.mainState.state} {this.props.mainState.city} {this.props.mainState.zip}</h2></div>
                <Address address1={this.props.mainState.address1} address2={this.props.mainState.address2} city={this.props.mainState.city} state={this.props.mainState.city} zip={this.props.mainState.zip} onChange={this.props.onChange} onClick={this.editAddress} />
                <Skills skills={this.props.mainState.skills} skill={this.props.mainState.skill} onChange={this.props.onChange} onClick={this.props.onClick} />
              </div>
            </div>
            <div className="col-md-6 mx-auto   mt-2">
              <div className="row mb-4">
                <div className="col d-flex align-items-center justify-content-center">
                  <Link to="/main/post-job"><button className="btn btn-primary btn-block">Post Job</button></Link>
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  <Link to="/main/search-jobs"><button className="btn btn-block lettercolor2 buttoncolor">Search Jobs</button></Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="card-header tet-center" >
                    My Jobs
                </div>
                </div>
                <div className="col-md-12">
                  <div className="card-header tet-center" >
                    My Bids
                </div>
                </div>
                <div className="col-md-12">
                  <div className="card-header tet-center" >
                    Job History
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
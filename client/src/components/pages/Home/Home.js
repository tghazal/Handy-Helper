import React, { Component } from "react";
import withAuth from '../../withAuth';
import "./Home.css"
import AuthService from '../../AuthService';
import { Link } from 'react-router-dom';
import Skills from "../../Skills"
import API from "../../../utils/API";
import Dropzone from "react-dropzone"
import Address from "../../Address"


class Home extends Component {

  constructor() {
    super();
    this.Auth = new AuthService();
  }



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // here is the function to retrieve user info from database using user email and set the data to the states 
  getUserInfo = (email) => {

    API.getUserInfoFromDB(email)
      .then(
        res => this.setState(//here we retrive the data and set state each with its value 
          {
            skills: res.data.skills,
            id: res.data._id,
            address1: res.data.address.address1,
            address2: res.data.address.address2,
            state: res.data.address.state,
            city: res.data.address.city,
            zip: res.data.address.zip
          }
        ))
      .catch(err => console.log(err));

  }

  componentDidMount = () => {
    //call the function to retrive user info 
    this.getUserInfo(this.Auth.getProfile().email);
    //get user email and name from the token through getProfile function
    this.setState({ name: this.Auth.getProfile().name, email: this.Auth.getProfile().email })
  }

  setImage = (email) => {
    console.log("setimageeeeeeeeee")
    // API.getUserInfoFromDB(email)
    // .then(res => console.log(res.data))//here we retrive the data and set state each with its value 
    // .catch(err => console.log(err));

  }
  addSkill = () => {


    let tempSkillArray = this.state.skills;
    tempSkillArray.push(this.state.skill);
    API.updateSkills(tempSkillArray, this.state.id)
      .then(res => this.getUserInfo(this.Auth.getProfile().email)) //this.setState({skills:res.data.skills}))//here we retrive the data and set state each with its value 
      .catch(err => console.log(err));
    console.log(this.state.skills)
    this.setState({ skill: "" })
  }

  uploadImage(files) {
    console.log("upload")
    console.log(files)
    API.saveImage(files, this.state.id)
      .then(res => this.setImage(this.Auth.getProfile().email))
      .catch(err => console.log(err));
  }

  saveImage = (files) => {
    const selectedImage = files[0]
    console.log(selectedImage)
    this.uploadImage(files[0]);
    this.setState({ image: URL.createObjectURL(selectedImage) })

  }

  editAddress = () => {
    let data = {
      address1: this.state.address1,
      address2: this.state.ddress2,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      id: this.state.id
    }
    API.updateAddress(data)
      .then(res => this.getUserInfo(this.Auth.getProfile().email)) //this.setState({skills:res.data.skills}))//here we retrive the data and set state each with its value 
      .catch(err => console.log(err));

  }

  state = {
    id: "",
    skill: "",
    skills: [],
    email: "",
    phone: "",
    name: "",
    image: null,
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    jobs: [],
    bids: [],
    historyJobs: []

  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">

              <p className="App-intro">
              </p>
            </div>

            <div className="col d-flex align-items-center justify-content-center">
              <Link to="/post-job"><button className="btn btn-primary btn-block">Post Jobs</button></Link>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <Link to="/search-jobs"><button className="btn btn-block lettercolor2 buttoncolor">Search Jobs</button></Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6   mt-2">
              <div className="row">
                <div className="col-md-6 picture picturepadding">
                  <div className="middle">
                    <h1><ion-icon name="add-circle-outline"></ion-icon></h1>
                  </div>
                  <div className="ml-4">
                    <Dropzone width="100%" onDrop={this.saveImage} ><img width="100%" height="100%" src={this.state.image} className="img-responsive" /></Dropzone>
                  </div>
                </div>
                <div className="col-md-12"> <h2>Name: {this.state.name} </h2></div>

                <div className="col-md-12"> <h2>Email: {this.state.email}</h2></div>
                <div className="col-md-12"><h2>Address:{this.state.address1} {this.state.address2} {this.state.state} {this.state.city} {this.state.zip}</h2></div>
                <Address address1={this.state.address1} address2={this.state.address2} city={this.state.city} state={this.state.city} zip={this.state.zip} onChange={this.handleInputChange} onClick={this.editAddress} />

                 <Skills skills={this.state.skills} skill={this.state.skill} onChange={this.handleInputChange} onClick={this.addSkill} />
              </div>
             </div>
          <div className="col-md-6 mx-auto   mt-2">
            <div className="row">
              <div className="col-md-12">
                <div className="card-header tet-center" >
                  My Jobs
          </div>
              </div>
              <div className="col-md-12">
                <div className="card-header tet-center" >
                  My bids
          </div>
              </div>
              <div className="col-md-12">
                <div className="card-header tet-center" >
                  historyJobs
          </div>
              </div>
            </div>
          </div>
        </div>
      </div >
      </div >
    );
  }
}
export default withAuth(Home);


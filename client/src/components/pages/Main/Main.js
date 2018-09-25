import React, { Component } from "react";
import withAuth from '../../withAuth';
import AuthService from '../../AuthService';
import API from "../../../utils/API";
import { Route } from 'react-router-dom';
import PostJob from './pages/PostJob/PostJob';
import SearchJobs from './pages/SearchJobs/SearchJobs';
import Home from './pages/Home/Home'

class Main extends Component {

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
        <Route exact path="/main/home" render={(props) => <Home mainState={this.state} onChange={this.handleInputChange} onClick={this.addSkill} />} />
        <Route exact path="/main/search-jobs" render={(props) => <SearchJobs {...props} />} />
        <Route exact path="/main/post-job" render={(props) => <PostJob {...props} />} />
      </div>
    );
  }
}
export default withAuth(Main);


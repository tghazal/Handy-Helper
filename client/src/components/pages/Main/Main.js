import React, { Component } from "react";
import withAuth from '../../withAuth';
import AuthService from '../../AuthService';
import API from "../../../utils/API";
import { Route } from 'react-router-dom';
import PostJob from './pages/PostJob/PostJob';
import SearchJobs from './pages/SearchJobs/SearchJobs';
import Home from './pages/Home/Home';
import { Modal } from 'reactstrap';

class Main extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    id: "",
    skill: "",
    skills: [],
    email: "",
    phone: "",
    name: "",
    image: null,
    addrees1: "",
    address2:"",
    city:"",
    state:"",
    zip:"",
    myJobs: [],
    myBids: [],
    history: [],
    addressFlag:0
  }


 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getUserInfo = (email) => {
    API.getUserInfoFromDB(email)
      .then(res => {
        console.log(res.data.address.address1)
        this.setState({
          skills: res.data.skills,
          id: res.data._id,
          myJobs: res.data.myJobs,
          addrees1:res.data.address.address1,
          address2:res.data.address.address2,
          state:res.data.address.state,
          city:res.data.address.city,
          zip:res.data.address.zip
        })
      })
      .catch(err => console.log(err));
  }

  componentDidMount = () => {
  
    //call the function to retrive user info 
    this.getUserInfo(this.Auth.getProfile().email);
    //get user email and name from the token through getProfile function
    this.setState({
      name: this.Auth.getProfile().name,
      email: this.Auth.getProfile().email
    });

  }


 viewAddress=() =>{

    this.setState({addressFlag:1})
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



  saveImage = (files) => {
    const selectedImage = files[0]
    console.log(selectedImage)
    this.setState({ image: URL.createObjectURL(selectedImage) })
    var formData = new FormData();
    formData.append('image', files);
    console.log("form data",formData)
    API.saveImage(formData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  editAddress = () => {
    
    let data = {
      address1: this.state.address1,
      address2: this.state.address2,
      state: this.state.state,
      city: this.state.city,
      zip: this.state.zip,
      id: this.state.id
    }
    this.setState({addressFlag:0})
    console.log(data)
    API.updateAddress(data)
      .then(res => this.getUserInfo(this.Auth.getProfile().email))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Route exact path="/main/home" render={(props) => <Home mainState={this.state} onChange={this.handleInputChange} onClick={this.addSkill} onAddressClick={this.editAddress} onView={this.viewAddress} onDrop={this.saveImage} />} />
        <Route exact path="/main/search-jobs" render={(props) => <SearchJobs mainState={this.state} />} />
        <Route exact path="/main/post-job" render={(props) => <PostJob mainState={this.state} />} />
        <Modal isOpen={this.state.toggle} toggle={this.toggle} centered>
          <h1>Job Created!!!</h1>
        </Modal>
      </div>
    );
  }
}

export default withAuth(Main);


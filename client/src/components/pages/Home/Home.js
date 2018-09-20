import React, { Component } from "react";
import withAuth from '../../withAuth';
import AuthService from '../../AuthService';
import { Link } from 'react-router-dom';
import Skills from "../../Skills"

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
  getUserInfo = () => {

    // API.getUserInfo(this.state.email)
    // .then(res => console.log(res))//here we retrive the data and set state each with its value 
    // .catch(err => console.log(err));

  }

  componentDidMount = () => {
    //call the function to retrive user info 
    this.getUserInfo();
    //get user email and name from the token through getProfile function
    this.setState({ name: this.Auth.getProfile().name, email: this.Auth.getProfile().email })
    console.log(this.Auth.getProfile())
  }

  addSkill = () => {
   // API.updateSkills(this.state.email,this.state.skill)
    let tempSkillArray = this.state.skills;
    tempSkillArray.push(this.state.skill);
    this.setState({ skills: tempSkillArray })
    console.log(this.state.skills)
    this.setState({skill:""})
  }

  state = {
    skill: "",
    skills: ["test1","test2"],
    email: "",
    phone: "",
    name: "",
    image: "",
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
              <h2>Welcome {this.state.name} </h2>
              <h2>Email {this.state.email}</h2>
              <p className="App-intro">
              </p>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <Link to="/search-jobs"><button className="btn btn-primary btn-block">Search Jobs</button></Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6   mt-2">
              <div className="row">
                <div className="col-md-12">
                  <img src="https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif" className="img-responsive" alt="Cinque Terre" />
                </div>
                <p>{this.state.name}</p>
                <Skills skills={this.state.skills} skill={this.state.skill} onChange={this.handleInputChange} onClick={this.addSkill} />
              </div>
            </div>
            <div className="col-md-6 mx-auto   mt-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="card-header tet-center" >
                    bids
          </div>
                </div>
                <div className="col-md-12">
                  <div className="card-header tet-center" >
                    Jobs
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
      </div>
    );
  }
}
export default withAuth(Home);


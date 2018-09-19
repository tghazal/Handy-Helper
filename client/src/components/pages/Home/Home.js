import React, { Component } from "react";
import "./Home.css";
import API from "../../../utils/API";
import withAuth from '../../withAuth';
import AuthService from '../../AuthService';
const Auth = new AuthService();

class Home extends Component {

  constructor(){
    super();
    this.Auth = new AuthService();
}

  handleLogout() {
    Auth.logout()
    this.props.history.replace('/login');
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // here is the function to retrieve user info from database using user email and set the data to the states 
  getUserInfo=()=>{
    
    // API.getUserInfo(this.state.email)
    // .then(res => console.log(res))//here we retrive the data and set state each with its value 
    // .catch(err => console.log(err));

  }

  componentWillMount=()=>{
    //call the function to retrive user info 
  this.getUserInfo();
  //get user email and name from the token through getProfile function
  this.setState({name:this.Auth.getProfile().name,email:this.Auth.getProfile().email})
  console.log(this.Auth.getProfile())
}

  state = {
    skill:"",
    skills: [],
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

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Welcome {this.state.name} </h2>
            <h2>Email {this.state.email}</h2>
            <p className="App-intro">
              <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
            </p>
          </div>
        </div>
        <div className="row  ">
          <div className="col-md-6   mt-2">

            <div className="row">
              <div className="col-md-12">
                <img src="https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif" className="img-responsive" alt="Cinque Terre" />
              </div>
              <p>Name</p>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header tet-center" >
                    skills
                     </div>
                </div>
              </div>
            </div>

            {/* <h5 className="card-title"></h5>
            <div className="card-body">
              <div className="form-group">
                <input className="form-control"
                  value={this.state.topic}
                  onChange={this.handleInputChange}
                  name="skill"
                  placeholder="skill"
                />
                
              </div>

              <button style={{ backgroundColor: "#732c7b" }} className="btn text-light"
                disabled={!(this.state.skill)}
                onClick={this.login}
              >
                Add Skill
              </button>
            </div> */}

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

    );
  }
}
export default withAuth(Home);


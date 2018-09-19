import React, { Component } from "react";
import "./Home.css";
import API from "../../../utils/API";
import withAuth from '../../withAuth';
import AuthService from '../../AuthService';
const Auth = new AuthService();

class Home extends Component {
    handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
 }
  render() {
    return (
  <div>
       <div className="App-header">
           
            <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p>
       
     Home Page
  </div>
    );
  }
}
export default withAuth(Home);
//export default Home;

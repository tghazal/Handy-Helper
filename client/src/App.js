import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"



class App extends Component {
//   handleLogout(){
//     Auth.logout()
//     this.props.history.replace('/login');
//  }
  render() {
    return (
      <Router>
        <div className="container-fluid " >
        {/* <div className="App-header">
           
            <h2>Welcome {this.props.user.username}</h2>
        </div>
        <p className="App-intro">
            <button type="button" className="form-submit" onClick={this.handleLogout.bind(this)}>Logout</button>
        </p> */}
       
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
 export default App;
//export default withAuth(App);


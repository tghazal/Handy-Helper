import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/pages/Home";
import SearchJobs from "./components/pages/SearchJobs";
import Register from "./components/pages/Register"
import Login from "./components/pages/Login"
import Welcome from "./components/pages/Welcome"


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/home" component={Home} />
          <Route exact path="/search-jobs" component={SearchJobs} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router >
    );
  }
}
export default App;



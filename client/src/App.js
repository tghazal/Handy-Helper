import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/pages/Home"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid " >
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;

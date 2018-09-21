//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link active" href="/">Welcome</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Log In</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
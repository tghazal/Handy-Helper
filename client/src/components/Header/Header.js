import React from 'react';
import './Header.css';
import { Navbar, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';

//components
import { Login, Logout } from './components';

const Auth = new AuthService();

class Header extends React.Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.toggle = this.toggle.bind(this);
  }

  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
    Auth.logout();
  }

  render() {
    return (
      <div className="headercolor" >
        <div className="position-absolute w-100 text-center text-light" style={{ zIndex: '9999', pointerEvents: 'none', marginTop: '10px' }} id="hh-title">
          <h3 className="lettercolor1">Handy Helper</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col px-0">
              <Navbar className="headercolor" light expand="md">
                <Link to={localStorage.getItem('id_token') ? '/main/home' : '/'} className="navbar-brand text-light font-weight-bold border rounded p-0" id="brand">
                  <div className="btn px-2 py-1 lettercolor1">
                  H<i className="fa fa-wrench fa-spin fa-3x fa-fw" aria-hidden="true"></i>H
                </div>
                </Link>
                <Nav className="ml-auto" navbar>
                  {localStorage.getItem('id_token') ? <Logout onClick={this.handleLogout.bind(this)} /> : <Login />}
                </Nav>
              </Navbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header

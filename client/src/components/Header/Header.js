import React from 'react';
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
    Auth.logout()
    this.props.history.replace('/login');
  }

  render() {
    return (
      <div className="bg-white" >
        <div className="position-absolute w-100 text-center" style={{ zIndex: '9999', pointerEvents: 'none', marginTop: '10px' }}>
          <h3>Handy Helper</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col px-0">
              <Navbar color="white" light expand="md">
                <Link to={localStorage.getItem('id_token') ? '/home' : '/'} className="navbar-brand">HH</Link>
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

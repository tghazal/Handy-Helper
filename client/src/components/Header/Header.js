import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  state = {
    isOpen: false
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    this.toggle = this.toggle.bind(this);

    return (
      <div className="bg-primary" >
        <div className="position-absolute w-100 text-center" style={{ zIndex: '9999', pointerEvents: 'none', marginTop: '10px' }}>
          <h3>Handy Helper</h3>
        </div>
        <div className="container">
          <div className="row">
            <div className="col px-0">
              <Navbar color="primary" light expand="md">
                <Link to="/" className="navbar-brand">HH</Link>
                <Nav className="ml-auto" navbar>
                  <NavItem style={{ cursor: 'pointer' }}>
                    <Link to="/login" className="nav-link">Login</Link>
                  </NavItem>
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

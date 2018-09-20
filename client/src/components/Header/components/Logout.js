import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Logout extends React.Component {
  render() {
    return (
      <NavItem style={{ cursor: 'pointer' }}>
        <div className="btn btn-primary p-0">
          <Link to="/login" className="nav-link" onClick={this.props.onClick}>
            Logout
          </Link>
        </div>
      </NavItem>
    )
  }
}

export default Logout;
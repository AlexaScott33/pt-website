import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
          <header className="header-container" role="banner">
            <h1>Christina's Website</h1>
        </header>
        <nav className="nav-container">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/abput">About</Link>
            <Link className="nav-link" to="/schedule">Schedule</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </nav>
      </div>
    );
  }
}

export default Header;
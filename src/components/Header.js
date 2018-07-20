import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
          <header className="header-container" role="banner">
            <h1 className="title">Christina's Website</h1>
            <h4 className="sub-title">turning disability into ability</h4>
        </header>
        <nav className="nav-container">
            <Link className="nav-link" to="/home">Home</Link>
            <Link className="nav-link" to="/schedule">Schedule</Link>
            <Link className="nav-link" to="/resources">Resources</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </nav>
      </div>
    );
  }
}

export default Header;
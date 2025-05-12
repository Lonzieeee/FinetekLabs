import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation(); // Get the current location (path)

  // Check if the current page is either '/client' or '/company'
  const isWhiteBackground = location.pathname === '/client' || location.pathname === '/company';

  return (
    <nav className={`navbar ${isWhiteBackground ? 'white-background' : ''}`}>
      <div className="navbar_logo">
        <Link to="/#hero">
          <img src={logo} alt="fineteklabs-logo" />
        </Link>
      </div>
      <ul className="navbar_menu">
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/technologies">Technologies</Link></li>
        <li><Link to="/industries">Industries</Link></li>
        <li><Link to="/client">Client</Link></li>
        <li><Link to="/company">Company</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

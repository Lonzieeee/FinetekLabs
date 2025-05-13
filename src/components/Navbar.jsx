import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';

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
        <li className="dropdown">
          <Link to="/services">Services</Link>
          <div className="dropdown-content">
            <div className="service-section">
              <img src={service1} alt="Service 1" />
              <h2>Product Engineering</h2>
              <p>Leverage our expertise in full life-cycle application design,intergration and management.</p>
              <Link to="/service1">Read More</Link>
            </div>
            <div className="service-section">
              <img src={service2} alt="Service 1" />
              <h2>Cyber-Security</h2>
              <p>We help you audit and Secure your business custom applications for everyday security threats.</p>
              <Link to="/service2">Read More</Link>
            </div>
            <div className="service-section">
              <img src={service3} alt="Service 1" />
              <h2>Dedicated Team</h2>
              <p>Scale your delivery capacity and build projects faster with the help of our top qualified engineers.</p>
              <Link to="/service3">Read More</Link>
            </div>
          </div>
        </li>
        <li><Link to="/technologies">Technologies</Link></li>
        <li><Link to="/industries">Industries</Link></li>
        <li><Link to="/client">Client</Link></li>
        <li><Link to="/company">Company</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

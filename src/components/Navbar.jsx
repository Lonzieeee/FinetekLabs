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
      <div className="navbar_menu">
        <li className="dropdown">
          <Link to="/services">Services</Link>
          <div className="dropdown-content">
            <div className="service-section">
              <img src={service1} alt="Service 1" />
              <h2>Product Engineering</h2>
              <p>Leverage our expertise in full life-cycle application design, integration, and management.</p>
              <Link to="/service1">Read More</Link>
            </div>
            <div className="service-section">
              <img src={service2} alt="Service 2" />
              <h2>Cyber-Security</h2>
              <p>We help you audit and secure your business custom applications for everyday security threats.</p>
              <Link to="/service2">Read More</Link>
            </div>
            <div className="service-section">
              <img src={service3} alt="Service 3" />
              <h2>Dedicated Team</h2>
              <p>Scale your delivery capacity and build projects faster with the help of our top qualified engineers.</p>
              <Link to="/service3">Read More</Link>
            </div>
          </div>
        </li>

        {/* Technologies Dropdown */}
       <li className="dropdown">
  <Link to="/technologies">Technologies</Link>
  <div className="dropdown-content">
    <div className="tech-section">
      <div className="tech-image-container">
        <img id="techImage" src={service1} alt="Technology" />
      </div>
      <div className="vertical-line"></div>
      <div className="tech-text">
        <h2>LABS</h2>
        <p><Link to="/tech1" className="tech-link">Internet Of Things (IoT)</Link></p>
        <p><Link to="/tech2" className="tech-link">Artificial Intelligence</Link></p>
        <p><Link to="/tech3" className="tech-link">Arguemented Reality</Link></p>
        <p><Link to="/tech4" className="tech-link">Cryptography</Link></p>
      </div>
    </div>
  </div>
</li>



        {/* Industries Dropdown */}
         <li className="dropdown">
  <Link to="/industries">INDUSTRIES</Link>
  <div className="dropdown-content">
    <div className="tech-section">
      <div className="tech-image-container">
        <img id="techImage" src={service2} alt="Technology" />
      </div>
      <div className="vertical-line"></div>
      <div className="tech-text">
        <h2>INDUSTRIES</h2>
        <p><Link to="/tech1" className="tech-link">Agriculture</Link></p>
        <p><Link to="/tech2" className="tech-link">Healthcare</Link></p>
        <p><Link to="/tech3" className="tech-link">Human Resource</Link></p>
        <p><Link to="/tech4" className="tech-link">Security</Link></p>
        <p><Link to="/tech4" className="tech-link">Fin-Tech</Link></p>
        <p><Link to="/tech4" className="tech-link">E-Commerce</Link></p>
      </div>
    </div>
  </div>
</li>

        {/* Client Dropdown */}
          <li className="dropdown">
  <Link to="/client">CLIENTS</Link>
  <div className="dropdown-content">
    <div className="tech-section">
      <div className="tech-image-container">
        <img id="techImage" src={service3} alt="Technology" />
      </div>
      <div className="vertical-line"></div>
      <div className="tech-text">
        <h2>LABS</h2>
        <p><Link to="/tech1" className="tech-link"></Link>Our Clients</p>
        <p><Link to="/tech2" className="tech-link"></Link>Case Study</p>
        
      </div>
    </div>
  </div>
</li>

        {/* Company Dropdown */}
        <li className="dropdown">
  <Link to="/company">COMPANY</Link>
  <div className="dropdown-content">
    <div className="tech-section">
      <div className="tech-image-container">
        <img id="techImage" src={service1} alt="Technology" />
      </div>
      <div className="vertical-line"></div>
      <div className="tech-text">
        <h2>COMPANY</h2>
        <p><Link to="/company" className="tech-link">Agriculture</Link></p>
        <p><Link to="/tech2" className="tech-link">Healthcare</Link></p>
        <p><Link to="/tech3" className="tech-link">Human Resource</Link></p>
        <p><Link to="/tech4" className="tech-link">Security</Link></p>
        <p><Link to="/tech4" className="tech-link">Fin-Tech</Link></p>
        <p><Link to="/tech4" className="tech-link">E-Commerce</Link></p>
      </div>
    </div>
  </div>
</li>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="fineteklabs-logo" />
      </div>
      <ul className="navbar_menu">
        {/* Replace <a> tags with <Link> components */}
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

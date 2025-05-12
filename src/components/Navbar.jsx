import React from "react";
import '../styles/Navbar.css';

import logo from '../assets/logo.png';

function Navbar(){
  return(
<nav className="navbar">
    <div className= "navbar_logo">
<img src={logo}alt="fineteklabs-logo" />
    </div>
    <ul className="navbar_menu">
    <li><a href="#services">Services</a></li>
  <li><a href="#technologies">Technologies</a></li>
 <li><a href="#industries">Insustries</a></li>
 <li><a href="#client">Client</a></li>
 <li><a href="#company">Company</a></li>

    </ul>
</nav>
  );
}
export default Navbar;
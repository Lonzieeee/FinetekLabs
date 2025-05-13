// src/components/ServicesDropdownSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ServicesDropdownSection.css";
import img1 from "../assets/service1.jpg";
import img2 from "../assets/service2.jpg";
import img3 from "../assets/service3.jpg";

const ServicesDropdownSection = () => {
  return (
    <div className="services-extra-section">
      <div className="services-horizontal">
        <div className="service-box">
          <img src={img1} alt="Service 1" />
          <p>Short description about Service 1.</p>
          <Link to="/services/service1">Read More</Link>
        </div>
        <div className="service-box">
          <img src={img2} alt="Service 2" />
          <p>Short description about Service 2.</p>
          <Link to="/services/service2">Read More</Link>
        </div>
        <div className="service-box">
          <img src={img3} alt="Service 3" />
          <p>Short description about Service 3.</p>
          <Link to="/services/service3">Read More</Link>
        </div>
      </div>

      <div className="services-vertical-section">
        <div className="vertical-line"></div>
        <div className="vertical-texts">
          <Link to="/services/extra1"><p>Paragraph 4 content...</p></Link>
          <Link to="/services/extra2"><p>Paragraph 5 content...</p></Link>
          <Link to="/services/extra3"><p>Paragraph 6 content...</p></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdownSection;

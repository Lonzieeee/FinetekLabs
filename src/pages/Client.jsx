import React from "react";
import "../styles/Client.css";

// Array of client logo paths (assuming they're in your assets folder)
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.png";
import logo13 from "../assets/logo13.png";
import logo14 from "../assets/logo14.png";
import logo15 from "../assets/logo15.png";

const logos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15
];

function Client() {
  return (
    <div className="client-page">
      <h2 className="client-title">Our Trusted Clients</h2>
      <p className="client-description">
        We’re proud to have worked with leading organizations across industries. Here are some of our amazing partners.
      </p>
      <div className="client-logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Client logo ${index + 1}`}
            className="client-logo"
          />
        ))}
      </div>
    </div>
  );
}

export default Client;

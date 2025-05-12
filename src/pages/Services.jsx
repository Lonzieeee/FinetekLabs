import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <>
      {/* Container for the existing content */}
      <div className="services-container">
        <div className="services-content">
          <div className="services-text">
            <h1>Let us take your company <br /> technology to the next level</h1>
            <p>
              From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development
              of scalable solutions, Fineteklabs delivers a full-cycle software development service that adapts
              seamlessly to your project requirements and business needs.
            </p>
            <button>Let's go</button>
          </div>
        </div>

        {/* SVG for cyclical wave effect */}
        <svg className="wave" viewBox="0 0 1440 320">
          <path
            fill="#f4f6f9"
            fillOpacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,85.3C384,85,480,107,576,112C672,117,768,107,864,117C960,128,1056,160,1152,170.7C1248,181,1344,160,1392,138.7L1440,117V320H0Z"
          ></path>
        </svg>
      </div>

      {/* "Our Services" section below the wave and gradient */}
      <div className="our-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-box">
            <h3>Service 1</h3>
            <p>Description for Service 1</p>
          </div>
          <div className="service-box">
            <h3>Service 2</h3>
            <p>Description for Service 2</p>
          </div>
          <div className="service-box">
            <h3>Service 3</h3>
            <p>Description for Service 3</p>
          </div>
          <div className="service-box">
            <h3>Service 4</h3>
            <p>Description for Service 4</p>
          </div>
          <div className="service-box">
            <h3>Service 5</h3>
            <p>Description for Service 5</p>
          </div>
          <div className="service-box">
            <h3>Service 6</h3>
            <p>Description for Service 6</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;

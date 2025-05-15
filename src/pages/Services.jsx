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

        {/* SVG  wave effect */}
        <svg className="wave" viewBox="0 0 1440 320">
          <path
            fill="#f4f6f9"
            fillOpacity="1"
             d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          ></path>
        </svg>
      </div>


      {/* "Our Services"  */}
      <div className="our-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-box">
            <h3>Software development and engineering</h3>
            <p>Create complex enterprise software, ensure reliable software integration, modernize your legacy system.</p>
          </div>
          <div className="service-box">
            <h3>UX/UI Design</h3>
            <p>Build the product you need on time with an experienced team that uses a clear and effective design process to deliver the desired user experience.</p>
          </div>
          <div className="service-box">
            <h3>Quality Assurance (QA) & Testing</h3>
            <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
          </div>
          <div className="service-box">
            <h3>Security Audit</h3>
            <p>We help you audit and secure your business custom applications from everyday security threats.</p>
          </div>
          <div className="service-box">
            <h3>Migrate to Artificial Intelligence</h3>
            <p>Solve the most difficult challenges in your industry with artificial intelligence.</p>
          </div>
          <div className="service-box">
            <h3>ICT Consultation</h3>
            <p>We help you implement innovative technology solutions for your business, to foster growth and competitiveness.</p>
          </div>
        </div>
      </div>
      <div class="pill-wrapper">
   <div className="round">
       <div class="mask-left"></div>
    </div>
  <div class="dot dot1"></div>
  <div class="dot dot2"></div>
  <div class="dot dot3"></div>
  <div class="dot dot4"></div>
  <div class="dot dot5"></div>
  <div class="dot dot6"></div>
   <div class="dot dot7"></div>


    
        
      </div>
    </>
  );
};

export default Services;

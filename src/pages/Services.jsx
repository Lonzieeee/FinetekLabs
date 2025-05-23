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
      <div class= "Custom">
        <h1>Custom software development lifecycle</h1>
        <p>We employ best practice processes and development methodologies as a foundation for rapid building of cutting-edge technology solutions in a structured and methodical way</p>
      </div>
      <div class="pill-wrapper">
   <div className="round">
       <div class="mask-left"></div>
    </div>
  <div class="dot dot1">
    <span className='dot-label'>Planning</span>
    <span className="tooltip">We Collect all the relevant information from the customer to develop custom software development solutions as per their expectation</span>
  </div>
  <div class="dot dot2">
     <span className='dot-label'>Designing</span>
     <span className="tooltip">The system and documents are prepared as per the requirements specification.This helps us define overall system architecture and technology stack.</span>
  </div>
  <div class="dot dot3">
     <span className='dot-label'>Defining</span>
     <span className="tooltip">Once the requirement analysis phase is completed,the next speed is to define and document software needs.</span>
  </div>
  <div class="dot dot4">
     <span className='dot-label'>Building</span>
     <span className="tooltip">Once the requirement analysis phase is completed,the next speed is to define and document software needs.</span>
  </div>
  <div class="dot dot5">
     <span className='dot-label'>Testing</span>
     <span className="tooltip">Evaluating the quality of software with the aim of finding and fixing defects.</span>
  </div>
  <div class="dot dot6">
     <span className='dot-label'>Deployment</span>
     <span className="tooltip">The final software is released and checked for deployment issues, if any.</span>
  </div>
   <div class="dot dot7">
     <span className='dot-label'>Maintenance</span>
      <span className="tooltip">According to the service level agreement, we ensure that the system is up-to-date with any arising need.</span>
   </div>


    
        
      </div>
      <div className='notes-stack'>
<div className='note note1'>We possess exceptional domain expertise and in-depth knowledge of niche technologies:from solution architecture to firefighting projects.</div>
<div className='note note2'>We ensure our products are delivered in time</div>
<div className='note note3'>We use the latest and most updated technology and development</div>
<div className='note note4'>Goals and milestones can change,we as Finetek also adapt.</div>





      </div>
    </>
  );
};

export default Services;

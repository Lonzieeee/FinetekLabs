import React from "react";
import ceoPhoto from "../assets/ceo.jpg";
import missionImage from "../assets/mission.png";
import "../styles/Company.css"; 

function Company() {
  return (
    <div className="company-page">
      {/* About Us Section */}
      <section className="about-us">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          'Technology plays a key role in our society today. At Fineteklabs, we strive to make the world and life better and of higher quality through technological innovations and advancements. We use technology as a tool and enabler to provide various customers from different industries with efficiency, sustainability while spurring growth.'
        </p>
        <div className="ceo-container">
          <img src={ceoPhoto} alt="CEO" className="ceo-photo" />
          <p className="ceo-name">Kombo Steve, founder</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <div className="stat-number">50+</div>
          <div className="stat-text">Completed Projects</div>
        </div>
        <div className="stat">
          <div className="stat-number">100+</div>
          <div className="stat-text">Satisfied Customers</div>
        </div>
        <div className="stat">
          <div className="stat-number">Up to 75%</div>
          <div className="stat-text">More Reliability</div>
        </div>
        <div className="stat">
          <div className="stat-number">75%</div>
          <div className="stat-text">Available Globally</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-text">
          <h3 className="mission-title">Let's engineer your business</h3>
          <p className="mission-description">
            Here at Fine-tek-labs, we own our work and work as a team to ensure success of our customer projects. Our diverse teams work concurrently to guarantee timely delivery of various set milestones.

            Our engineers go through continuous and competitive innovation and skill advancement courses to guarantee better delivery of customer experiences and to ensure higher standard of disruptive products for our customers and their consumers.
          </p>
        </div>
        <img src={missionImage} alt="Mission" className="mission-image" />
      </section>

      {/* New Content Section */}
      <section className="new-content-section">
        <h3 className="new-content-title">The Story So Far...</h3>
        
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="timeline-title">The Story So Far...</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="content">
              <h3>Jan 2016</h3>
              <p>Founded as an ICT &Fintech Solutions Consultancy Developed a financial -merry go round application for companies</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="content">
              <h3>2017</h3>
              <p>Developed Zalisha -Precision Farming Platform </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="content">
              <h3>Jan 2018</h3>
              <p>Incubated at Chandaria Innovation Center, Featured among key innovative by Business Today Changed our slogan to “Go Beyond”</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="content">
              <h3>Jan 2019</h3>
              <p>Started providing outsourced software development services-For local Kenyan market</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="content">
              <h3>Jan 2020</h3>
              <p>Expanded to offering global software development services across multiple industries Launched truedote.com</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="content">
              <h3>Jan 2021</h3>
              <p>Launched nalipia.com human resource and financial services provider</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="content">
              <h3>Jan 2023</h3>
              <p>Changed our slogan to “Engineering Success”</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;

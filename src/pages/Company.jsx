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
           <div className="stat-number">  75%</div>
          <div className="stat-text">Available Globally</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-text">
          <h3 className="mission-title">Let's engineer your business</h3>
          <p className="mission-description">
           Here at Fine-tek-labs, we own our work and work as a team to ensure success of our customer projects. Our diverse teams work concurrently to guarantee timely delivery of various set milestones

Our engineers go through continuous and competitive innovation and skill advancement courses to guarantee better delivery of customer experiences and to ensure higher standard of disruptive products for our customers and their consumers
          </p>
        </div>
        <img src={missionImage} alt="Mission" className="mission-image" />
      </section>
    </div>
  );
}

export default Company;

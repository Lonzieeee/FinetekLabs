import React from "react";
import ceoPhoto from "../assets/ceo.jpg";
import missionImage from "../assets/mission.png";

function Company() {
  return (
    <div className="company-page">
      {/* About Us Section */}
      <section className="about-us">
        <h2 className="about-us-title">About Us</h2>
        <p className="about-us-text">
          Technology plays a key role in our society today. At Fineteklabs, we strive to make the world and life better and of higher quality through technological innovations and advancements. We use technology as a tool and enabler to provide various customers from different industries with efficiency, sustainability, and growth.
        </p>
        <img src={ceoPhoto} alt="CEO" className="ceo-photo" />
        <p className="ceo-name">John Doe - Co-Founder</p>
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
          <div className="stat-number">Available Globally</div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-text">
          <h3 className="mission-title">Our Mission</h3>
          <p className="mission-description">
            At Fineteklabs, we focus on delivering cutting-edge technology solutions that address the unique needs of each industry we serve. Our mission is to enable businesses to grow, evolve, and become more efficient using technology.
          </p>
        </div>
        <img src={missionImage} alt="Mission" className="mission-image" />
      </section>
    </div>
  );
}

export default Company;

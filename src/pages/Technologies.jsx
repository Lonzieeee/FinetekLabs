import React from 'react';
import '../styles/Technologies.css';
import laptopImage from '../assets/laptop.png'; 

function Technologies() {
  return (
    <>
      {/* Section 1: Become Future Proof */}
      

      {/* Section 2: Technologies with gradient background */}
      <section className="technologies-section">
        <div className="technologies-container">
          <div className="tech-text">
            <p>
              At Fineteklabs, technology is our priority and we have mastered the art.
              We evolve and grow with the industry changes and standards. Our pride lies
              in our experience and expertise, and that guarantees the success of our
              products and customers, across multiple industries.
            </p>
          </div>
          <div className="tech-image">
            <img src={laptopImage} alt="Laptop with technology icons" />
          </div>
        </div>
      </section>
      <section className="future-proof-section">
        <div className="future-left">
          <h2>
            Become Future<br />
            Proof:
          </h2>
          <p>
            Set the <span className="red-accent">pace</span> in<br />
            your <span className="red-accent">space</span>
          </p>
          <button className="start-button">Start now</button>
        </div>
        <div className="future-right">
          {/* You can use absolutely positioned plane graphics here if needed */}
        </div>
      </section>
    </>
  );
}

export default Technologies;

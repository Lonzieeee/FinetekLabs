import React from 'react';
import '../styles/Technologies.css';
import laptopImage from '../assets/laptop.png'; 
import plane from '../assets/setPaceWhite.png'
import blue from '../assets/icon-bend-blue_1@2x.png';

function Technologies() {
  return (
    <>
      
      

      
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
            <img src={laptopImage} alt="Laptop with  icons" />
          </div>
        </div>
      </section>

<section className="top-technologies">
  <h1>Our Top Technologies</h1>
  <div className="top">
    
    <div className="four-sections">
      <div className="internet">
        <h2>Internet Of Things</h2>
        <p>Custom software engineering for connected devices, industrial IoT ecosystems, and smart infrastructure solutions.</p>
      </div>
       <div className="artificial">
        <h2>Artificial intelligence</h2>
        <p>Create systems with integrated AI for reading processing images and videos</p>
      </div>
       <div className="reality">
        <h2>Augmented Reality</h2>
        <p>Build enviromental-interactive systems that respond to real time changes</p>
      </div>
       <div className="crypto">
        <h2>Cryptography</h2>
        <p>Encrypt your data with military-grade encryption ciphers</p>
      </div>
    </div>
    <div className="imga">
      <img src={blue}alt="blue" />
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
          <img src={plane} alt="Laptop with technology icons" />
        </div>
      </section>
    </>
  );
}

export default Technologies;

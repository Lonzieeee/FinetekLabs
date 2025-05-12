import React, { useEffect, useRef } from "react";
import "../styles/WhyFinetek.css";

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

function WhyFinetekLabs() {
  const h2Ref = useRef(null);

  useEffect(() => {
    const h2 = h2Ref.current;

    const restartTyping = () => {
      h2.style.animation = "none";
      void h2.offsetWidth; // Reflow to restart animation
      h2.style.animation = "typing 5s steps(30, end) forwards, blink 0.7s step-end infinite";
    };

    restartTyping(); // Run on mount
    const interval = setInterval(restartTyping, 8000); // Loop every 8s

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="why-section">
      <h2 ref={h2Ref}>Why Fineteklabs..?</h2>
      <p>We are a digital transformation consultancy and software development company that provides cutting edge engineeering solutions, helping top companies and enterprise clients in Kenya and beyond untangle complex issues that always emerge during their digital evolution journey. Since 2016, we have been a visionary and reliable software engineering partner for world-class brands.</p>
      <div className="logo-grid">
        {logos.map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyFinetekLabs;

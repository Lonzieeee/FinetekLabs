import React from "react";
import "../styles/Industries.css"; 

// Importing images
import financeMain from "../assets/finance-main.jpg";
import financeOverlay from "../assets/finance-overlay.jpg";
import manufacturingMain from "../assets/manufacturing-main.jpg";
import manufacturingOverlay from "../assets/manufacturing-overlay.jpg";
import medicalMain from "../assets/medical-main.jpg";
import medicalOverlay from "../assets/medical-overlay.jpg";
import defenseMain from "../assets/defense-main.jpg";
import defenseOverlay from "../assets/defense-overlay.jpg";
import educationMain from "../assets/education-main.jpg";
import educationOverlay from "../assets/education-overlay.jpg";
import retailMain from "../assets/retail-main.jpg";
import retailOverlay from "../assets/retail-overlay.jpg";
import tourismMain from "../assets/tourism-main.webp";
import tourismOverlay from "../assets/tourism-overlay.webp";
import startupsMain from "../assets/startups-main.jpg";
import startupsOverlay from "../assets/startups-overlay.jpg";

const industriesData = [
  {
    title: "Finance",
    description: "Empowering digital transformation in the financial sector.",
    imgA: financeMain,
    imgB: financeOverlay,
  },
  {
    title: "Manufacturing",
    description: "Boosting productivity with smart manufacturing solutions.",
    imgA: manufacturingMain,
    imgB: manufacturingOverlay,
  },
  {
    title: "Medical",
    description: "Innovative technologies that support modern healthcare.",
    imgA: medicalMain,
    imgB: medicalOverlay,
  },
  {
    title: "Defense",
    description: "Advanced solutions tailored for defense and security.",
    imgA: defenseMain,
    imgB: defenseOverlay,
  },
  {
    title: "Education",
    description: "Digital learning environments built for the future.",
    imgA: educationMain,
    imgB: educationOverlay,
  },
  {
    title: "Retail",
    description: "E-commerce and in-store experiences redefined.",
    imgA: retailMain,
    imgB: retailOverlay,
  },
  {
    title: "Tourism",
    description: "Modern tools for travel, exploration, and connection.",
    imgA: tourismMain,
    imgB: tourismOverlay,
  },
  {
    title: "Startups",
    description: "Helping startups scale through innovative technology.",
    imgA: startupsMain,
    imgB: startupsOverlay,
  },
];

function Industries() {
  return (
    <div className="industries-page">
      <section className="industries-hero">
        <div className="industries-hero-wrapper">
          <div className="industries-header-content">
            <h2>Industries We Serve</h2>
            <p>
              We specialize in delivering impactful technology across diverse
              industries to fuel digital growth and innovation.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </section>

      <section className="industries-list">
        {industriesData.map((industry, index) => (
          <div
            className={`industry-item ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
            key={index}
          >
            <div className="industry-text">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
            <div className="industry-images">
              <img src={industry.imgA} alt={`${industry.title} main`} />
              <img
                src={industry.imgB}
                alt={`${industry.title} overlay`}
                className="overlay-img"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Industries;

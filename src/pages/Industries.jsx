import React from "react";
import "../styles/Industries.css"; 


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
    title: "Professional Services & Finance",
    description: "Digital Transformation Services for Professional Services and Financial Sectors. Our services including web design, development, and web marketing strategies will catapult your company ahead of your competitors and grow faster than ever before..",
    imgA: financeMain,
    imgB: financeOverlay,
  },
  {
    title: "Manufacturing Sector",
    description: "Engineering, Construction & Manufacturing sectors requires digital solutions uniquely tailored to their specific needs. We understand how competitive and complex these industries are, and we make software to facilitate growth, efficiency and scalability organically.",
    imgA: manufacturingMain,
    imgB: manufacturingOverlay,
  },
  {
    title: "Medical & Healthcare ",
    description: "With a deep understanding of medical and health landscape, we ensure you stay ahead of your competition with digital HMIS, EMR and telemedicine services that keep you ahead of the rest. A properly designed and developed website is also vital in order to reach the intended audience effectively and provide them with the information they need to make the right decision for their health.",
    imgA: medicalMain,
    imgB: medicalOverlay,
  },
  {
    title: "Defense &Security",
    description: "The defense sector has gone a lot of automation and transformation to guarantee efficiency and security. We tailor make solutions based on artificial intelligence, machine learning among other modern technologies to boost situational awareness, combat preparedness & efficiency in the sector",
    imgA: defenseMain,
    imgB: defenseOverlay,
  },
  {
    title: "Education & Nonprofits",
    description: "Non-Profits and learning institutions require complex monitoring and evaluation tools as well as robust reporting options. We work with many educational institutions to reach new students and faculty, deliver academic content to learners and raise money through online donations, and promote meaningful causes.",
    imgA: educationMain,
    imgB: educationOverlay,
  },
  {
    title: "Retail & Ecommerce",
    description: "Digital Marketing and Web Design and payment integration for Retail & eCommerce. Whether you own an e-commerce store or run a physical storefront, you need a steady now of new and returning customers. And today, the best way to reach them is by prominently being visible online, where they're already looking.",
    imgA: retailMain,
    imgB: retailOverlay,
  },
  {
    title: "Tourism & Hospitality ",
    description: "The tourism and hospitality sector relies heavily on an effective web presence, probably more than any other. The reason for this is because nearly all of their customers go online first to research their travel options before booking anything. We can assist your organization in developing an effective digital strategy designed for growth.",
    imgA: tourismMain,
    imgB: tourismOverlay,
  },
  {
    title: "Startups and Innovators",
    description: "As a startup or small business owner, building brand awareness, a long—term digital marketing strategy will have great importance right from the start. Whether you are in IT Consulting or a Startup that just raised money, there are many benefits to partner with us on an overall software development and web design service, including web development, SEO, brand identity, user experience, and content.",
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
              The most important milestone we have is experience in developing solutions for different industries. From Architectural Engineering &Construction, healthcare, defence, fintech to e-commerce. This has given us room to embed flexibility into the core of our engineering solutions.
            </p>
            <button>Request a quote</button>
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

import React, { useState } from 'react';
import "../styles/WhyChooseUs.css";
import { Typewriter } from "react-simple-typewriter";

function WhyChoose() {
  const [activeCategory, setActiveCategory] = useState("SERVICES");

  const services = [
    { title: "Software Development", description: "Create complex enterprise software, ensure reliable software integration, modernise your legacy system." },
    { title: "Cyber-Security", description: "We help you audit and secure your business custom applications from everyday security threats" },
    { title: "Dedicated development team", description: "Hire a loyal software development team with niche skills and deep expertise" },
    { title: "IT Consulting", description: "We help you implement innovative technology solutions for your business" },
    { title: "UX/UI Design", description: "Build the product you need on time with an experienced team that uses a clear and effective design process." },
    { title: "QA & testing", description: "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software" }
  ];

  const technologies = [
    { title: "Internet of Things", description: "Custom software engineering for connected devices, industrial IoT ecosystems, and smart infrastructure solutions." },
    { title: "Artificial intelligence", description: "Create systems with integrated AI for reading processing images and videos" },
    { title: "Augmented Reality", description: "Build enviromental-interactive systems that respond to real time changes" },
    { title: "Cryptography", description: "Encrypt your data with military-grade encryption ciphers" },
  ];

  const industries = [
    { title: "Agriculture", description: "Use ours systems that help in all agricultural activities including farming, harvesting and harvesting. You can consult our experts for agricultural advice" },
    { title: "Healthcare", description: "Innovative and intelligent systems for improved decision support, patient management and healthcare interconnectivity" },
    { title: "Human Resource", description: "Gain competitive advantage by maximising your employees' performance with our advanced employee management systems" },
    { title: "Fintech", description: "Get your innovative financial solutions developed through our experienced and innovative team" },
    { title: "Security", description: "Get tailored security solutions both for military and security companies" },
    { title: "E-Commerce", description: "Build Attractive and interactive websites and E-commerce systems for your products and services" },
  ];

  const renderBoxes = (data, type) => {
    return (
      <div className={`content-boxes ${type.toLowerCase()}`}>
        {data.map((item, index) => (
          <div key={index} className="content-box">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="why-choose-us">
      <h1 className="typing-head">
              <Typewriter
                words={["Why choose Us..?"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={0}
                delaySpeed={2000}
              />
            </h1>

      <div className="categories">
        {["SERVICES", "TECHNOLOGIES", "INDUSTRIES"].map((cat) => (
          <div
            key={cat}
            className={`category ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            <h3>{cat}</h3>
          </div>
        ))}
      </div>

      <div className="category-content">
        {activeCategory === "SERVICES" && renderBoxes(services, "services")}
        {activeCategory === "TECHNOLOGIES" && renderBoxes(technologies, "technologies")}
        {activeCategory === "INDUSTRIES" && renderBoxes(industries, "industries")}
      </div>
    </section>
  );
}

export default WhyChoose;

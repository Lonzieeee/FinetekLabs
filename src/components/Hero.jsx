import React, { useEffect, useState } from "react";
import "../styles/Hero.css";

import img1 from "../assets/hero1.jpg";
import img2 from "../assets/hero2.jpg";
import img3 from "../assets/hero3.jpg";
import img4 from "../assets/hero4.jpg";
import img5 from "../assets/hero5.jpg";
import img6 from "../assets/hero6.jpg";

const slides = [
  {
    image: img1,
    title: "LET US ENGINEER YOUR BUSINESS SUCCESS",
    text: "Utilize latest technology to grow or modernize your business to the next level.",
    button: "START TODAY",
  },
  {
    image: img2,
    title: "CREATE YOUR INNOVATION TODAY",
    text: "Let's develop your software or hardware innovation today.Utilize coss-cutting expertise to kickstart the next big thing",
    button: "READ MORE",
  },
  {
    image: img3,
    title: "BECOME A.I FIRST",
    text: "Go Intelligent in your industry,from healthcare,to retail,utilize the energy of artificial intelligence to spear head the growth and competitib=veness of your business..",
    button: "READ MORE",
  },
  {
    image: img4,
    title: "ENTERPRISE SOFTWARE DEVELOPMENT",
    text: "Leverage our six-year expertise to create a solid software foundation for your business",
    button: "READ MORE",
  },
  {
    image: img5,
    title: "DEDICATED DEVELOPMENT TEAMS",
    text: "Hire top tech talent and quickly scale your delivery capacity.Our engineers have the necessary niche skills,deep expertise,and are highly loyal.",
    button: "READ MORE",
  },
  {
    image: img6,
    title: "MOBILE APP DEVELOPMENT",
    text: "Delivering on-demand mobile app experiences for startups and enterprise client by leveraging the latest technologies.",
    button: "READ MORE",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero_container">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay" />
            <div className="hero-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <button>{slide.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;

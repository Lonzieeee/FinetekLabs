import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home page sections
import Hero from "./components/Hero";
import ImageSlider from "./components/ImageSlider";
import WhyFinetek from "./components/WhyFinetek";
import WhyChooseUs from "./components/WhyChooseUs";

import SuccessStory from "./components/SuccessStory";
import BlogCommunity from "./components/BlogCommunity";
import ContactUs from "./components/ContactUs";

// Pages for routing
import Services from "./pages/Services";
import Technologies from "./pages/Technologies";
import Industries from "./pages/Industries";
import Client from "./pages/Client";
import Company from "./pages/Company";

import "./components/slider.css";

function MyApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyFinetek />
              <WhyChooseUs />
             
              <ImageSlider />
              
             
              <SuccessStory />
              <BlogCommunity />
              <ContactUs />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/client" element={<Client />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </>
  );
}

export default MyApp;

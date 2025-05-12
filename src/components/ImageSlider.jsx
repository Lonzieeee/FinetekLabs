import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay, Controller } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "swiper/css/controller";

import "./slider.css";

// Main images
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";

// Thumbnails (logos)
import Logo1 from "../assets/True.png";
import Logo2 from "../assets/Buruk.png";
import Logo3 from "../assets/Zal.png";
import Logo4 from "../assets/Cura.png";

const ImageSlider = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img1, img2, img3, img4];
  const thumbnailImages = [Logo1, Logo2, Logo3, Logo4];

  const textContent = [
    {
      title: "Truedote",
      description:
        "Truedote uses artificial intelligence to provide quality diagnostics in medical facilities. Truedote is one of the many products developed by Fineteklabs. Truedote is looking to expand across the globe as a leading diagnostics and healthcare research platform.",
    },
    {
      title: "Buruk non-woven",
      description:
        "Buruk is the leading manufacturer of non woven products in Eastern Africa. FinetekLabs has provided technological investments to enable competitiveness and brand growth across the technological divide.",
    },
    {
      title: "Zalisha",
      description:
        "Zalisha provides small scale farmers precision on mobile phones on Sub-Saharan Africa. Zalisha also works to enable farmers access better markets, record keeping and financial services.",
    },
    {
      title: "Cura International",
      description:
        "The best and most popular real estate management company in Kenya.",
    },
  ];

  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    setActiveIndex(index);

    if (thumbsSwiper && thumbsSwiper.slideTo) {
      thumbsSwiper.slideTo(index);
    }
  };

  return (
    <div className="slider-container">
      {/* Typing heading */}
      <h1 className="typing-heading">
        <Typewriter
          words={["Our Success Story..."]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={0}
          delaySpeed={2000}
        />
      </h1>

      {/* Top section: image + text side by side */}
      <div className="slider-top">
        <div className="slider-left">
          <Swiper
            onSwiper={setMainSwiper}
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            spaceBetween={10}
            navigation={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSlideChange={handleSlideChange}
            controller={{ control: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay, Controller]}
            className="mainSwiper"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="main-slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="slider-text">
          <h2>{textContent[activeIndex].title}</h2>
          <p>{textContent[activeIndex].description}</p>
        </div>
      </div>

      <div className="slider-thumbs">
        <Swiper
          onSwiper={setThumbsSwiper}
          controller={{ control: mainSwiper }}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Controller]}
          className="thumbSwiper"
        >
          {thumbnailImages.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Logo ${index}`}
                className={`thumb-slide ${
                  index === activeIndex ? "active-thumb" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;

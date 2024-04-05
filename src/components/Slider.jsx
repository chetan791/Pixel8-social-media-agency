import React, { useState, useEffect } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "../css/slider.css";

const ImageSlider = ({ images, interval = 3000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images, interval]);

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        <div
          className="slide"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
      </div>
      <div className="navigation-arrows">
        <p className="arrow-icon" onClick={goToPrevSlide}>
          ←
        </p>
        <p className="arrow-icon" onClick={goToNextSlide}>
          →
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;

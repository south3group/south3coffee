import React, { useState, useEffect } from 'react';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
import './Carousel.scss';

const Carousel = ({ autoPlay = true, interval = 5000 }) => {
  const [current, setCurrent] = useState(0); //起始狀態：第一張輪播圖
  const slides = [<Carousel1 />, <Carousel2 />, <Carousel3 />];
  const length = slides.length;

  useEffect(() => {
    if (!autoPlay) return;

    // 5s自動循環播放
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, length]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const lastSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          key={index}
        >
          <img src={slide.image} alt={slide.title} />
          <div className="carousel-caption">
            <h3>{slide.title}</h3>
          </div>
        </div>
      ))}

      {/* 底部圓點點 */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={index === current ? 'active' : ''}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 左右箭頭 */}
      <button
        className="carousel-arrow left"
        onClick={lastSlide}
        aria-label="Previous Slide"
      >
        ❮
      </button>
      <button
        className="carousel-arrow right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;

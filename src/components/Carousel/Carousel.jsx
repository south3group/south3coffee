import React, { useState, useEffect, useRef } from 'react';
import Carousel1 from './Carousel1';
import Carousel2 from './Carousel2';
import Carousel3 from './Carousel3';
import './Carousel.scss';

const Carousel = ({ autoPlay = true, interval = 15000 }) => {
  const [current, setCurrent] = useState(0); //起始狀態：第一張輪播圖
  const slides = [
    { component: <Carousel1 />, id: 'carousel1' },
    { component: <Carousel2 />, id: 'carousel2' },
    { component: <Carousel3 />, id: 'carousel3' },
  ];
  const length = slides.length;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    // 10s自動循環播放
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, length]);

  useEffect(() => {
    if (!isMobile) return; // 桌面不自動調整高度
    if (carouselRef.current && slideRefs.current[current]) {
      const height = slideRefs.current[current].offsetHeight;
      carouselRef.current.style.height = `${height}px`;
    }
  }, [current, isMobile]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  return (
    <div className="carousel-container" ref={carouselRef}>
      <div className="carousel-content">
        {slides.map((slide, index) => (
          <div
            className={`carousel-slide ${index === current ? 'opacity-100' : ''}`}
            key={slide.id}
            ref={(el) => (slideRefs.current[index] = el)}
            style={{ transition: 'opacity 0.6s ease-in-out' }}
          >
            {slide.component}
          </div>
        ))}

        <div className="carousel-footer">
          <button
            className="carousel-nav-button left d-md-none rounded-0"
            onClick={previousSlide}
            aria-label="Previous Slide"
          >
            ❮
          </button>
          {/* 底部圓點 */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="carousel-nav-button right d-md-none rounded-0"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            ❯
          </button>
        </div>

        {/* 左右箭頭 */}
        <button
          className="carousel-nav-button left d-none d-md-block rounded-0"
          onClick={previousSlide}
          aria-label="Previous Slide"
        >
          ❮
        </button>
        <button
          className="carousel-nav-button right d-none d-md-block rounded-0"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;

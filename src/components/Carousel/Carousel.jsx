import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({
  slides = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  showIndicators = true,
  showArrows = true,
  height = '60vh',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!slides.length) {
    return (
      <div
        className="carousel-section d-flex align-items-center justify-content-center"
        style={{ height }}
      >
        <p className="text-muted">暫無輪播內容</p>
      </div>
    );
  }

  return (
    <div
      className="carousel-section carousel slide position-relative"
      style={{ height }}
    >
      <div className="carousel-inner h-100">
        {slides.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`carousel-item h-100 ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: slide.image
                ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`
                : undefined,
              backgroundColor: slide.backgroundColor || '#333',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="d-flex align-items-center justify-content-center h-100">
              <div className="text-white text-center slide-content">
                {slide.title && <h3 className="mb-3">{slide.title}</h3>}
                {slide.subtitle && <p className="mb-4">{slide.subtitle}</p>}
                {slide.content && (
                  <div className="slide-custom-content">{slide.content}</div>
                )}
                {slide.button && (
                  <button
                    className="btn btn-primary"
                    onClick={slide.button.onClick}
                  >
                    {slide.button.text}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showArrows && slides.length > 1 && (
        <>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </>
      )}

      {showIndicators && slides.length > 1 && (
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === currentSlide ? 'active' : ''}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;

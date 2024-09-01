import React, { useState } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const goToPrevSlide = () => {
    const newSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const goToNextSlide = () => {
    const newSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className='SliderBack' id='home'>
      <div id="carouselExampleIndicators" className="carousel slide">
        <ol className="carousel-indicators">
          <li className={currentSlide === 0 ? 'active' : ''} onClick={() => setCurrentSlide(0)}></li>
          <li className={currentSlide === 1 ? 'active' : ''} onClick={() => setCurrentSlide(1)}></li>
          <li className={currentSlide === 2 ? 'active' : ''} onClick={() => setCurrentSlide(2)}></li>
        </ol>
        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''} ${currentSlide === 0 ? 'fade-in' : 'fade-out'}`}>
            
          </div>
          <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''} ${currentSlide === 1 ? 'fade-in' : 'fade-out'}`}>
            
          </div>
          <div className={`carousel-item ${currentSlide === 2 ? 'active' : ''} ${currentSlide === 2 ? 'fade-in' : 'fade-out'}`}>
            
          </div>
        </div>
        <a className="carousel-control-prev y-2" href="#carouselExampleIndicators" role="button" onClick={goToPrevSlide}>
          <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next y-3s" href="#carouselExampleIndicators" role="button" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon"  aria-hidden="true"></span>
          <span className="sr-only next"> Next</span>
        </a>
      </div>
    </div>
  );
}

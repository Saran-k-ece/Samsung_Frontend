import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Header.css';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { type: 'video', src: assets.video2, title: 'Galaxy Z Fold6 | Z Flip6' },
    { type: 'video', src: assets.video6, title: 'Galaxy S24 Ultra' },
    { type: 'image', src: assets.samsung11, title: 'Gear up for campus with' },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };
 
  return (
    <section className="header-section">
      <div className="container">
        <div className="carousel-wrapper">
          <ul className="carousel">
            {slides.map((slide, index) => (
              <li key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
               
                {slide.type === 'video' ? (
                  <video
                    src={slide.src}
                    autoPlay 
                    loop 
                    muted
                    className="media-content"
                  ></video>
                ) : (
                  <img
                    src={slide.src}
                    alt={slide.title}
                    className="media-content"
                  />
                )}

                <div className="content-overlay">
                  <div className="text-content">
                    <h2>{slide.title}</h2>

                    {index === 1 && (
                      <p>Avail benefits worth Rs.12000</p>
                    )}
                    
                    <div className="buttons">
                    <p className="learn-more">Learn more</p>
                      <button className="buy-now1">Buy now</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="navigation">
            <button onClick={handlePrevious} className="nav-button previous">
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>


            </button>

            <button onClick={handleNext} className="nav-button next">
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;

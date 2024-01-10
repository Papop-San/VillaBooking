import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Slider({ images, title }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setSlideIndex(index);
  };

  return (
    <div id='slider' className='flex flex-col items-center justify-center w-full h-full mt-[2rem]'>
      <h1>{title}</h1>
      {images && images.length > 0 && (
        <>
          <div className='slider-container relative w-full max-w-screen overflow-hidden' style={{ height: '80vh' }}>
            {/* Transition Class for Smooth Sliding */}
            <div
              className='slider-img flex transition-transform duration-500 ease-in-out'
              style={{
                transform: `translateX(-${slideIndex * (100 / images.length)}%)`,
                width: `${images.length * 100}%`,
              }}
            >
              {images.map((banner, index) => (
                <div
                  key={index}
                  className='w-full h-[80vh] object-cover relative'
                  style={{ flex: `0 0 ${100 / images.length}%` }}
                >
                  <div className="text-overlay absolute flex flex-col items-center text-white top-[10rem] left-[20rem]">
                    <h1 className='bg-white w-auto h-auto text-base p-2 mr-[25rem] font-medium'>
                      <span className='text-black'>{banner.header.split(',')[0]},</span>{""}
                      <span className='text-[#f35525]'> {banner.header.split(',')[1]}</span>
                    </h1>
                    <h2 className='text-[60px] w-[560px] font-black'>
                      {banner.details}
                    </h2>
                  </div>
                  <img
                    src={banner.image}
                    alt={`Slide ${index + 1}`}
                    className='w-full h-full object-cover'
                  />
                </div>
              ))}
            </div>

            {/* Dot Function */}
            <div className="dots-container absolute bottom-4 left-[20%] transform -translate-x-1/2 flex items-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === slideIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: index === slideIndex ? '#f35525' : 'white',
                    opacity: '0.7',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease-in-out',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Previous and Next Slide Buttons */}
          <button
            style={{ backgroundColor: 'rgba(220, 220, 220, 0.5)' }}
            className='btn-prev absolute mr-[107rem] text-white p-4 rounded-full hover:opacity-80'
            onClick={prevSlide}
          >
            <KeyboardArrowLeftIcon />
          </button>

          <button
            style={{ backgroundColor: 'rgba(220, 220, 220, 0.5)' }}
            className='btn-next absolute ml-[107rem] text-white p-4 rounded-full hover:opacity-80'
            onClick={nextSlide}
          >
            <KeyboardArrowRightIcon />
          </button>
        </>
      )}
    </div>
  );
}

export default Slider;

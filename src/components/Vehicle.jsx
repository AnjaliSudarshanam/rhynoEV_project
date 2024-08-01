import React, { useState, useEffect, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function Vehicle() {
  const slides = [
    { url: 'assets/black.png' },
    { url: 'assets/blue.png' },
    { url: 'assets/red.png' },
    { url: 'assets/golden.png' },
    { url: 'assets/img.jpg' },
    { url: 'assets/crossview.png' },
    { url: 'assets/crossview2.png' },
    { url: 'assets/grp.png' },
    { url: 'assets/grp2.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [nextSlide]); // Include nextSlide in the dependency array

  return (
    <div className='max-w-full h-[540px] w-full m-auto bg-cover px-3 bg-white relative group'>
      <div className='w-full h-[400px] sm:h-[500px] md:h-[640px] overflow-hidden'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-center bg-contain bg-no-repeat duration-450'
        ></div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicle;

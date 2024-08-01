import React from 'react';
import './ProductCheckoutButtons.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const ProductCheckoutButtons = () => {
  const slides = [
    { url: 'assets/blue.png', description: 'Rhyno electric scooter: 2000W motor, 80-100km range, fire-safe LFP battery, 2.7kWh. Thrilling, safe, efficient ride.' },
    { url: 'assets/crossview.png', description: 'Rhyno electric scooter: 2000W motor, 80-100km range, fire-safe LFP battery, 2.7kWh. Thrilling, safe, efficient ride.' },
    { url: 'assets/red.png', description: 'Rhyno electric scooter: 2000W motor, 80-100km range, fire-safe LFP battery, 2.7kWh. Thrilling, safe, efficient ride.' },
  ];

  return (
    <div className= 'max-w-6xl w-full mx-auto mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 '>
      {slides.map((slide, index) => (
        <div key={index} className='flip-card h-[300px] object-cover'>
          <div className='flip-card-inner'>
            <div className='flip-card-front '>
              <img src={slide.url} alt={`SE03 ${index}`} className='rounded-xl shadow-md w-full' />
              
            </div>
            <div className='flip-card-back'>
              <p className='text-white text-xl font-semibold mt-4'>{slide.description}</p>
              <button className='bg-[#BAB408] text-black w-[200px] rounded-md font-medium my-4 mt-2 mx-auto py-3'>
                <Link to="/products/products">Preview</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCheckoutButtons;

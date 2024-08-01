import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SE03 = () => {
  // Store image URLs in a constant object
  const imageUrls = {
    black: '/assets/black.png',
    blue: '/assets/blue.png',
    red: '/assets/red.png',
  };


  // State to manage the currently selected vehicle image
  const [selectedImage, setSelectedImage] = useState(imageUrls.black);

  return (
    <div className="container text-white mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Vehicle Image */}
        <div className="md:w-1/2 mb-4 bg-white rounded-2xl md:mb-0">
          <img 
            src={selectedImage} 
            alt="SE03" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          {/* Color Selection Buttons */}
          <div className="mb-4">
            <h2 className="text-2xl text-[#BAB408] font-bold mb-2">Select Color</h2>
            <div className="flex space-x-4">
              <button 
                className="w-12 h-12 rounded-full border-2 border-gray-700 overflow-hidden"
                onClick={() => setSelectedImage(imageUrls.black)}
                aria-label="Black color"
              >
                <div className="w-full h-full bg-black"></div>
              </button>
              <button 
                className="w-12 h-12 rounded-full border-2 border-gray-700 overflow-hidden"
                onClick={() => setSelectedImage(imageUrls.blue)}
                aria-label="Blue color"
              >
                <div className="w-full h-full bg-blue-500"></div>
              </button>
              <button 
                className="w-12 h-12 rounded-full border-2 border-gray-700 overflow-hidden"
                onClick={() => setSelectedImage(imageUrls.red)}
                aria-label="Red color"
              >
                <div className="w-full h-full bg-red-500"></div>
              </button>
            </div>
          </div>
          {/* Textual Details */}
          <h1 className="text-2xl text-[#BAB408] font-bold mb-4">Rhyno SE03</h1>
          <p className="mb-4">
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
          </p>
          {/* Specification Table */}
          <table className="w-full text-left mb-6 border-collapse">
            <tbody>
              <tr>
                <td className="border p-2 font-semibold">Battery</td>
                <td className="border p-2">2.7Kwh</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Battery features</td>
                <td className="border p-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Battery warranty</td>
                <td className="border p-2">3 Years</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Charging time</td>
                <td className="border p-2">4 hours (12A)</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Motor</td>
                <td className="border p-2">1500W</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Max speed</td>
                <td className="border p-2">55 km/h</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Warranty on electronics</td>
                <td className="border p-2">1 year</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Max range (@30km/h)</td>
                <td className="border p-2">150 km</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Max range (@45km/h)</td>
                <td className="border p-2">110 km</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Max range (@full speed)</td>
                <td className="border p-2">90 km</td>
              </tr>
              <tr>
                <td className="border p-2 font-semibold">Other key benefits</td>
                <td className="border p-2">Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</td>
              </tr>
            </tbody>
          </table>
          {/* Buy Now Button */}
          <div className="mt-6">
            <Link to="/prebook" className="inline-block px-6 py-3 bg-[#BAB408] rounded-lg text-lg font-semiboldhover:bg-gray-600 text-black">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SE03;

import React from 'react';
import { Link } from 'react-router-dom';

const ComparePage = () => {
  return (
    <div className="container text-white mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center">
        {/* Vehicle Image */}
        <div className="md:w-1/2 mb-4 bg-white rounded-2xl md:mb-0">
          <img 
            src="/assets/grp2.png" // Replace with your comparison image URL
            alt="Compare SE03 Lite, SE03, and SE03 Max" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          {/* Comparison Table */}
          <h2 className="text-2xl font-bold text-[#BAB408] mb-4">Compare All Models</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left mb-6 border border-gray-700 border-collapse">
              <thead>
                <tr>
                  <th className="p-2">Specification</th>
                  <th className="p-2">Rhyno SE03 Lite</th>
                  <th className="p-2">Rhyno SE03</th>
                  <th className="p-2">Rhyno SE03 Max</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 font-semibold">Battery</td>
                  <td className="p-2">1.8Kwh</td>
                  <td className="p-2">2.7Kwh</td>
                  <td className="p-2">2.7Kwh</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Battery Features</td>
                  <td className="p-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
                  <td className="p-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
                  <td className="p-2">LFP with 1500 cycles, Active Balancing, Waterproof (IP67)</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Battery Warranty</td>
                  <td className="p-2">3 years</td>
                  <td className="p-2">3 Years</td>
                  <td className="p-2">3 Years</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Charging Time</td>
                  <td className="p-2">3 hours (12A)</td>
                  <td className="p-2">4 hours (12A)</td>
                  <td className="p-2">4 hours (12A)</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Motor</td>
                  <td className="p-2">1500W</td>
                  <td className="p-2">1500W</td>
                  <td className="p-2">2000W</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Max Speed</td>
                  <td className="p-2">55 km/h</td>
                  <td className="p-2">55 km/h</td>
                  <td className="p-2">65 km/h</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Warranty on Electronics</td>
                  <td className="p-2">1 year</td>
                  <td className="p-2">1 year</td>
                  <td className="p-2">1 year</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Max Range (@30km/h)</td>
                  <td className="p-2">100 km</td>
                  <td className="p-2">150 km</td>
                  <td className="p-2">120 km</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Max Range (@45km/h)</td>
                  <td className="p-2">90 km</td>
                  <td className="p-2">110 km</td>
                  <td className="p-2">100 km</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Max Range (@Full Speed)</td>
                  <td className="p-2">60 km</td>
                  <td className="p-2">90 km</td>
                  <td className="p-2">80 km</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">Other Key Benefits</td>
                  <td className="p-2">Fire-safe Battery, Range prediction, Comfortable ride, Stable and safe</td>
                  <td className="p-2">Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</td>
                  <td className="p-2">Fire-safe battery, Range prediction, Comfortable ride, Stable and safe</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Buy Now Button */}
          <div className="mt-6">
            <Link to="/prebook" className="inline-block px-6 py-3 bg-[#BAB408] rounded-lg text-lg font-semibold hover:bg-gray-600 text-black">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparePage;

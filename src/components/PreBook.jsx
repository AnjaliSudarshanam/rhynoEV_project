import React, { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';

const PreBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vehicle: 'SE03 Lite', // Default vehicle
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would integrate with your payment gateway
    alert('Booking submitted!'); // Placeholder alert
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-[#BAB408] text-center mb-8">Pre-Book Your Vehicle</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="vehicle" className="block text-gray-300">Select Vehicle</label>
          <select
            id="vehicle"
            name="vehicle"
            value={formData.vehicle}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            required
          >
            <option value="SE03 Lite">SE03 Lite</option>
            <option value="SE03">SE03</option>
            <option value="SE03 Max">SE03 Max</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <FaCreditCard size={20} className="mr-2" />
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default PreBook;

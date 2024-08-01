import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const products = [
  { name: 'SE03', image: '/assets/blue.png', link: '/products/se03' },
  { name: 'SE03 Lite', image: '/assets/black.png', link: '/products/se03-lite' },
  { name: 'SE03 Max', image: '/assets/red.png', link: '/products/se03-max' },
];

const ProductsPage = () => {
  return (
    <div className="container mx-auto text-[#BAB408] p-4 mt-16">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="p-4 border bg-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-transform"
          >
            <Link to={product.link}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4 rounded-lg"
              />
            </Link>
            <h2 className="text-xl text-black font-semibold text-center">{product.name}</h2>
          </div>
        ))}
      </div>
      <div className="text-center mb-8">
        <p className="mb-4 font-bold text-white text-xl">
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
        </p>
        <p className="mb-4 font-bold text-white text-xl">
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://play.google.com/store/apps"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlay size={20} className="mr-2" />
            Android
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaApple size={20} className="mr-2" />
            Apple
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

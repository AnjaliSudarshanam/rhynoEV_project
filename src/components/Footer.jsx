import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 mt-auto">
      <div className="text-gray-700 px-4 sm:px-6 lg:px-8 text-center sm:text-left text-sm">Quick Links</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-white">Refund Policy</a></li>
              <li><a href="/website-policy" className="hover:text-white">Website Policy</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Products</h3>
            <ul className="space-y-2">
              <li><a href="/products/products" className="hover:text-white">Products</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Career</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company" target="_blank" rel="noopener noreferrer" className="hover:text-white">Career</a></li>
              <li><a href="/products/products" className="hover:text-white">Rentals</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-2">Social Media</h3>
            <ul className="space-x-4 flex items-center">
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram size={20} /></a></li>
              <li><a href="https://www.linkedin.com/company" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin size={20} /></a></li>
              <li><a href="https://www.twitter.com/company" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter size={20} /></a></li>
              <li><a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaWhatsapp size={20} /></a></li>
            </ul>
          </div>
        </div>
        <div className="text-gray-500 text-center mt-4">© 2024 Rhyno Rentals</div>
      </div>
    </footer>
  );
}

export default Footer;

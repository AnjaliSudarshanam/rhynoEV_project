import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [expandProducts, setExpandProducts] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleProducts = () => {
    setExpandProducts(!expandProducts);
  };

  const closeMobileMenu = () => {
    setNav(false);
    setExpandProducts(false);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo Image */}
      <a href="/" onClick={closeMobileMenu}>
      <img 
          src='/assets/Logo.png' // Replace with the actual path to your logo
          alt='RHYNOEV Logo'
          className='w-15 h-8 ml-5' // Adjust the size and margin as needed
        />
      </a>
      <h1 className='w-full text-3xl font-bold text-[#BAB408]'>
        <a href="/" onClick={closeMobileMenu}>RHYNOEV</a>
      </h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to="/" className="hover:text-gray-300" onClick={closeMobileMenu}>Home</Link>
        </li>
        <li className='p-4'>
          <Link to="/about" className="hover:text-gray-300" onClick={closeMobileMenu}>About</Link>
        </li>
        <li className='p-4 relative'>
          <span onClick={handleProducts} className='cursor-pointer hover:text-gray-300'>
            <Link to="/products/products" className="hover:text-white" onClick={closeMobileMenu}>Produtcs</Link>
          </span>
          {expandProducts && (
            <ul className='absolute left-0 mt-2 w-40 bg-gray-800 border border-gray-700'>
              <li className='p-2'>
                <Link to="/products/se03" className="hover:text-white" onClick={closeMobileMenu}>SE03</Link>
              </li>
              <li className='p-2'>
                <Link to="/products/se03-lite" className="hover:text-white" onClick={closeMobileMenu}>SE03 Lite</Link>
              </li>
              <li className='p-2'>
                <Link to="/products/se03-max" className="hover:text-white" onClick={closeMobileMenu}>SE03 Max</Link>
              </li>
              <li className='p-2'>
                <Link to="/products/compare" className="hover:text-white" onClick={closeMobileMenu}>Compare All</Link>
              </li>
            </ul>
          )}
        </li>
        <li className='p-4'>
          <Link to="/prebook" className="hover:text-gray-300" onClick={closeMobileMenu}>Prebook</Link>
        </li>
        <li className='p-4'>
          <Link to="/contact" className="hover:text-gray-300" onClick={closeMobileMenu}>Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:open:fixed hover:cursor-pointer z-50'>
        {!nav ? <AiOutlineMenu size={20} color='#BAB408' /> : <AiOutlineClose size={20} color='#BAB408' />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[50%] h-full bg-gray-800 z-40 ease-in-out duration-500' : 'fixed left-[-100%] top-0 w-full h-full z-40 ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-[#BAB408] mt-[35px] p-4'>
          <a href="/" onClick={closeMobileMenu}>RHYNOEV</a>
        </h1>
        <ul className='uppercase p-4'>
          <li className='p-4 border-b border-gray-700'>
            <Link to="/" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='p-4 border-b border-gray-700'>
            <Link to="/about" onClick={closeMobileMenu}>About</Link>
          </li>
          <li className='p-4 border-b border-gray-700 relative'>
            <span onClick={handleProducts} className='cursor-pointer hover:text-gray-300'>
              <Link to="/products/products" className="hover:text-white" onClick={closeMobileMenu}>Produtcs</Link>
            </span>
            {expandProducts && (
              <ul className='absolute left-0 mt-2 w-40 bg-gray-800 border border-gray-700 z-50'>
                <li className='p-2'>
                  <Link to="/products/se03" className="hover:text-white" onClick={closeMobileMenu}>SE03</Link>
                </li>
                <li className='p-2'>
                  <Link to="/products/se03-lite" className="hover:text-white" onClick={closeMobileMenu}>SE03 Lite</Link>
                </li>
                <li className='p-2'>
                  <Link to="/products/se03-max" className="hover:text-white" onClick={closeMobileMenu}>SE03 Max</Link>
                </li>
                <li className='p-2'>
                  <Link to="/products/compare" className="hover:text-white" onClick={closeMobileMenu}>Compare All</Link>
                </li>
              </ul>
            )}
          </li>
          <li className='p-4 border-b border-gray-700'>
            <Link to="/prebook" onClick={closeMobileMenu}>Prebook</Link>
          </li>
          <li className='p-4'>
            <Link to="/contact" onClick={closeMobileMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

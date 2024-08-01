import React from 'react'
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#BAB408] md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          "Let's Elevate Your Ride Experience With Rhyno
        </p>
        <div className='justify-center items-center mt-2'>
            <p className='text-gray-650 md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'>
              Where Superiority Meets
            </p>
            <ReactTyped className='text-[#BAB408] md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 py-4' strings ={[' Style.',' Elegance.',' Minimalism.',' Comfort.']} typespeed={120} backspeed={140} loop/>
            <button className='flex justify-center bg-[#BAB408] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
              <Link to="/prebook">BOOK NOW</Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

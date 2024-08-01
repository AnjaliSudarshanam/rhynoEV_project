import React from 'react';
import { Link } from 'react-router-dom';

const PreBookButton = () => {
  return (
    <div className='fixed bottom-10 right-10'>
      <button className='bg-[#BAB408] text-black p-4 rounded-3xl shadow-lg'>
      <Link to="/prebook">Pre-book Now</Link>
      </button>
    </div>
  );
};

export default PreBookButton

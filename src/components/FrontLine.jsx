import React from 'react';
import ProductCheckoutButtons from './ProductCheckoutButtons';
import OurUSP from './OurUSP';
import PreBookButton from './PreBookButton';

const FrontLine = () => {
  return (
    <div>
      <section className='my-8'>
        <OurUSP />
      </section>
      
      <section className='my-8'>
        <ProductCheckoutButtons />
      </section>

      <PreBookButton />
    </div>
  );
};

export default FrontLine;

import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import './OurUsp.css';

const carouselItems = [
  {
    title: "LFP Battery",
    description: "Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!",
  },
  {
    title: "Wider tyres",
    description: "Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.",
  },
  {
    title: "Range prediction",
    description: "Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.",
  },
  {
    title: "Extraordinery Experience",
    description: "Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!",
  },
  {
    title: "Rugged and simple Design",
    description: "We've had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!",
  }
];

const OurUsp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === carouselItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="carousel-container bg-black bg-cover">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-item">
              <div className="carousel-content">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="mt-4  text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {carouselItems.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="carousel-dot"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <button onClick={prevSlide} className="carousel-button">Previous</button>
        <button onClick={nextSlide} className="carousel-button">Next</button>
      </div>
    </div>
  );
};

export default OurUsp;

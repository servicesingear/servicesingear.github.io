// components/HeroSection.jsx
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = ({ backgroundImage, headlines, subtext }) => {
  return (
    <section className="text-center h-[300px] md:h-[400px] py-24 md:py-32 text-white relative overflow-hidden mb-12">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-3xl md:text-5xl font-bold mb-4 text-white">
          <Typewriter
            words={headlines}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p className="text-base sm:text-sm md:text-lg max-w-xl mx-auto text-gray-300">
          {subtext}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

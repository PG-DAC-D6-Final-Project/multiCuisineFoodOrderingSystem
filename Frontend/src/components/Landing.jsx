import React from 'react';
import landingBg from '../assets/resources/LandingImage.jpg';

const Landing = () => {
  return (
    <div className="h-[80vh] relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        src={landingBg}
        alt="Landing Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content on top of image */}
      <div className="relative text-center text-white px-4 rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4 text-gray-700">Find your favorite food</h1>
        <input
          type="text"
          placeholder="Search for food or restaurants..."
          className="w-full max-w-md px-4 py-2 rounded shadow text-black"
        />
      </div>
    </div>
  );
};

export default Landing;

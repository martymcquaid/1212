import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ocean-blue-600 to-white flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-gradient-to-r from-ocean-blue to-fresh-green bg-clip-text text-transparent leading-tight">
        Professional Carpet Cleaning Across Northern Ireland
      </h1>
      <p className="text-xl mt-4 max-w-2xl">
        Fast, affordable, eco-friendly cleaning for homes & businesses.
      </p>
      <div className="mt-8 flex space-x-4">
        <button className="bg-gradient-to-r from-ocean-blue-600 to-fresh-green-600 px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
          Get a Free Quote
        </button>
        <button className="border-2 border-ocean-blue-600 text-ocean-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-ocean-blue-600 hover:text-white transition-all duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Home;
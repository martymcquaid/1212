import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center text-ocean-blue-600 mb-8">About Us</h2>
      <p className="text-lg text-gray-700">
        Welcome to Northern Ireland Carpet Cleaning Company, your trusted partner for quality and eco-friendly carpet cleaning services. Our mission is to provide our community with the cleanest carpets, upholstery, and more, backed by our commitment to customer satisfaction and environmental responsibility.
      </p>
      <div className="flex items-center mt-12">
        <img className="w-48 h-48 rounded-full mr-8" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" alt="Team" />
        <div>
          <h3 className="text-2xl font-bold text-fresh-green-600">Our Team</h3>
          <p className="mt-4 text-gray-600">
            Our team consists of experienced professionals dedicated to delivering the best service in Northern Ireland. We take pride in our work and strive for excellence in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
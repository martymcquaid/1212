import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-4xl font-semibold text-center text-ocean-blue-600 mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Carpet Cleaning', 'Upholstery Cleaning', 'Rug Cleaning', 'Commercial Services', 'Stain Removal', 'Mattress Cleaning'].map((service) => (
          <div key={service} className="bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-fresh-green-600">{service}</h3>
            <p className="mt-4 text-gray-600">Experience top-notch {service.toLowerCase()} with our expert team.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center text-ocean-blue-600 mb-8">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg text-gray-800">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-ocean-blue-500" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-lg text-gray-800">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-ocean-blue-500" placeholder="Your Email" />
        </div>
        <div>
          <label className="block text-lg text-gray-800">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-ocean-blue-500" rows={4} placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="bg-gradient-to-r from-ocean-blue-600 to-fresh-green-600 px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
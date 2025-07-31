"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import certificate from '../../../public/footer/footer.jpg';


const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const roomTypes = [
    { name: 'Delux Room', href: '/rooms/delux' },
    { name: 'Delux Room with kitchen', href: '/rooms/delux1rk' },
    { name: 'Standard One Bedroom Apartment', href: '/rooms/standard1bhk' },
    { name: 'Superior One Bedroom Apartment', href: '/rooms/sup1bhk' },
    { name: 'Standard Two Bedroom Apartment', href: '/rooms/standard2bhk' },
    { name: 'Standard Three Bedroom Apartment', href: '/rooms/standard3bhk' },
    { name: 'Superior Three Bedroom Apartment', href: '/rooms/sup3bhk' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <footer className="bg-[#222222] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Our Apartments Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100 tracking-wider uppercase">
              Our Apartments
            </h3>
            <ul className="space-y-3">
              {roomTypes.map((room, index) => (
                <li key={index}>
                  <Link
                    href={room.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            {/* Certificate */}
            <div className=" mb-4 sm:mb-6">
              <Image
                src={certificate}
                alt="Certificate of Excellence"
                width={300}
                height={200}
                className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto"
              />
            </div>

            {/* Good Read Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">
                Good Read
              </h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-green-400 transition-colors duration-200 italic text-sm sm:text-base"
                >
                  Feel At Home While Travelling to Gurgaon
                </Link>
                <Link
                  href="#"
                  className="block text-gray-400 hover:text-green-400 transition-colors duration-200 italic text-sm sm:text-base"
                >
                  Why Serviced Apartments Better Than Hotels?
                </Link>
              </div>
            </div>
          </div>

          {/* Call Me Back Form */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-100 tracking-wider uppercase">
              Call Me Back
            </h3>
            <div className="space-y-4">
              <div>
                <div className="block text-sm text-gray-400 mb-2">
                  Your Name (required)
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <div className="block text-sm text-gray-400 mb-2">
                  Your Email (required)
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <div className="block text-sm text-gray-400 mb-2">
                  Your Phone (required)
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gray-600 hover:bg-gray-500 text-white px-6 py-2 rounded-md transition-colors duration-200 font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-gray-500 text-center sm:text-left">
              © 2024 Service Apartments Medanta Medicity Hospital Gurgaon | Artemis Hospital Fortis Rentals | Medical Tourism Gurgaon
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
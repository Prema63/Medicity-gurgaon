"use client"

import React from 'react';
import { IoMdHome } from "react-icons/io";
import { MdThumbUpAlt } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";


export default function Section2() {
  return (
    <div className="w-full py-8 sm:py-10 md:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 px-2">
            SERVICE APARTMENTS MEDANTA MEDICITY HOSPITAL GURGAON
          </h1>

          <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 text-gray-600 px-2">
            <p className="text-xs sm:text-base md:text-lg leading-relaxed">
              Beautiful self-catered Service Apartments near{' '}
              <span className="font-semibold text-gray-800">Medanta Medicity Hospital in Sector 38 Gurgaon</span>
              {' '}- Fully furnished with{' '}
              <span className="font-semibold text-gray-800">private Kitchens</span>
              {' '}& Living Rooms for Rentals to Medical Tourists.
            </p>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed">
              Non-sharing, independent Apartments with Cleaning, WiFi Internet, Tata Sky TV, RO Water Purifier,
              Washing Machine & Dryer included in rentals!
            </p>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed">
              Check Availability and make Bookings online with transparent Pricing and no hidden charges plus{' '}
              <span className="font-semibold text-gray-800">Weekly & Monthly</span> Discounts!
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Custom Designed Homes */}
          <div className="flex flex-col items-center text-center px-2 sm:px-4">
            <div className="w-20 h-20 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-[#5db64c] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <IoMdHome className="w-5 h-5 sm:w-9 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8" />
            </div>

            <h2 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
              Custom Designed Homes
            </h2>

            <p className="text-gray-600 text-xs sm:text-base md:text-md leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
              Designed for Medical Tourists, all units are private, fully furnished Homes
              that come with their own individual full Kitchens. Cleaning, Bedsheets &
              Towel Changes, Tata Sky TV & WiFi Internet included.
            </p>
          </div>

          {/* Sanitized & Disinfected */}
          <div className="flex flex-col items-center text-center px-2 sm:px-4">
            <div className="w-20 h-20 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-20 lg:h-20 bg-[#5db64c] rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
              <MdThumbUpAlt className="w-5 h-5 sm:w-9 sm:h-7 md:w-8 md:h-8 lg:w-8 lg:h-8" />
            </div>

            <h2 className="text-md sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 uppercase tracking-wide">
              Sanitized & Disinfected
            </h2>

            <p className="text-gray-600 text-xs sm:text-base md:text-md leading-relaxed max-w-xs sm:max-w-sm md:max-w-md">
              Enhanced Cleaning Protocols followed for Sanitization & Disinfection before
              every guest's arrival. Deep Cleaning with PPE worn by all staff. Our Hygiene
              Standards are comparable to Hospitals.
            </p>
          </div>

        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-black w-full h-28 flex items-center my-10 rounded">
        <section className="mx-4 w-full max-w-7xl rounded bg-gray-800 text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Text */}
          <p className="text-center md:text-left text-sm md:text-md">
            Call now and get 10% off – +91 8587091117
          </p>

          {/* Button */}
          <div className="flex">
            <button className="bg-white text-black px-5 py-2 rounded-md shadow hover:bg-gray-100 transition flex items-center gap-2">
              <IoMdCheckmark className="text-lg" />
              <span>Book Now</span>
            </button>
          </div>
        </section>
      </div>
      
    </div>
  );
}
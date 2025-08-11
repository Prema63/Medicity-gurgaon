"use client";

import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { LuUserRoundCheck } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa6";

const page = () => {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-9 xl:gap-12">
        {/* Top Location */}
        <div className="flex flex-col items-center text-center  rounded px-4 py-6">
          <div className="w-20 h-20 bg-[#b02b2c] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <IoHomeSharp className="text-white w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Top Location
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Private, non-sharing stays with Wifi & Netflix/Prime at prime location in New Town Rajarhat.
          </p>
        </div>

        {/* Add on amenities */}
        <div className="flex flex-col items-center text-center rounded px-4 py-6">
          <div className="w-20 h-20 bg-[#b02b2c] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <LuUserRoundCheck className="text-white w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Add-On Amenities
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Additional Amenities for Guests – Gym, Terrace Garden, Meeting Room, Table Tennis and more .
          </p>
        </div>

        {/* corporate discount */}
        <div className="flex flex-col items-center text-center rounded px-4 py-6">
          <div className="w-20 h-20 bg-[#b02b2c] rounded-full flex items-center justify-center mb-6 shadow-lg">
            <FaBookmark className="text-white w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Corporate Discounts
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Attractive Corporate Plans with Breakfast, GST Invoice & Repeat Guest Offers – NO hidden charges!
          </p>
        </div>
      </div>


      <div className="border-b border-gray-200 mt-12 mb-12" />

      {/* Service Apartments Content Section */}
      <div className=" text-gray-800 space-y-6  mx-auto text-sm sm:text-base leading-relaxed">
        <h2 className="text-3xl  text-black">
          About Us @ BluO Stays – Hotel Apartments Rooms Kolkata
        </h2>

        <p className=" text-gray-500 underline">
          Our USP @ BluO Hotel in New Town Rajarhat – Boutique accommodation that fits needs of all guests with privacy and amenities comparable to other Business Hotels & Guest Houses in Kolkata.
        </p>

        <p className="text-gray-500">
          What are the typical guests staying at BluO Hotel Apartments Kolkata?
        </p>

        <p className= "text-gray-500">
          We are very popular with Business Executives working out of New Town Rajarhat & Salt Lake Sector V Corporate Hub. Our diverse Room categories ensure we cater to guests with mid or high end budgets across Standard Rooms, Lake Facing Rooms & Suites.
        </p>

        <p className="text-gray-500 italic">
          PET FRIENDLY – We welcome Pets as long as our guests ensure to leash them and not discomfort other guests.
        </p>

        <p className="text-gray-500">
          We are proud to be a non-discriminating setup with honest pricing and no hidden charges, so guests are assured of value-for-money services.
        </p>

        <p className="text-gray-500">
          Our In-House Concierge Team also offers MICE facilities with compplete Stays and F&B packages. We also take bookings for Corporate Parties & Get-Togethers across different venues – Terrace Garden & Party Hall.
        </p>

        <p className="text-gray-500">
          * Our 
          <span className="underline">
            Corporate Guest House Management Team
            </span> 
            also specialises in setting up and managing dedicated Guest houses in Kolkata for Pan-India Companies having regular corporate travel needs at Kolkata and across other cities of India where we offer our services.
        </p>
        
        <p className="text-gray-500 italic mb-8">
          Please connect with our Sales Team for setting up your customised corporate stay plan!
        </p>
      </div>
      
    </div>
  );
};

export default page;

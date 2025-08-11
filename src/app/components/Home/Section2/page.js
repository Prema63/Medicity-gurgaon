"use client"

import React from 'react';


export default function Section2() {
  return (
    <div className=" py-8 sm:py-10 md:py-12">
      <div>
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h1 className="text-xl sm:text-lg md:text-xl  text-gray-500 mb-4 sm:mb-6 px-2">
            Top-rated Boutique Corporate Hotel in New Town Rajarhat, Kolkata!
          </h1>

          <div className="space-y-3 sm:space-y-4 text-gray-500">
            <p className="text-xs sm:text-base md:text-lg leading-relaxed">
              BluO Stays offers a curated collection of Rooms & Suites in our lake-facing property at New Town, Rajarhat in Kolkata, located in the vicinity of New Town & Salt Lake Sector V Business Hub.
            </p>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed">
              The Award-winning residences are designed for Executive accommodation & Leisure Tourists visiting Kolkata for Short/Long stays.
            </p>

            <p className="text-xs sm:text-base md:text-lg leading-relaxed">
              Besides all amenities of Business Hotels, our Property also come with additional facilities like Gym, Meeting/Conference Room, Terrace Garden & Table Tennis ensuring a home-away-from-home for the discerning traveller!
            </p>
          </div>
        </div>
      </div>

      {/* Promo Section */}
        <section className=" bg-gray-800 h-28 py-5 text-white justify-between items-center">
          {/* Text */}
          <p className="text-center text-md mx-auto py-2">
            Premium Business Hotel Rooms in New Town Rajarhat Kolkata!
          </p>
          <p className="text-center text-md mx-auto ">
            Call or Whatsapp +919999222706
          </p>
        </section>

    </div>
  );
}

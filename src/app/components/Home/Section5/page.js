"use client";

import React from "react";
import { IoBookmarks } from "react-icons/io5";
import { FaGlobeEurope } from "react-icons/fa";

const page = () => {
  return (
    <div className="mt-12 px-4 sm:px-6 lg:px-8">
      {/* Features Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        {/* Medical Tourism Packages */}
        <div className="flex flex-col items-center text-center bg-gray-100 rounded px-4 py-6">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
            <IoBookmarks className="text-white w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Medical Tourism Packages
          </h2>
          <p className="text-gray-800 text-base leading-relaxed max-w-md">
            We specialize in making complete Medical Tourism packages of
            Gurgaon & Delhi hospitals for Indian as well as Overseas guests and
            provide end-to-end healthcare solutions.
          </p>
        </div>

        {/* Delhi Sightseeing Tours */}
        <div className="flex flex-col items-center text-center bg-gray-100 rounded px-4 py-6">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg">
            <FaGlobeEurope className="text-white w-8 h-8" />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wide">
            Delhi Sightseeing Tours
          </h2>
          <p className="text-gray-800 text-base leading-relaxed max-w-md">
            If you want a break from the hospital stress, our Travel Desk can
            also organize day trips to Delhi and nearby areas, plus Weekend
            Getaway packages to Agra & Jaipur for our guests.
          </p>
        </div>
      </div>

      <div className="border-b border-gray-200 mt-12 mb-12" />

      {/* Service Apartments Content Section */}
      <div className="max-w-6xl mx-auto text-gray-800 space-y-6 text-sm sm:text-base leading-relaxed">
        <h2 className="text-2xl font-semibold text-black">
          Service Apartments near Medanta Medicity Hospital in Gurgaon
        </h2>

        <p>
          At <strong>Walking Distance from Medanta Medicity</strong> Hospital
          Gurgaon, we offer fully furnished, self-catered serviced apartments
          combining the warmth of your home with the conveniences of a hotel at
          affordable prices. All our serviced residences are very spacious as
          compared to nearby hotels & guest houses, and all of them come with
          their own private kitchens that are fully equipped to make complete
          meals. Housekeeping services and linen changes (bedsheets & towels)
          are included in rentals, along with Tata Sky TV, WiFi internet, 24
          hour security, power backup, RO water purifier, and elevator access.
        </p>

        <p className="italic font-medium">
          We are situated at just 20 min drive from the Delhi International
          Airport and the nearest Metro Station is HUDA City Centre which is
          just 5 min drive away.
        </p>

        <p>
          Our Medical Tourism Services Team in Gurgaon provides one-stop
          services for medical guests coming to Medanta Hospital and other
          nearby hospitals like Fortis Hospital, Artemis Hospital, Paras, Park
          Hospital & MAX among others. We cover the entire gamut of services
          desired by travelling patients — hospital appointments, visa and
          travel paperwork, boarding and lodging with international cuisine,
          doctor-on-call, hospital transfers, medicine delivery, currency
          exchange, and sightseeing packages.
        </p>

        <h3 className="text-xl font-semibold text-black mt-6">
          Our USP – Individual, Private Kitchens in All Apartments
        </h3>

        <p>
          What sets us apart from regular hotels & guest houses in Gurgaon is
          the availability of private, fully-equipped kitchens in all our
          apartments. These kitchens include gas, stovetops, hobs,
          refrigerators, cookware, microwave, electric kettle, toaster,
          crockery, cutlery, and glassware to meet dietary requirements. Our
          kitchens are exclusive to each unit and not shared between guests. We
          also provide fully automatic washing machines and ironing facilities
          so guests can do their own laundry. These conveniences make stays more
          comfortable and affordable than hotels & guest houses.
        </p>
      </div>

      {/* Home Away From Home Section */}
      <div className="max-w-6xl mx-auto mt-12 mb-20 text-gray-800 text-sm sm:text-base leading-relaxed space-y-4">
        <h2 className="text-lg sm:text-xl font-semibold text-black">
          Home Away From Home for Medical Tourists to Gurgaon
        </h2>

        <p>
          We endeavour to provide all our guests with a home away from home
          feeling when staying with us which is unlike the budget hotels near
          Medanta or guest house rooms near Medanta. Our professional
          hospitality team consists of bilingual staff who understand the needs
          of medical guests including high focus on hygiene for an infection
          free environment along with peaceful and noiseless surroundings. With
          different sizes of accommodations including – Deluxe Rooms, Studios
          and One to Three Bedroom Apartments that include living rooms and
          kitchens plus washing machines, we cater to entire families of
          patients who stay together with comforts of their own home.
        </p>

        <p className="font-semibold text-black">
          Please choose us for your visit to Medanta Medicity Hospital, you can
          connect with us via our Contact Us for a customised quote!
        </p>
      </div>
    </div>
  );
};

export default page;

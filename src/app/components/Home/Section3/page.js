"use client"

import { useState } from 'react';
import { FaCheck, FaHome, FaUser } from "react-icons/fa";
import { PiUsersLight } from "react-icons/pi";

export default function Section3() {
  const [selectedImage, setSelectedImage] = useState(0);

  const mainImages = [
    "https://node.bluokolkata.com/get/files/m8a0qscf-bqylo-first-DxhYexmo.jpg"
  ];

  const galleryImages = [
    "https://node.bluokolkata.com/get/files/m8a0qscf-bqylo-first-DxhYexmo.jpg",

    "https://node.bluokolkata.com/get/files/m8a0qsct-2kf95-first-BWpEh84X.jpg",

    "https://node.bluokolkata.com/get/files/m8a0qsdn-zotqt-fourth-aWwDDidy.jpg",

    "https://node.bluokolkata.com/get/files/m8a0qsea-wo40y-fifth-DptoCFYb.jpg",

    "https://node.bluokolkata.com/get/files/m8a0qsek-drtg1-seventh-jn5wucCS.jpg",

    "https://node.bluokolkata.com/get/files/m8a0qsfd-cavq5-eight-BCA_V9tK.jpg"
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-xl text-gray-800 mb-2 inline-block border-b-1 border-gray-200 pb-1">
            Facilities & Amenities @ BluO New Town Rajarhat
          </h2>
        </div>


        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/*   Image Section */}
          <div className="space-y-4 ">
            {/* Main Image */}
            <div className="relative border border-gray-200 overflow-hidden rounded">
              <img
                src={galleryImages[selectedImage]}
                alt="Service Apartment Main View"
                className="w-full h-64 md:h-80 lg:h-96 object-cover p-2"
              />            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-7 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded border border-gray-200"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*  Content Section */}
          <div className="space-y-6 text-md">
            <div className="flex items-start gap-4">
              <div className="bg-[#42599d] text-white p-4 rounded-full">
                <FaCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-black leading-relaxed font-bold">
                Comfortable Stay
              </p>
              <p className='text-gray-500'>
                  With en-suite Bathrooms, we offer clean hygienic Rooms & Suites fitted with Flat screen TV & Tata Sky or Netflix/Prime, having large windows for natural light and views of Lake & Park from quite a few rooms.
              </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#42599d] text-white p-4 rounded-full">
                <FaHome className="w-5 h-5" />
              </div>
             <div>
                <p className="text-black leading-relaxed font-bold">
                Work Friendly
              </p>
              <p className='text-gray-500'>
                  All our Rooms & Suites have Work Desk & comfortable Chair besides high-speed WiFi Internet with 100% Poer backup for Work From Home.
              </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#42599d] text-white p-4 rounded-full">
                <FaUser className="w-5 h-5" />
              </div>
              <div>
                <p className="text-black leading-relaxed font-bold">
                Extras for Guests
              </p>
              <p className='text-gray-500'>
                 Terrace Garden with beautiful views of the Lake & Park having al-fresco seating, Home Gym, Table Tennis, Meeting Room and more.
              </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#42599d] text-white p-4 rounded-full">
                <PiUsersLight className="w-5 h-5" />
              </div>
               <div>
                <p className="text-black leading-relaxed font-bold">
                Hospitality Culture
              </p>
              <p className='text-gray-500'>
                 Managed with high standards by our Professional Hospitality team , BluO Lake View Stays provides 24*7 Support for 5 star rated service stays of all guests.
              </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
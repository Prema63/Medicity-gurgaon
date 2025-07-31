"use client";

import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const Section1 = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          <img
            src="http://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2020/02/Main-Slider-Home-Image.jpg?bv_host=medicityserviceapartmentsgurgaon.com&bv-resized-infos=bv_resized_mobile%3A480%2A270%3Bbv_resized_ipad%3A820%2A461%3Bbv_resized_desktop%3A1052%2A592"
            alt="Modern apartment interior with blue sofas and elegant furnishing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>


      {/* Promo Section */}
      <section className=" mx-4 my-4 rounded bg-black text-white py-4 px-6 flex flex-col md:flex-row justify-between items-center gap-4">
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
      <div className="border-b border-gray-200 py-3"></div>
    </>
  );
};

export default Section1;

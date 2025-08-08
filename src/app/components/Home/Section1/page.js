"use client";

import React from "react";
import Booking from '../../../global/Booking'

const Section1 = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="relative w-full min-h-[calc(100vh-50px)]">
        <div className="absolute inset-0">
          <img
            src="https://node.bluokolkata.com/get/files/m8a0rsku-eeqf8-Bluo-kolkata-banner-BZChCJM5.png"
            alt="Modern apartment interior with blue sofas and elegant furnishing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </section>


      {/* Promo Section */}
      <section className=" mx-4 my-4 rounded py-4 px-6  justify-between items-center gap-4">
        {/* Text */}
        <p className="text-center mx-auto md:text-center text-3xl font-bold md:text-md">
          BluO Stays @ New Town Rajarhat Kolkata
        </p>
        <h5 className="text-center mx-auto md:text-center text-xl p-2 md:text-md">
          Stylish Lake-Facing Boutique Hotel
        </h5>
      </section>
      <div className="py-3">
        <Booking/>
      </div>
    </>
  );
};

export default Section1;

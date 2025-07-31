"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";

export default function Rooms() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full shadow-md min-h-screen ">
        {/* Top Header */}
        <div className="flex flex-col my-4 md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
            <span className=" text-xs text-gray-300 "> *Offers*</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / *Offers*
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl">
              Special Offers @ Medicity Apartments Gurgaon
            </p>
            <p className="text-black font-semibold">
              ** Stay Longer & Save More – Upto 45% Discounts **
            </p>


            <p className="px-2">
              <span className="text-black font-semibold">Details –</span>
              This is a Special Longer Stays offer for Weekly & Monthly reservations where we provide up to 25% Discount for Weekly Stays & up to 45% Discount for Monthly Stays. These are applicable for all bookings done online via our website or through our Email.
            </p>

            <div className="space-y-6">
              <div>
                    
                  <p className="px-2">
                    <span className="text black font-semibold">a) For any booking of at least 1 week stay</span>
                    – You will receive a Weekly Discount ranging from minimum 15% to 25% on your entire booking amount.
                  </p>
              </div>
              
                  <p className="px-2">
                    <span className="text-black font-bold">
                      b) For any bookings of minimum 28 nights and above
                    </span>
                    – You will receive a Monthly discount ranging from minimum 30% to 45% on your entire booking amount.
                  </p>

                <p>
                  This offer will automatically be applied for every booking done online via our Website or our Email between
                  <span className="font-bold">
                    1st July to 31st August 2025.
                  </span>
                </p>

              </div>
          </div>

          {/* Right Section */}
          <div className=" border-l border-gray-300 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-6 pb-8">
            <Sideform />
          </div>
        </div>

      </div>

      <ChatPopup />
      <Scroll />
    </>
  );
}
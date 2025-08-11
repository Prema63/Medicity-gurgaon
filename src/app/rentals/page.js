"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/SideFrom";
// import {LoadingMutatingDots} from "../global/loading/Loadings";

export default function Rooms() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full shadow-md min-h-screen ">
        {/* Top Header */}
        <div className="flex flex-col my-4 md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
            <span className=" text-xs text-gray-300 "> Pricing</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Pricing
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl">
              Pricing @ BluO Stays New Town Kolkata
            </p>
            <p className="text-black font-semibold">
              The Rentals / Rates / Tariff / Pricing of our Serviced Apartments are given below –
            </p>

            <div className="border p-5 border-gray-200">
              <p className="px-2 font-semibold">
                Standard Room (260 sq ft)
              </p>
              <p className="px-2">
                Layout: Bedroom + Bathroom
              </p>
              <p className="px-2">
                Tariff: Starting from Rs 2,450/Day
              </p>
            </div>

            <div className="space-y-6">
              <div className="border p-5 border-gray-200">
                <p className="px-2 font-semibold">
                  Superior Room (290 sq ft)
                </p>

                <p className="px-2">
                  Layout: Bedroom + Bathroom
                </p>
                <p className="px-2">
                  Tariff: Starting from Rs 2,950/Day
                </p>
              </div>

              <div className="border p-5 border-gray-200">
                <p className="px-2 font-semibold">
                  Premier Room (320 sq ft)
                </p>
                <p className="px-2">
                  Layout: Bedroom + Bathroom
                </p>
                <p className="px-2">
                  Tariff: Starting from Rs 3,950/Day
                </p>
              </div>

              <div className="border p-5 border-gray-200">
                <p className="px-2 font-semibold">
                  Junior Suite (355 sq ft)
                </p>
                <p className="px-2">
                  Layout: Bedroom + Bathroom
                </p>
                <p className="px-2">
                  Tariff: Starting from Rs 4,250/Day
                </p>
              </div>

              <div className="border p-5 border-gray-200">
                <p className="px-2 font-semibold">
                  Superior Suite (385 sq ft)
                </p>
                <p className="px-2">
                  Layout: Bedroom + Bathroom
                </p>
                <p className="px-2">
                  Tariff: Starting from Rs 5,250/Day
                </p>
              </div>

              <div className="border p-5 border-gray-200">
                <p className="px-2 font-semibold">
                  Premier Suite (410 sq ft)
                </p>
                <p className="px-2">
                 Layout: Bedroom + Bathroom + Sitting Area
                </p>
                <p className="px-2">
                 Tariff: Starting from Rs 6,650/Day
                </p>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 my-6" />

              {/* Note */}
              <div className="text-gray-600"></div>
              <p className="text-gray-600 ">
                * This Pricing is the starting range for our Rooms. Prices are very dynamic, they may go up on certain dates and as per availability. Please check with our Sales Team for exact Tariff and inclusions when making your booking.
              </p>

              <p>
                * Any Extra Person/Beds above Double Occupancy will be charged at Rs 600/night/person. Children below 6 Years stay for Free and those above 6 Years will be charged Rs 600/night/person.
              </p>

              <p>
                * The above Pricing is exclusive of applicable Goods & Services Tax (GST).
              </p>

              <p>
                * All Reservations will always be billed in advance. Some Guests may also be required to provide a refundable damage deposit. This will be refunded back at the end of the stay.
              </p>
              <p>
                * Cancellation Policy – We offer a complete flexible ZERO Cancellation for any Booking cancelled 7 Days before check-in date. A 50% Cancellation charge is levied, if you cancel or modify a confirmed Booking within 7 Days of check-in date. Any other specific cancellation policy will be mentioned by our sales team in your booking confirmation
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
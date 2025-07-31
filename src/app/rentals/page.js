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
            <span className=" text-xs text-gray-300 "> Rentals</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rentals
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl">
              Rentals @ Medicity Service Apartments Gurgaon
            </p>
            <p className="text-black font-semibold">
              The Rentals / Rates / Tariff / Pricing of our Serviced Apartments are given below –
            </p>

            <p className="text-black font-semibold">
              Deluxe Rooms with Shared Kitchen (300 sq ft)
            </p>

            <div className="flex">
              <p className="text-black font-semibold">
                Room Layout:
              </p>
              <p className="px-2">
                Bedroom + Bathroom + Shared Kitchen
              </p>
            </div>

            {/* New Rental Information Section */}
            <div className="space-y-6">
              {/* Deluxe Rooms */}
              <div>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Rentals:
                  </p>
                  <p className="px-2">
                    Start From Rs 1,990/Day
                  </p>
                </div>
              </div>

              {/* Studio Apartments */}
              <div className="space-y-2">
                <p className="text-black font-semibold">
                  Studio Apartments (435 sq ft)
                </p>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Unit Layout:
                  </p>
                  <p className="px-2">
                    Bedroom + Bathroom plus Living Room with Private Kitchenette
                  </p>
                </div>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Rentals (Single or Double Occupancy):
                  </p>
                  <p className="px-2">
                    Start From Rs 2,490/Day
                  </p>
                </div>
              </div>

              {/* One Bedroom Apartments */}
              <div className="space-y-2">
                <p className="text-black font-semibold">
                  One Bedroom Apartments (600 sq ft)
                </p>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Unit Layout:
                  </p>
                  <p className="px-2">
                    Bedroom + Bathroom + Living Room with individual Kitchen
                  </p>
                </div>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Rentals (Single or Double Occupancy):
                  </p>
                  <p className="px-2">
                    Start From Rs 3,390/Day
                  </p>
                </div>
              </div>

              {/* Two Bedroom Apartments */}
              <div className="space-y-2">
                <p className="text-black font-semibold">
                  Two Bedroom Apartments (1200 sq ft)
                </p>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Unit Layout:
                  </p>
                  <p className="px-2">
                    2 Bedrooms + 2 Bathrooms + Living Room + Dining Area + Kitchen
                  </p>
                </div>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Rentals (Up to 4 Adults):
                  </p>
                  <p className="px-2">
                    Start From Rs 7,390/Day
                  </p>
                </div>
              </div>

              {/* Three Bedroom Apartments */}
              <div className="space-y-2">
                <p className="text-black font-semibold">
                  Three Bedroom Apartments (1800 sq ft)
                </p>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Unit Layout:
                  </p>
                  <p className="px-2">
                    3 Bedrooms + 3 Bathrooms + Living Room + Dining Area + Kitchen
                  </p>
                </div>
                <div className="flex">
                  <p className="text-black font-semibold">
                    Rentals (Up to 6 Adults):
                  </p>
                  <p className="px-2">
                    Start From Rs 9,850/Day
                  </p>
                </div>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 my-6" />

              {/* Note */}
              <div className="text-gray-600"></div>
              <p className="text-gray-600 italic">
                * Kindly note that the above rentals are indicative Starting prices for the Base category of apartments, please confirm exact Rentals and inclusions with your Sales Rep at the time of making your reservations.
              </p>

              <p>
                * Any Extra Person/Beds will be charged at Rs 800/night for any Guest above the Occupancy limit stated for the respective Rooms & Apartments. Children below 8 Years stay for FREE in existing beds, children above 8 Years will be charged Rs 800/night for an extra bed.
              </p>

              <p>
                * All published Rentals are exclusive of any Goods & Services Tax (GST) but it is only applicable only for stays of less than 3 months duration.
              </p>

              <p>
                * All Monthly Rentals are counted for 28 Nights for all billing purposes and any extensions beyond 28 Nights are billed on a pro-rata basis accordingly.
              </p>
              <p>
                * Your Rentals are always billed in advance. Guests may also be required to provide a refundable damage deposit which is returned back to them at the end of their stay minus any arrears.
              </p>

              <p>
                * All Rentals include housekeeping (floors & toilets), linen (towels & bedsheets) changes, Wi-Fi Internet, Cooking Gas, Water, 32″ LCD TV with Tata Sky, Power Backup, and all flat maintenance.
              </p>

              <p>
                <span className=" text-black font-bold">* Cancellation Charges –</span>
                  We offer FREE Cancellation for any booking reservation canceled 7 Days before the check-in date. There will be a 50% cancellation charge if you cancel or modify a confirmed booking reservation between 7 Days to 1 Day before the check-in date. AND if any confirmed booking reservation is canceled within 1 Day from the check-in date or is a No-Show, there will be NO refund of rentals
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
"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../../global/chatPopUp/ChatPopUP";
import Scroll from "../../global/scroll/Scroll";
import RoomSideForm from '../../components/roomSideform/page';
// import {LoadingMutatingDots} from "../global/loading/Loadings";

export default function Rooms() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full shadow-md min-h-screen ">
        {/* Top Header */}
        <div className="flex flex-col my-4 md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
            <span className=" text-xs text-gray-300 "> Superior Two Bedroom Apartment</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Superior Two Bedroom Apartment
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl text-gray-00">
              Superior Two Bedroom Apartment
            </p>
            <p>
              All Superior Two Bedroom Apartments are very spacious units and include two bedrooms, both having King size beds & attached bathrooms. The unit also has a large living room with sofa seating and a dining table besides 32″ LCD TV with Tata Sky HD, free wifi internet. A work desk and chair are provided for guest use on the property. These Superior residences are located on the Ground, First & Second floors and have elevator access as well as a private staircase.
            </p>

            <p>
              The maximum occupancy limit of these units is 5 guests and they can accommodate extra beds, but subject to availability and extra charges. These private, self-catered residences are quite popular with small families and traveling groups.
            </p>

            <p>
              Please note that all apartments are provided with Bedsheets and towels that are changed twice every week. Housekeeping service is provided on alternate days, but no housekeeping is available on public holidays. We provide all toiletries in the bathroom including Soap, Toilet Rolls, Shampoo, Conditioner, Moisturiser, Dental Kit & Sewing Kit.
            </p>

            <p>
              Superior Two Bedroom Apartments also come with complimentary Late Check-Out of up to 4 hours, and complimentary airport drop..
            </p>
            <p>
              Extras that may be provided on request, subject to availability include personal cooks, baby sitter, full-time maid service, rental car, driver, and currency exchange.
            </p>

          </div>

          {/* Right Section */}
          <div className=" border-l border-gray-300 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-6 pb-8">
            <RoomSideForm />
          </div>
        </div>

      </div>

      <ChatPopup />
      <Scroll />
    </>
  );
}




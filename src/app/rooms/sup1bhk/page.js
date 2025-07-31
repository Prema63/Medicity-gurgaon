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
            <span className=" text-xs text-gray-300 "> Superior One Bedroom Apartment</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Superior One Bedroom Apartment
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl text-gray-00">
              Superior One Bedroom Apartment
            </p>
            <p>
              These are very spacious apartments with a view, they include Kingsize Bed with an attached bathroom and balcony with a sit-out. There is a separate lounge/ living/ dining area with a 32″ LCD TV with Tata Sky plus Sofa seating and 3 seats Dining Table. The private kitchen is fully loaded with all Cookware and kitchen items to make a complete meal including Gas Stovetops, Microwave, Refrigerator, Pots-n-Pans, cutlery & crockery. There is an executive chair and work desk provided for guest use in the unit.
            </p>

            <p>
              The private, self-catered apartments are very popular with couples and small families as they offer a lot more space, privacy, and comfort.
            </p>

            <p>
              Please note that these apartments have a maximum occupancy limit of 3 guests and can accommodate extra beds subject to availability and extra charges. All these units come with double beds and will not be able to accommodate any twin beds
            </p>

            <p>
              Bed linen and towels are provided to all guests and are changed twice a week. We provide all toiletries in the bathroom including Soap, Toilet Rolls, Shampoo, Conditioner, Moisturiser, Dental Kit & Sewing Kit. Please note that housekeeping services are included in apartment rental and are provided on alternate weekdays except Sundays
            </p>
            <p>Superior Apartments also come with complimentary Late Check-Out of up to 4 hours and complimentary airport drop.
            </p>
            <p>
              Extras that can be provided on request but subject to availability include rental car, baby sitter, personal cook, driver, full-time maid service, and currency exchange.
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




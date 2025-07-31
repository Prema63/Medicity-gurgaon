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
            <span className=" text-xs text-gray-300 "> Superior Three Bedroom Apartment</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Superior Three Bedroom Apartmentt
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl text-gray-00">
              Superior Three Bedroom Apartment
            </p>
            <p>
              With an area of around 1800 sq ft, the spacious Superior Three Bedroom apartments include Three Bedrooms having King size beds and attached bathroom, a large living room with sofa seating, 32″ LCD TV with Tata Sky, 6 seat dining table, and a full kitchen plus washing machine. The Kitchen has all amenities and facilities to make all meals – Gas Stovetop, Refrigerator, Pots-n-Pans, Microwave, cutlery, crockery, etc.
            </p>

            <p>
              This apartment can accommodate an extra bed, subject to extra charges and availability. However, the apartments have all double beds with no option for twin bedding. These private, self-catered residences are quite popular with families and groups.
            </p>

            <p>
              All the toiletries are provided in the bathrooms like Soap, Shampoo, Conditioners, Moisturiser, Toilet Rolls, Dental Kit, and Sewing Kit. Housekeeping service is provided on alternate days, but no housekeeping is available on public holidays. We provide linen changes in rentals, including towels and bed sheets that are changed twice every week.
            </p>

            <p>
              Superior Three Bedroom Apartments also come with a complimentary Late Check-Out of up to 4 hours besides complimentary airport drop.
            </p>
            <p>
              Extras that may be provided on request, subject to availability include full-time maid service, personal cooks, baby sitter, rental car, driver, and currency exchange.
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




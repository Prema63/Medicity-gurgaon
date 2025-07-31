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
            <span className=" text-xs text-gray-300 "> Deluxe Room with Kitchen</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Deluxe Room with Kitchen
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl ">
              Deluxe Room with Kitchen
            </p>
            <p>
              Deluxe Rooms also come with the option of Kitchen access for guests who want to make their own food as per their dietary requirements. They include the regulars like Double Bed and attached bathroom besides a work desk with chair. A 32″ LCD TV with Tata Sky and free Wi-Fi are included.
            </p>

            <p>
             Guests can use the shared Kitchen for all Deluxe Rooms – it comes fully equipped with Stovetop and all Kitchenware plus refrigerators, Microwave, Toaster, etc.
            </p>

            <p>
              The Bathroom has all toiletries including Soap, Shampoo, Conditioner, Moisturiser, and Dental Kit. Housekeeping service is provided on alternate days, but no housekeeping is available on public holidays. All linen including Bedsheets & Towels are provided for guests, they are changed twice a week.
            </p>

            <p>
            The maximum occupancy of this room is 2 guests and it can accommodate an extra bed.
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




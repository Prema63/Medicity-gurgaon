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
            <span className=" text-xs text-gray-300 ">Standard Three Bedroom Apartment</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Standard Three Bedroom Apartment
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl text-gray-00">
              Standard Three Bedroom Apartment
            </p>
            <p>
              Our Standard Three Bedroom Apartments are designed for small families and groups of travelers. They have Three Bedrooms with attached bathrooms. All these apartments include a large living room with sofa seating and dining table besides 32″ LCD TV with Tata Sky, free wifi internet, and a washing machine. They also include a full private Kitchen with Gas Hobs, cutlery, crockery, refrigerator, microwave, etc for making all meals.
            </p>

            <p>
              Please note that these apartments have a maximum occupancy limit of 2 guests and cannot accommodate extra beds. These apartments have all double beds with options for twin bedding.
            </p>

            <p>
              Bed linen and towels are provided to all guests and are changed twice a week. There is a housekeeping service Monday to Friday, but no housekeeping is available on the weekends or public holidays. All the toiletries are provided in the bathrooms like Soap, Shampoo, Conditioners, moisturizers, Toilet Rolls, Dental Kit, and Sewing Kit.
            </p>

            <p>
              These serviced residences are located on the Ground & First floors and are accessible by elevator and staircase.
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




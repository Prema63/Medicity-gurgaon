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
            <span className=" text-xs text-gray-300 ">Standard Two Bedroom Apartment</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Standard Two Bedroom Apartment
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl text-gray-00">
              Standard Two Bedroom Apartmentt
            </p>
            <p>
             The Standard Two Bedroom Apartments have 2 Bedrooms with ensuite bathrooms, a small Dining area, and a fully loaded kitchen that includes all cookware and amenities (Gas Stovetop, Fridge, Microwave, etc) for making a complete meal. Even though they don’t have a separate living room, these self-catered, private residences are very popular with small families and groups.
            </p>

            <p>
             With both hardwood and tile floors, all these apartments include 32″ LCD TV with Tata Sky in both bedrooms. Please note that these apartments have a maximum occupancy limit of 4 guests and cannot accommodate extra beds. All these units come with the option of Twin Beds in one Bedroom and Double beds in the second bedroom.
            </p>

            <p>
             Apartment rentals include housekeeping on alternate days of the week except for Sundays and public holidays. All Towels and Bedsheets are provided and are changed twice a week. The Bathroom has all toiletries including Soap, Shampoo, Conditioner, Moisturizer, and Dental Kit.
            </p>

            <p>
              These apartments are located on the Ground Floor, First floors and are accessible by elevator and a private staircase.
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




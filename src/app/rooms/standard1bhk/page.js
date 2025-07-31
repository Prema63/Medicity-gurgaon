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
            <span className=" text-xs text-gray-300 "> Standard One Bedroom Apartment</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-xs text-gray-300">
              You are here: Homes / Rooms / Standard One Bedroom Apartment
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-3xl ">
              Standard One Bedroom Apartment
            </p>
            <p>
              This Standard One-Bedroom Apartment has a double bedroom, separate living area with sofa seating, a private bathroom, and a full Kitchen. The apartment has a spacious living area with a couch & dining table, wi-fi internet, 32″ LCD TV with Tata Sky. The Kitchen is fully equipped with all cookware and Stovetop gas for making a full meal.
            </p>

            <p>
              These self-catered, private residences are very popular with Single executives and couples.
            </p>

            <p>
              These apartments have a maximum occupancy of 2 guests and they cannot accommodate any extra bed. All these units come with double beds and will not be able to accommodate any twin beds. The unit also includes a work desk along with an executive chair for all guest use.
            </p>

            <p>
              We provide all toiletries in the bathroom including Soap, Toilet Rolls, Shampoo, Conditioner, Moisturizer, Dental Kit & Sewing Kit. There is a housekeeping service Monday to Friday, but no housekeeping is available on the weekends or public holidays. Bed linen and towels are provided to all guests and are changed twice a week.
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




"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/SideFrom";


export default function Rooms() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full shadow-md min-h-screen ">
        {/* Top Header */}
        <div className="flex flex-col  md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
          <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
            <span className=" text-sm text-gray-300 "> Offers</span>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            <span className="text-sm text-gray-300">
              You are here: Homes / Offers
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="container px-4 mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
            <p className="font-bold text-2xl">
              Offers & Promotions @ BluO Stays Kolkata
            </p>
            <p className="text-black underline text-xl">
              These are our currently running Special Promotional Offers –
            </p>
            <p className="text-gray-500 ">
              ** Free Airport Transfers & Early Check-In/Early Check-Out**
            </p>


            <p className="px-2">
             Offer Details – This offer entitles Guests for Complimentary Airport Transfers as well as Early Check-In OR Late Check-Out by 4 Hours for all direct bookings with BluO Stays.
            </p>

            <div className="space-y-6">
              <div>

                <p className="px-2">
                  a) For all bookings of more than 2 nights stay – You will get an Early Check-In OR Late Check-Out by 4 Hours during your stay
                </p>
              </div>

              <p className="px-2">
                b) For every booking of more than 3 nights stay – You will receive Complimentary transportation via a private Car to the Kolkata Airport at the end of your stay. You will also get Early Check-In OR Late Check-Out by 4 Hours during your stay.
              </p>

              <p>
                c) For any bookings of more than 4 nights stay – You will receive Complimentary transportation via a private Car both ways, we will pick you from the Kolkata Airport at the time of check-in and drop you back at end of your stay. You will also get complimentary both Early Check-In AND Late Check-Out by 4 Hours during your stay
              </p>
              <p>
                These offers will be applied automatically to all bookings done directly with BluO Stays via our Website or our Email between 1st January to 28th February 2025.
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
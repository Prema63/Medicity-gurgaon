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
                        <span className=" text-xs text-gray-300 "> Deluxe Rooms</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-xs text-gray-300">
                            You are here: Homes / Rooms / Deluxe Rooms
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
                        <p className="font-bold text-3xl ">
                           Deluxe Room 
                        </p>
                        <p>
                       Deluxe Rooms are standard double bedrooms with attached bathrooms. They may or may not have a balcony, but all of them have options of Double or Twin Beds as desired by guests. These also include a 32″ LCD TV with Tata Sky, Work Desk with a chair, a room fridge, and WiFi Internet.
                        </p>
                        
                        <p>
                           An electric kettle is provided along with complimentary mineral water. The Bathroom has all toiletries including Soap, Shampoo, Conditioner, Moisturiser, and Dental Kit. There is a housekeeping service Monday to Friday, but no housekeeping is available on the weekends or public holidays.
                        </p>
                        
                        <p>
                          The maximum occupancy of the Deluxe Room is 2 guests and it can accommodate an extra bed on a chargeable basis.
                        </p>
                        
                        <p>
                            All Meals can be provided on order. The apartments are popular with guests and families of patients who want short-stay accommodation while visiting their patients in the hospital.
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




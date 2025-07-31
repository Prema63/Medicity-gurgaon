"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import RoomSideForm from '../components/roomSideform/page';
// import {LoadingMutatingDots} from "../global/loading/Loadings";

export default function Rooms() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className="w-full shadow-md min-h-screen ">
                {/* Top Header */}
                <div className="flex flex-col my-4 md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className=" text-xs text-gray-300 ">Rooms</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-xs text-gray-300">
                            You are here: Rooms / Rooms
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-600 space-y-4">
                        <p className="font-bold text-3xl text-gray-800">
                           Rooms @ Medicity Apartments Gurgaon 
                        </p>
                        <p>
                           Below is a listing of the various accommodation options available with us near Medanta Medicity Hospital at Gurgaon –
                        </p>
                        <p className="text-black font-semibold">
                          * Deluxe Rooms (With or Without Kitchen access)
                        </p>
                        <p>
                            Deluxe Rooms are standard double bedrooms with attached bathrooms. They may or may not have a balcony, but all of them have options of Double or Twin Beds as desired by guests. Shared Kitchen access is available on chargeable basis.
                        </p>
                        <p className="text-black font-semibold">
                            * Studio Apartments
                        </p>
                        <p>
                            Featuring ample living space, these open plan Studio Apartments are fully furnished with Queen size Bed, sofa seating and a fully function kitchen that can cook a complete meal
                        </p>
                        <p className=" text-black font-semibold">
                            * One Bedroom Apartments
                        </p>
                        <p>
                            Our top-sellers, they include a King Bed with attached bathroom and balcony with sitout. There is a separate lounge/ living and dining area. The private Kitchen is fully loaded with all Cookware and kitchen items to make a complete meal
                        </p>
                        <p className=" text-black font-semibold">
                            * Two Bedroom Apartments
                        </p>

                         <p>
                          They are very spacious units and include two bedrooms, both having King size beds & attached bathrooms. The unit also has a large living room with sofa seating and a dining table besides fully loaded Kitchen.
                        </p>

                         <p className=" text-black font-semibold">
                            * Three Bedroom Apartments
                        </p>

                         <p>
                        Designed for Families and small groups, they have an area of around 1800 sq ft and include Three Bedrooms having King size beds and attached bathroom, a large living room with sofa seating, 6 seat dining table and a fully equipped Kitchen.
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




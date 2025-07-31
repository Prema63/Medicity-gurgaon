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
                        <span className=" text-xs text-gray-300 "> Studio Apartments</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-xs text-gray-300">
                            You are here: Homes / Rooms / Studio Apartment
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-800 space-y-4">
                        <p className="font-bold text-3xl text-gray-00">
                            Studio Apartment
                        </p>
                        <p>
                            Featuring ample living space, these open-plan Studio Apartments are fully furnished with Queen size Bed,  32″ LCD TV with Tata Sky WiFi Internet, sofa seating, and a fully functioning kitchen that can cook a complete meal. All cookware including Stovetop, Gas, Refrigerator, Microwave, cutlery, and crockery are provided. They also come with attached bathrooms and a washing machine/dryer. These self-catered, private residences are very popular with couples who want more space and a full kitchen to make meals as per their needs.
                        </p>

                        <p>
                            Apartment rentals include housekeeping on alternate days of the week except for Sundays and public holidays. Linen and linen changes are included in rentals, all bedsheets and towels are changed twice every week. All the toiletries are provided in the bathrooms like Soap, Shampoo, Conditioners, Moisturiser, Toilet Rolls, Dental Kit, and Sewing Kit.
                        </p>

                        <p>
                            Please note that these apartments have a maximum occupancy limit of 3 guests and can accommodate an extra bed, subject to extra charges and availability.
                        </p>

                        <p>
                            Extras that can be provided on request but subject to availability include personal cook, rental car, driver, baby sitter, full-time maid service, and currency exchange.
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




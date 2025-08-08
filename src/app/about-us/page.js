"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/SideFrom";

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className="w-full shadow-md min-h-screen  ">
                {/* Top Header */}
                <div className="flex  flex-col  md:flex-row bg-[#28343c] text-white py-5 px-4 md:px-8 text-md md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className=" text-sm text-gray-300 ">About Us</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm text-gray-300">
                            You are here: Home / About Us
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container px-5 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-400 space-y-4 p-2">
                        <p className="font-bold text-2xl text-gray-800 mb-4">
                            All About BluO Stays @ NewTown Rajarhat
                        </p>
                        <p >
                            BluO Rooms is a leading tech-enabled Hospitality company that offers a collection of bespoke designer properties in leading cities of India. Our LUXE Stays come with modern Hotel amenities across Executive Rooms, Suites & Studios Rooms. We ensure our guests a clean sanitized room with fast Wifi, Netflix/Prime & complete privacy.
                        </p>
                        <p>
                            Guests can order home-cooked meals via our in-house Kitchen and enjoy our additional guest amenities including – Terrace Garden, Gym, Table Tennis & more.
                        </p>
                        <p>
                            All our properties are managed by our professional Hospitality Team working 24*7 ensuring our guests have a memorable stay experience.
                        </p>
                        <p>
                            Here are some features of BluO Stays at NewTown Kolkata –.
                        </p>
                        <p>
                            <ul className="list-disc ml-5 ">
                                <li>The property has Standard Rooms, Lake-facing Rooms & Suites that have all en-suite Bathrooms with Double Beds & premium linen.</li>

                                <li>All Rooms have noiseless Split AC and work desk with comfortable chairs</li>

                                <li>Netflix/Prime or Tata Sky TV on Flat screen TVs.</li>

                                <li>Complimentary High speed WiFi Internet that is ideal for Work From Home.</li>

                                <li>A Terrace garden with al-fresco seating, Gym, Table Tennis is available for all guest use.</li>
                            </ul>

                        </p>
                        <p>
                            We have designed the entire property so our guests can have a home-away-from-home feeling. Please do come across for a visit, we guarantee that you won’t book another hotel or guest house for your future stays to Kolkata!
                        </p>
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




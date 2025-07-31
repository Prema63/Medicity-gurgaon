"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className="w-full shadow-md min-h-screen ">
                {/* Top Header */}
                <div className="flex flex-col my-4 md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className=" text-xs text-gray-300 ">About Us</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-xs text-gray-300">
                            You are here: Home / About Us
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-600 space-y-4">
                        <p className="font-bold text-3xl text-gray-800">
                            About Us 
                        </p>
                        <p>
                            We are a professional <span className="font-bold text-black ">Medical Tourism Company in Gurgaon</span> providing the entire gamut of Medical Tourism services to domestic as well as foreign guests coming for Medical Treatments to Gurgaon.
                        </p>
                        <p>
                            Through this website we are offering independent self-catered Serviced Apartments with fully-equipped Kitchens for Medical Tourists visiting Medanta Medicity Hospital in Gurgaon. Available in all sizes, the apartments are located just across the Medanta Medicity Hospital, and are rented for flexible durations with special rates for <span className="font-bold text-black">Weekly & Monthly stays!</span>
                        </p>
                        <p>
                            Our most popular serviced residences are the <span className="font-bold text-black">One Bedroom Apartments</span> that have their own kitchen and a Living Room with Sofa seating. They are an ideal alternate to Hotels & Guest Houses in Gurgaon for Couples and small families coming across for Medical treatments to the hospital. We also offer <span className = " text-black font-bold">Two Bedroom & Three Bedroom</span> Serviced Apartments for short/long stays rentals.
                        </p>
                        <p>
                            Our experts also provide complete Medical packages for other leading Hospitals of Gurgaon – Fortis Hospital, MAX Healthcare, Paras Hospital, Artemis & Park Hospital among others.
                        </p>
                        <p>
                            Some other Services that can be provided by us include –
                        </p>
                        <p>
                            <ul>
                                <li>* Airport Transfers</li>
                                <li>* Doctor On Call</li>
                                <li>* Personal Cooks</li>
                                <li>* Free self-laundry via washing machine & dryer</li>
                                <li>* Transport service between Hospital & home</li>
                                <li>* Medicine delivery service</li>
                                <li>* Currency Exchange</li>
                                <li>* Language Translators</li>
                                <li>* Local guides</li>
                                <li>* Medical Tourism Facilitators</li>
                            </ul>
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




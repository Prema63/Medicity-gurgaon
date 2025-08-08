"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import SideForm from '../global/Sideform/SideFrom';

export default function Rooms() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            <div className="w-full shadow-md min-h-screen ">
                {/* Top Header */}
                <div className="flex flex-col md:flex-row bg-[#28343c] text-white py-5 px-4 md:px-8 md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className=" text-sm text-gray-300 ">Rooms</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm text-gray-300">
                            You are here: Rooms / Rooms
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container px-3 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-400 space-y-4">
                        <p className="font-bold text-center mx-auto text-2xl text-gray-800">
                            Rooms @ BluO Kolkata
                        </p>
                        <p>
                            BluO Stays – New Town Rajarhat is our new Boutique Hotel in Kolkata. Located just across the Bisarjan Ghat in Action Area 1, it's just a 2 min drive from Biswa Bangla Gate. We offer a selection of Executive Rooms & Suites, all with en-suite Bathrooms with elevator access
                        </p>
                        <p>
                            The Property also comes with a beautiful Terrace having al-fresco seating for guests with mesmerizing views of the Lake & Park. Guests get complimentary high-speed Wifi Internet, Netflix/Prime Smart TV or Tata Sky plus iron with ironing boards. We also provide various other facilities including Gym, Meeting Room, Table Tennis, and Terrace Garden for all guest use.
                        </p>


                        {/* Room Types Section */}
                        <div className="container px-3 py-8">
                            {/* Premier Room with Lake View */}
                            <div className="flex flex-col lg:flex-row gap-8 mb-12">
                                {/* Left - Image */}
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src="https://node.bluokolkata.com/get/files/mca2l276-mo2fb-Screenshot 2025-06-17 154757.png"
                                        alt="Premier Room with Lake View"
                                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                    />
                                    <div className="flex justify-center mt-4">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/mca2l276-mo2fb-Screenshot 2025-06-17 154757.png"
                                                alt="Thumbnail 1"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Content */}
                                <div className="w-full lg:w-1/2 text-gray-600">
                                    <h2 className="text-lg md:text-xl  text-pink-400 mb-4">
                                        Premier Room with Lake View updated
                                    </h2>
                                    <p className="leading-relaxed">
                                        These are our most popular Rooms of 325 sq ft, and as
                                        the name suggests, come with views of the Lake &
                                        greenery of the Park through large bay windows.
                                        Designed for guests who want a room with a view, they
                                        are the top choice of Business Travellers and Leisure
                                        stays. Offering complete privacy in a spacious room, they
                                        have a King Bed with couch seating, en-suite Bathroom,
                                        split AC, Flat screen TV with Tata Sky or Netflix/Prime,
                                        and Work desk with Chair besides complimentary WiFi.
                                    </p>
                                </div>
                            </div>

                            {/* Standard Room */}
                            <div className="flex flex-col lg:flex-row-reverse gap-8 mb-12">
                                {/* Right - Image */}
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src="https://node.bluokolkata.com/get/files/undefined"
                                        alt="Standard Room"
                                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                    />
                                </div>

                                {/* Left - Content */}
                                <div className="w-full lg:w-1/2 text-gray-600">
                                    <h2 className="text-lg md:text-xl  text-pink-400 mb-4">
                                        Standard Room
                                    </h2>
                                    <p className="leading-relaxed">
                                        Our 290 sq ft Standard Rooms have a Queen Bed with an
                                        en-suite Bathroom, Cupboard, and Work Desk with Chair.
                                        It includes a noiseless Split AC and a Flat-screen TV with
                                        Tata Sky. A Tea/Coffee maker is also provided. It's an ideal
                                        room for short stays with all hotel amenities for Corporate
                                        Executives.
                                    </p>
                                </div>

                            </div>

                            {/* Superior Room */}
                            <div className="flex flex-col lg:flex-row gap-8 mb-12">
                                {/* Left - Image */}
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src="https://node.bluokolkata.com/get/files/m8a49kdn-v8oim-first-BWpEh84X.jpg"
                                        alt="Superior Room"
                                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                    />
                                    <div className="flex justify-center mt-4 gap-2">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a49kdn-v8oim-first-BWpEh84X.jpg"
                                                alt="Thumbnail 1"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a49kex-zp1oq-third-CG5nY3Ek.jpg"
                                                alt="Thumbnail 2"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a49kfq-fzp3d-fourth-Dy23iPzr.jpg"
                                                alt="Thumbnail 3"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a49kg8-otehc-second-68QeEQBF.jpg"
                                                alt="Thumbnail 4"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right - Content */}
                                <div className="w-full lg:w-1/2 text-gray-600">
                                    <h2 className="text-lg md:text-xl  text-pink-400 mb-4">
                                        Superior Room
                                    </h2>
                                    <p className="leading-relaxed">
                                        The Superior Rooms of 320 sq ft are bigger than Standard
                                        Rooms with a large window for lots of natural light. These
                                        rooms have seating area as well and come with King
                                        Beds, en-suite Bathrooms, noiseless Split AC, flat screen
                                        TV, Work Desk & Chair. A Tea/Coffee maker is provided
                                        for guest use along with complimentary Wifi Internet. It's
                                        ideal for single or couples who want a spacious and
                                        comfortable room for Short/Long Stay.
                                    </p>
                                </div>

                            </div>

                            {/* Junior Suite */}
                            <div className="flex flex-col lg:flex-row-reverse gap-8">
                                {/* Right - Image */}
                                <div className="w-full lg:w-1/2">
                                    <img
                                        src="https://node.bluokolkata.com/get/files/m8a4bn5f-7ra8l-first-DxhYexmo.jpg"
                                        alt="Junior Suite"
                                        className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
                                    />
                                    
                                    <div className="flex justify-center mt-4 gap-2">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a4bn5f-7ra8l-first-DxhYexmo.jpg"
                                                alt="Thumbnail 1"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a4bn65-id0nw-third-DoQLkKvU.jpg"
                                                alt="Thumbnail 2"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a4bn7b-si4pm-fourth-aWwDDidy.jpg"
                                                alt="Thumbnail 3"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg shadow-sm">
                                            <img
                                                src="https://node.bluokolkata.com/get/files/m8a4bn7t-bp5c0-first-Cs72WZfF.jpg"
                                                alt="Thumbnail 4"
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Left - Content */}
                                <div className="w-full lg:w-1/2 text-gray-600">
                                    <h2 className="text-lg md:text-xl  text-pink-400 mb-4">
                                        Junior Suite
                                    </h2>
                                    <p className="leading-relaxed">
                                        These Suites measuring 510 sq ft are our largest rooms
                                        and come with a spacious seating area that has sofa
                                        seating & Dining Table. You get a King bed with en-suite
                                        Bathroom, Two Flat screen TV with Tata Sky or
                                        Netflix/Prime, Work Desk with Chair, split AC, Tea/Coffee
                                        maker and complimentary high-speed Internet. These are
                                        perfect rooms for a couple or small family who want to
                                        enjoy more space and comfort of a suite with views.
                                    </p>
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className=" border-l border-gray-300 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-6 pb-8">
                        <SideForm />
                    </div>
                </div>



            </div>

            <ChatPopup />
            <Scroll />
        </>
    );
}
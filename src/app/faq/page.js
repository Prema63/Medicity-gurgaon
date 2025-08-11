"use client";

import React, { useState } from "react";
import Head from "next/head";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/SideFrom";

export default function AboutUs() {
    const [isLoading, setIsLoading] = useState(true);

    const faqData = [
        {
            id: 1,
            question: "How many rooms are available at your hotel in New Town, Kolkata?",
            answer: "We have 20 comfortable rooms to accommodate our guests."
        },
        {
            id: 2,
            question: "Is your hotel suitable for corporate stays?",
            answer: "Yes, our hotel is ideal for corporate stays, and we offer special rates for bulk bookings."
        },
        {
            id: 3,
            question: "Can I book multiple rooms for a group or corporate event?",
            answer: "Certainly, we can accommodate bulk bookings to cater to your group or corporate needs."
        },
        {
            id: 4,
            question: "Is Wi-Fi available at your hotel, and is it complimentary?",
            answer: "Yes, we offer complimentary Wi-Fi access to all our guests, making it convenient for business travellers."
        },
        {
            id: 5,
            question: "How often is housekeeping provided?",
            answer: "Housekeeping services are offered every alternate day to maintain your comfort and privacy."
        },
        {
            id: 6,
            question: "Can we host gatherings or events on the terrace?",
            answer: "Absolutely, our spacious terrace is perfect for get-togethers, corporate events, or any special occasions."
        },
        {
            id: 7,
            question: "Is your hotel couple-friendly?",
            answer: "Yes, we are a couple-friendly hotel and provide a comfortable and safe environment for all our guests."
        },
        {
            id: 8,
            question: "Is your hotel close to New Town IT Park?",
            answer: "Our hotel is conveniently located, less than 1 km away from New Town IT Park, making it ideal for business travellers."
        },
        {
            id: 9,
            question: "What is the distance from your hotel to Tata Cancer Hospit",
            answer: "We are less than 1 km away from Tata Cancer Hospital, ensuring easy access for those visiting the hospital."
        },
        {
            id: 10,
            question: "How far is your hotel from the airport, and what is the best way to get there?",
            answer: "Our hotel is a 20-minute drive from the airport, and we can arrange transportation for you upon request."
        },
        {
            id: 11,
            question: " Do you offer secure parking for guests?",
            answer: "Yes, we provide secure parking facilities for the convenience and peace of mind of our guests."
        },
        {
            id: 12,
            question: " Can I request an extra bed in my room?",
            answer: "Yes, we can arrange an extra bed in your room upon request and additional charges."
        },
        {
            id: 13,
            question: "Do you offer food service at your hotel?",
            answer: "Yes, we provide on-site dining options, including breakfast, lunch, and dinner with additional cost. Room service is also available"
        },
        {
            id: 14,
            question: "Is smoking allowed in the rooms?",
            answer: "No, our rooms are non-smoking. Smoking is allowed in designated areas."
        },
        {
            id: 15,
            question: "Can I book tours and local activities through the hotel?",
            answer: "Yes, our front desk can assist you in booking tours and local activities."
        },
        {
            id: 16,
            question: "Are pets allowed in the hotel?",
            answer: "Yes, Our Hotel is pet friendly. Subject to prior Approval. Additional charges may apply."
        },
        {
            id: 17,
            question: " Is there a fitness center on the premises?",
            answer: "Yes, we have a fitness center for our guests’ convenience."
        },
        {
            id: 18,
            question: "Can I request a late check-in or out?",
            answer: " Yes, when you book premier category rooms you will get complimentary Late check-in or outs upto 4 hours. For rest of the category booking subject to availability. check with the front desk."
        },
        {
            id: 19,
            question: " Is room service available around the clock?",
            answer: "Our room service is available during specified hours. Please check with the front desk for details."
        },
        {
            id: 20,
            question: " Can you accommodate dietary restrictions for meals?",
            answer: "We can accommodate dietary restrictions. Please inform us in advance."
        },
    ];

    return (
        <>
            <div className="w-full shadow-md min-h-screen">
                {/* Top Header */}
                <div className="flex flex-col md:flex-row bg-[#28343c] text-white py-5 px-4 md:px-8 text-md md:text-base">
                    <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                        <span className="text-sm text-gray-300">FAQ</span>
                    </div>
                    <div className="w-full sm:w-1/2 text-center sm:text-right">
                        <span className="text-sm text-gray-300">
                            You are here: Home / FAQ
                        </span>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-5 py-8 flex flex-col lg:flex-row gap-8">
                    {/* Left Section */}
                    <div className="w-full lg:w-2/3 text-gray-600 space-y-4 p-2">
                        <p className="text-2xl text-gray-800 mb-4">
                           FAQs – Frequently Asked Questions
                        </p>
                        <div className=" ">
                            
                            <div>
                                {faqData.map((faq, index) => (
                                    <div key={faq.id} className="p-2">
                                        <div className="mb-2">
                                            <span className="text-pink-400 font-semibold text-sm sm:text-base">
                                                Q.{faq.id}. {faq.question}
                                            </span>
                                        </div>
                                        <div className="sm:ml-6">
                                            <span className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                                A. {faq.answer}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="border-l border-gray-300 w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 md:pl-6 pb-8">
                        <Sideform />
                    </div>
                </div>
            </div>

            <ChatPopup />
            <Scroll />
        </>
    );
}
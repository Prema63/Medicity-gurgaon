"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/Sideform";
// import {LoadingMutatingDots} from "../global/loading/Loadings";

// Contact Form Component
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        apartmentType: '',
        budget: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className=" p-6 ">
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                {/* Apartment Field */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Apartment Size-
                    </label>
                    <div className="space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="serviced-room"
                                    checked={formData.apartmentType === 'serviced-room'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Studio</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="studio-apartment"
                                    checked={formData.apartmentType === 'studio-apartment'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">One Bedroom Apartment</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="one-bedroom"
                                    checked={formData.apartmentType === 'one-bedroom'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Two Bedroom</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="apartmentType"
                                    value="two-bedroom"
                                    checked={formData.apartmentType === 'two-bedroom'}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                                />
                                <span className="text-sm text-gray-700">Three Bedroom </span>
                            </label>
                            
                        </div>
                    </div>
                </div>

                {/* Budget */}
                <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                        Your Budget
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="budget"
                                value="low-budget"
                                checked={formData.budget === 'low-budget'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                            />
                            <span className="text-sm text-gray-700">Low Budget</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="budget"
                                value="mid-range"
                                checked={formData.budget === 'mid-range'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                            />
                            <span className="text-sm text-gray-700">Mid Range</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                name="budget"
                                value="high-end"
                                checked={formData.budget === 'high-end'}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-[#222222] focus:ring-[#222222] border-gray-300"
                            />
                            <span className="text-sm text-gray-700">High End</span>
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-2 hover:bg-gray-700 transition-colors font-medium text-sm"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default function Pricing() {
    return (
        <div className="w-full bg-gray-50 shadow-md min-h-screen">
            {/* Top Header */}
            <div className="flex flex-col my-4 md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                    <span className=" text-xs text-gray-300 "> Contact-Us </span>
                </div>
                <div className="w-full sm:w-1/2 text-center sm:text-right">
                    <span className="text-xs text-gray-300">
                        You are here: Homes / Contact-Us
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 max-w-7xl">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-md md:text-3xl font-bold text-gray-700">
                            Send Us An Email
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            To make Long Stay Bookings and get Special Offers for stays of more than 1 month duration, please use our Enquiry Form below to send us your requirements below.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            In case of urgent requirements, please give us a call at <span className="text-black font-bold">(+91) 8587091117</span>  or Email –
                        </p>
                        <p className=" font-bold text-gray-600 text-sm md:text-base leading-relaxed">
                            medicitygurgaon@gmail.com
                        </p>
                    </div>
                    {/* Contact Form */}
                    <ContactForm />
                </div>

                {/* SideForm  */}
                <div className="w-full lg:w-1/3">
                    <div className="lg:sticky lg:top-8">
                        <div className="border-l border-gray-200 p-4 md:p-6">
                            <Sideform />
                        </div>
                    </div>
                </div>

            </div>
            <ChatPopup />
            <Scroll />
        </div>
    );
}
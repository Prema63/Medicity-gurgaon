"use client";

import React, { useState } from "react";
import ChatPopup from "../global/chatPopUp/ChatPopUP";
import Scroll from "../global/scroll/Scroll";
import Sideform from "../global/Sideform/SideFrom";

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
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
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
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
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
                        className="w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                        message
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-8 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#222222] focus:border-transparent transition-colors"
                        required
                    />
                </div>



                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="bg-[#c2424e] text-white px-6 py-2  transition-colors font-medium text-sm"
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
            <div className="flex flex-col md:flex-row bg-[#222222] text-white py-5 px-4 md:px-8 text-sm md:text-base">
                <div className="w-full sm:w-1/2 text-center sm:text-left mb-2 sm:mb-0">
                    <span className=" text-sm text-gray-300 "> Contact-Us </span>
                </div>
                <div className="w-full sm:w-1/2 text-center sm:text-right">
                    <span className="text-sm text-gray-300">
                        You are here: Homes / Contact-Us
                    </span>
                </div>
            </div>

            {/* Main Content */}
            <div className="container px-4 py-8 flex flex-col lg:flex-row gap-8 max-w-7xl">
                {/* Left Section */}
                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="space-y-4">
                        <h1 className="text-md md:text-3xl font-bold text-gray-700">
                            Contact Us @ BluO Kolkata
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            You can fill the short Contact Form below for sending us your requirements to book our Bluo Stays at New Town in Kolkata
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            You can also Call/WhatsApp <span className="text-pink-600">+91 9999222706</span> OR Email <span className="text-pink-600">sales@bluokolkata.com</span> We look forward to hosting you at BluO Kolkata!l –
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
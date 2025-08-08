"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
import sideformImage from '../../../../public/sideform.jpg';
import { ToastContainer, toast } from "react-toastify";

const Sideform = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [formErrors, setFormError] = useState({
    name: "",
    email: "",
    phone: "",
  });


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      errors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(errors).length) {
      setFormError(errors);
      return;
    }

    console.log("Form Submitted:", formData);
    const allData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      title: "Call Me Back",
    };

    setIsLoading(true);
    
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full py-3 sticky top-8 z-10">
        {/* Contact Info Section */}
        <div className="mb-4 text-center text-gray-700">
          <p className="mb-1 text-sm">
            Call <span className="font-semibold">{data?.phone || "+91 9999222706"}</span>
          </p>
          <p className="text-sm">
            You can also Email us - <br />
            <a
              href={`mailto:${data?.email || "sales@bluokolkata.com"}`}
              className="text-red-600 font-bold hover:text-red-700 transition-colors"
            >
              {data?.email || "sales@bluokolkata.com"}
            </a>
          </p>
        </div>


        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="p-6">
            <h5 className="text-lg font-bold text-center mb-6 text-gray-800 tracking-wide">
              CALL ME BACK
            </h5>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {formErrors.name && (
                  <div className="text-yellow-600 text-sm mt-1">{formErrors.name}</div>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  id="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {formErrors.email && (
                  <div className="text-yellow-600 text-sm mt-1">{formErrors.email}</div>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {formErrors.phone && (
                  <div className="text-yellow-600 text-sm mt-1">{formErrors.phone}</div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </form>
          </div>
        </div>


        {/* TripAdvisor Image */}
        <div className="text-center mt-6">
          <Image
            src={sideformImage}
            alt="Tripadvisor Traveller's Choice"
            width={150}
            height={100}
            className="mx-auto object-contain"
            priority={false}
          />
        </div>
      </div>
    </>
  );
};

export default Sideform;
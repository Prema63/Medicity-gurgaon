'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import certificate from '../../../public/footer/footer.jpg';


const Footer = () => {
  const [data, setData] = useState({});
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
y
    setTimeout(() => {
      toast.success("Form submitted successfully!");
      setIsLoading(false);
      setFormData({ name: "", email: "", phone: "" });
      setFormError({});
    }, 2000);
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full text-white">
        <div className="flex flex-wrap bg-[#232b30]  text-white p-16">
          <div className="w-full lg:w-2/3 ">
            <div className="flex flex-wrap">
              {/* Distance from Key Areas */}
              <div className="w-full md:w-1/2">
                <h5 className="uppercase text-lg font-bold text-white mt-3">Distance from Key Areas –</h5>
                <ul className="list-none py-3">
                    <p className="text-white py-2">
                      <li>Biswa Bangla Gate (900 meters)</li>
                      <li>Tata Institute (1.5 km)</li>
                      <li>Salt Lake Sector V (4 km)</li>
                      <li>Kolkata Airport (12 km)</li>
                    </p>
                </ul>
              </div>

              {/* Our Address */}
              <div className="w-full md:w-1/2">
                <h5 className="uppercase text-lg font-bold text-white mt-3">Our Address</h5>
                <div className="mt-3 text-lg text-gray-400">
                  <ul className="list-none py-3">
                    <p className="text-white py-2">
                      <li>BluO Lake View New Town</li>
                      <li>DF-89 Action Area 1</li>
                      <li>New Town</li>
                      <li>Kolkata 700156</li>
                      <li>West Bengal</li>
                      <li>Landmark: Opp. Bisarjan Ghat</li>
                      <li>Phone/WhatsApp: +919999222706t</li>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call Me Back Form */}
          <div className="w-full lg:w-1/3">
            <div>
              <h5 className="uppercase font-bold text-white">Call Me Back</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 mt-2">
                  <label htmlFor="name" className="block text-white">Your Name (required)</label>
                  <input
                    type="text"
                    className="w-full p-2 bg-[#28343c] text-white border border-gray-600 rounded"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {formErrors.name && <div className="text-yellow-400">{formErrors.name}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="block text-white">Your Email (required)</label>
                  <input
                    type="email"
                    className="w-full p-2 bg-[#28343c] text-white border border-gray-600 rounded"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {formErrors.email && <div className="text-yellow-400">{formErrors.email}</div>}
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="block text-white">Your Phone (required)</label>
                  <input
                    type="tel"
                    className="w-full p-2 bg-[#28343c] text-white border border-gray-600 rounded"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {formErrors.phone && <div className="text-yellow-400">{formErrors.phone}</div>}
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-white text-black rounded-none py-2.5 px-7.5 float-left"
                  >
                    {isLoading ? (
                      <span className="inline-block w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" role="status" aria-hidden="true"></span>
                    ) : (
                      "Send"
                    )}
                  </button>
                </div>
                <div className="clear-both"></div>
              </form>
            </div>
          </div>
        </div>

        {/* Certificate Image Section */}
        <div className="flex justify-center bg-[#232b30] text-white py-4">
          <Image
            src={certificate}
            alt="Certificate of Excellence"
            width={200}
            height={200}
            className="w-[200px]"
          />
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center bg-[#232b30] text-white">
          <div className="w-full">
            <hr className="border-t border-gray-600 py-3" />
            <p className="mb-0 text-white">© 2025 BluO Boutique Hotel Suites Kolkata - Serviced Apartments NewTown Rajarhat</p>
          </div>
          <div className="w-full mt-2">
            <Link href="/" className="text-white no-underline mx-2 font-bold">Home</Link>
            <Link href="/terms-conditions" className="text-white no-underline mx-2 font-bold">Terms & Conditions</Link>
            <Link href="/privacy-policy" className="text-white no-underline mx-2 font-bold">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

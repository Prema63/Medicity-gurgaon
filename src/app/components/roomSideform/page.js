// "use client"

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import sideformImage from '../../../../public/sideform.jpg';
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

// const roomSideform = () => {
//     const [data, setData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });

//     const [formErrors, setFormError] = useState({
//         name: "",
//         email: "",
//         phone: "",
//     });

//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     try {
//     //       const response = await axios.get(`${url}`);
//     //       setData(response.data.data);
//     //       setIsLoading(false);
//     //     } catch (error) {
//     //       console.error("Error fetching data:", error);
//     //       setIsLoading(false);
//     //     }
//     //   };

//     //   fetchData();
//     // }, []);

//     const handleInputChange = (e) => {
//         const { id, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [id]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const errors = {};

//         if (!formData.name.trim()) {
//             errors.name = "Name is required";
//         }

//         if (!formData.email.trim()) {
//             errors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             errors.email = "Email is invalid";
//         }

//         if (!formData.phone.trim()) {
//             errors.phone = "Phone is required";
//         } else if (!/^\d{10}$/.test(formData.phone.trim())) {
//             errors.phone = "Phone number must be exactly 10 digits";
//         }

//         if (Object.keys(errors).length) {
//             setFormError(errors);
//             return;
//         }

//         console.log("Form Submitted:", formData);
//         const allData = {
//             name: formData.name,
//             email: formData.email,
//             phone: formData.phone,
//             title: "Call Me Back",
//         };

//         setIsLoading(true);
//         try {
//             const response = await fetch(url + "user/callback-request", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(allData),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 console.log("Form submitted successfully:", result);
//                 toast.success("Your request has been submitted successfully!");
//             } else {
//                 console.error("Error:", result);
//                 toast.error("Something went wrong. Please try again later.");
//             }

//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//             });
//             setFormError({});
//         } catch (error) {
//             console.error("Error during form submission:", error);
//             toast.error("Something went wrong. Please try again later.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <>
//             <ToastContainer
//                 position="top-right"
//                 autoClose={3000}
//                 hideProgressBar={false}
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 pauseOnHover
//             />
//             <div className="w-full py-3 sticky top-8 z-10">
//                 {/* Contact Info Section */}
//                 <div className="mb-4 text-center text-gray-700">
//                     <p className=" text-lg left-0 text-black">CALL +918587091117</p>

//                     <p className=" text-lg left-0 text-black">CALL +918587091117</p>
//                     <p className="text-md text-gray-500">
//                         Email:
//                         <a
//                             href={`mailto:${data?.email || "medicitygurgaon@gmail.com"}`}
//                             className="text-black font-semibold ml-2 hover:text-black transition-colors"
//                         >
//                             {data?.email || "medicitygurgaon@gmail.com"}
//                         </a>
//                     </p>
//                 </div>

//                 {/* TripAdvisor Image */}
//                 <div className="text-center  mt-6">
//                     <Image
//                         src={sideformImage}
//                         alt="Tripadvisor Traveller's Choice"
//                         width={150}
//                         height={100}
//                         className="mx-auto object-contain"
//                         priority={false}
//                     />
//                 </div>

//                 <div className="px-8">
//                     <div className="text-gray-700 pt-6 space-y-1">
//                         <p className="font-semibold">Our Address</p>
//                         <p className="text-black">Medicity Service Apartments Gurgaon</p>
//                         <p>Medanta Hospital Sector 39,</p>
//                         <p>Gurgaon 122002,</p>
//                         <p>Haryana, INDIA.</p>
//                         <p>Landmark: Near Medanta Medicity</p>
//                         <p>Hospital</p>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );

// };

// export default roomSideform;




"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sideformImage from '../../../../public/sideform.jpg';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const roomSideform = () => {
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
        try {
            const response = await fetch(url + "user/callback-request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(allData),
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Form submitted successfully:", result);
                toast.success("Your request has been submitted successfully!");
            } else {
                console.error("Error:", result);
                toast.error("Something went wrong. Please try again later.");
            }

            setFormData({
                name: "",
                email: "",
                phone: "",
            });
            setFormError({});
        } catch (error) {
            console.error("Error during form submission:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const roomTypes = [
        { name: 'Deluxe Room', href: '/rooms/delux' },
        { name: 'Deluxe Room with Kitchen', href: '/rooms/delux1rk' },
        { name: 'Standard One Bedroom Apartment', href: '/rooms/standard1bhk' },
        { name: 'Standard Three Bedroom Apartment', href: '/rooms/standard3bhk' },
        { name: 'Standard Two Bedroom Apartment', href: '/rooms/standard2bhk' },
        { name: 'Studio Apartment', href: '/rooms/studio' },
        { name: 'Superior One Bedroom Apartment', href: '/rooms/sup1bhk' },
        { name: 'Superior Three Bedroom Apartment', href: '/rooms/sup3bhk' },
        { name: 'Superior Two Bedroom Apartment', href: '/rooms/sup2bhk' },
    ];

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
                    {/* Room Types Section */}
                    <div className="mt-6 text-left">
                        <ul className="space-y-2 text-sm text-gray-500">
                            {roomTypes.map((room, index) => (
                                <li key={index}>
                                    <Link
                                        href={room.href}
                                        className="hover:text-black transition-colors"
                                    >
                                        {room.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <p className=" text-lg left-0 text-left mt-12 text-black">CALL +918587091117</p>
                    <p className="text-md text-gray-500 text-left">
                        Email:
                        <a
                            href={`mailto:${data?.email || "medicitygurgaon@gmail.com"}`}
                            className="text-black font-semibold ml-2 hover:text-black transition-colors"
                        >
                            {data?.email || "medicitygurgaon@gmail.com"}
                        </a>
                    </p>
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

                {/* Address Section */}
                <div className="px-8">
                    <div className="text-gray-700 pt-6 space-y-1">
                        <p className="font-semibold">Our Address</p>
                        <p className="text-black">Medicity Service Apartments Gurgaon</p>
                        <p>Medanta Hospital Sector 39,</p>
                        <p>Gurgaon 122002,</p>
                        <p>Haryana, INDIA.</p>
                        <p>Landmark: Near Medanta Medicity</p>
                        <p>Hospital</p>
                    </div>
                </div>


            </div>
        </>
    );
};

export default roomSideform;

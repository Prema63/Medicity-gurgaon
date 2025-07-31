"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section4 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Stayed with my family of 4, everything is super clean and service is the best. Loved the kitchen, also the fact that Medanta Medicity hospital was at walking distance. I would definitely stay here again as it is perfect for family who want to stay in safe and clean apartment near the hospital. We appreciated that we're able to check out late, and our luggage was kept for us for the rest of our stay. Thank you very much. Great service.",
      name: "Nidhi Chopra",
      location: "Mumbai"
    },
    {
      id: 2,
      text: "Amazing experience! The staff was incredibly helpful and the amenities exceeded our expectations. The location is perfect for business travelers and the rooms are spacious and well-maintained. Would highly recommend to anyone visiting the area.",
      name: "Rajesh Kumar",
      location: "Delhi"
    },
    {
      id: 3,
      text: "Perfect stay for our weekend getaway. The property is beautifully designed and very clean. The proximity to major attractions made our trip so convenient. The hospitality was outstanding and we felt very welcome throughout our stay.",
      name: "Priya Sharma",
      location: "Bangalore"
    },
    {
      id: 4,
      text: "Exceptional service and attention to detail. The room was comfortable and had all the necessary amenities. The staff went above and beyond to ensure our comfort. Will definitely be staying here again on our next visit.",
      name: "Amit Patel",
      location: "Ahmedabad"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="bg-[#222222] py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide uppercase">
            What Others Say About Us
          </h2>
          <div className="mt-4 w-24 h-0.5 bg-gray-600 mx-auto"></div>
        </div>

        {/* Testimonial Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 lg:-translate-x-12 z-10 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-8 lg:translate-x-12 z-10 p-2 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Content */}
          <div className=" rounded-lg p-6 sm:p-8 lg:p-12 mx-4 sm:mx-8 lg:mx-12 min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col justify-center">
            <div className="text-center">
              {/* Quote */}
              <blockquote className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed italic mb-8 sm:mb-10">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              {/* Author */}
              <div className="space-y-2">
                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-medium">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
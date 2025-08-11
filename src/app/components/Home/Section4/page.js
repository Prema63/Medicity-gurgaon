"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Section4 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Stayed with my family of 4, everything is super clean and service is the best. Loved the kitchen, also the fact that Medanta Medicity hospital was at walking distance. I would definitely stay here again as it is perfect for family who want to stay in safe and clean apartment near the hospital. We appreciated that we’re able to check out late, and our luggage was kept for us for the rest of our stay. Thank you very much. Great service.",
      name: "Nidhi Chopra",
      location: "Mumbai"
    },
    {
      id: 2,
      text: "The apartment itself is wonderful, walking distance from Medanta Medicity Hospital. The wifi is fantastic, Spotlessly clean with a lovely Kitchen. Nice shower. Very convenient parking too. I couldn’t recommend the apartment itself any more! One tiny thing – it would be great if apartment had a safe to put ones valuables.",
      name: "Anna Vencel",
      location: "Ukraine"
    },
    {
      id: 3,
      text: "It was a very comfortable stay and conveniently located apartment with great amenities besides our own Kitchen and lovely staff that are always available on call. We will definitely stay here again and not in any hotel!.",
      name: "Venkatesh RP",
      location: "Bangalore"
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
    <section className="bg-[#222222] min-h-[20rem] sm:min-h-[24rem] md:min-h-[26rem] lg:min-h-[26rem] xl:min-h-[28rem] flex items-center">
      <div className="w-full sm:px-6">
        {/* Section Title */}
        <div className="text-center px-4 sm:px-0">
          <h2 className="text-xl sm:text-xl pt-2 lg:text-xl font-light text-gray-300 tracking-wide uppercase">
            Guest Feedbacks @ BluO Stays – Kolkata
          </h2>
        </div>

        {/* Testimonial Container */}
        <div className="relative w-full px-4 sm:px-6 lg:px-12 mt-6">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Content */}
          <div className="rounded-lg sm:p-6 md:p-8 mx-auto max-w-4xl text-center flex flex-col justify-center">
            <blockquote className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </blockquote>
            <div className="mt-4">
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
    </section>
  );
};

export default Section4;

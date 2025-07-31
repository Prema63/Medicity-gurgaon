"use client"

import { useState } from 'react';

export default function Section3() {
  const [selectedImage, setSelectedImage] = useState(0);

  const mainImages = [
    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-16-03-24-5-38-18 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com"
  ];

  const galleryImages = [
    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-16-03-24-5-38-18 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-18-03-24-12-30-17 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-16-03-24-6-19-12 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-18-03-24-12-00-52 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-16-03-24-2-53-04 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-16-03-24-6-21-23 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/03/Photo-18-03-24-11-59-52 AM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/2-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/10-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/1-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/Photo-12-03-24-1-34-18 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/8-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/Photo-12-03-24-1-32-59 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com",

    "https://medicityserviceapartmentsgurgaon.com/wp-content/uploads/al_opt_content/IMAGE/medicityserviceapartmentsgurgaon.com/wp-content/uploads/2024/09/Photo-12-03-24-1-32-36 PM-495x400.jpg.bv_resized_mobile.jpg.bv.webp?bv_host=medicityserviceapartmentsgurgaon.com"
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-xs md:text-xl font-bold text-gray-800 mb-4">
            SERVICE APARTMENTS AVAILABLE WITH US
          </h2>
          <div className="w-34 h-1 bg-gray-200 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/*   Image Section */}
          <div className="space-y-4 ">
            {/* Main Image */}
            <div className="relative border border-gray-200 overflow-hidden rounded">
              <img
                src={galleryImages[selectedImage]}
                alt="Service Apartment Main View"
                className="w-full h-64 md:h-80 lg:h-96 object-cover p-2"
              />            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-7 gap-2">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded border border-gray-200"
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover p-2 hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/*  Content Section */}
          <div className="space-y-6 text-md">
            <div>
              <p className="text-gray-500 leading-relaxed mb-4">
                We offer modern, custom-designed, non-sharing Service Apartments near{' '}
                <span className="font-semibold text-gray-600">Medanta Medicity Hospital in Gurgaon</span>.
              </p>

              <p className="text-gray-500 leading-relaxed mb-4">
                They are provided in most sizes –{' '}
                <span className="font-semibold text-gray-600">Studios, One Bedroom</span>{' '}
                Apartments as well as{' '}
                <span className="font-semibold text-gray-600">Two & Three Bedroom</span>{' '}
                Fully Furnished Homes.
              </p>
            </div>

            <div>
              <p className="text-gray-500 leading-relaxed mb-4">
                Our USP is that all our apartments come with individual{' '}
                <span className="font-semibold text-gray-600">fully loaded Kitchens</span>{' '}
                and Living rooms to give full privacy and space when compared with any Hotel & Guest House near Medanta Hospital.
              </p>
            </div>

            <div>
              <p className="text-gray-500 leading-relaxed mb-4">
                Moreover, our Apartments also do not have any shared common areas with other guests ensuring{' '}
                <span className="font-semibold text-gray-600">Social Distancing, Privacy & Hygiene</span>. We also offer{' '}
                <span className="font-semibold text-gray-600">Contactless Check-Ins & Digital Payments</span>{' '}
                with high focus on minimizing close contact.
              </p>
            </div>

            <div className="">
              <p className="text-gray-500 leading-relaxed">
                When you stay with us, we can guarantee you a home-like comfortable stay that's facilitated by our Professional Hospitality team – Just perfect for your stay while visiting the{' '}
                <span className="font-semibold text-gray-600">Medanta Medicity Hospital</span>!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
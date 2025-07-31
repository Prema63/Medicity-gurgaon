'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo/logo.png';

function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleRoomsDropdown = () => setRoomsDropdownOpen(!roomsDropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);
  const closeRoomsDropdown = () => setRoomsDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownOpen && !event.target.closest('.locations-dropdown')) setDropdownOpen(false);
      if (roomsDropdownOpen && !event.target.closest('.rooms-dropdown')) setRoomsDropdownOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownOpen, roomsDropdownOpen]);

  const locations = [
    'Delux Room',
    'Delux Room with kitchen',
    'Studio Apartment',
    'Standard One Bedroom Apartment',
    'Superior One Bedroom Apartment',
    'Standard Two Bedroom Apartment',
    'Superior Two Bedroom Apartment',
    'Standard Three Bedroom Apartment',
    'Superior Three Bedroom Apartment'
  ];

  const roomTypes = [
    { name: 'Delux Room', href: '/rooms/delux' },
    { name: 'Delux Room with kitchen', href: '/rooms/delux1rk' },
    { name: 'Standard One Bedroom Apartment', href: '/rooms/standard1bhk' },
    { name: 'Superior One Bedroom Apartment', href: '/rooms/sup1bhk' },
    { name: 'Standard Two Bedroom Apartment', href: '/rooms/standard2bhk' },
    { name: 'Standard Three Bedroom Apartment', href: '/rooms/standard3bhk' },
    { name: 'Superior Two Bedroom Apartment', href: '/rooms/sup2bhk' },
    { name: 'Superior Three Bedroom Apartment', href: '/rooms/sup3bhk' },
    { name: 'Studio Apartment', href: '/rooms/studio' },
  ];

  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/rooms', label: 'Rooms', hasDropdown: true, dropdownType: 'rooms' },
    { href: '/rentals', label: 'Rentals' },
    { href: '/offers', label: '*Offers*' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="sticky top-0 z-50 py-4 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <Image src={logo} className="h-8 sm:h-10 w-auto" alt="Logo" />
              </div>
            </Link>

            <div className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {navigationItems.map(({ href, label, hasDropdown, dropdownType }) => (
                  <li
                    key={href}
                    className={`relative ${dropdownType === 'rooms' ? 'rooms-dropdown' : 'locations-dropdown'
                      }`}
                    onMouseEnter={() =>
                      dropdownType === 'rooms' ? setRoomsDropdownOpen(true) : setDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                      dropdownType === 'rooms' ? setRoomsDropdownOpen(false) : setDropdownOpen(false)
                    }
                  >
                    {hasDropdown ? (
                      <div className="relative">
                        <Link
                          href={href}
                          className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 flex items-center gap-1 ${(dropdownType === 'rooms' && (pathname.startsWith('/rooms') || pathname.startsWith('/room'))) ||
                            (dropdownType !== 'rooms' && (pathname.startsWith('/top-locations') || pathname.startsWith('/location')))
                            ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:transform after:scale-x-100'
                            : 'text-gray-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:transform hover:after:scale-x-100 after:scale-x-0'
                            } after:transition-transform after:duration-300`}
                        >
                          {label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${(dropdownType === 'rooms' ? roomsDropdownOpen : dropdownOpen) ? 'rotate-180' : ''
                              }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </Link>

                        {dropdownType === 'rooms' && roomsDropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            <div className="p-2">
                              {roomTypes.map((room) => (
                                <Link
                                  key={room.name}
                                  href={room.href}
                                  onClick={closeRoomsDropdown}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors duration-200 border border-transparent hover:border-blue-200"
                                >
                                  {room.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {dropdownType !== 'rooms' && dropdownOpen && (
                          <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                            <div className="grid grid-cols-2 gap-1 p-2">
                              {locations.map((location) => (
                                <Link
                                  key={location}
                                  href={`/location/${location.toLowerCase().replace(/\s+/g, '-')}`}
                                  onClick={closeDropdown}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md transition-colors duration-200 text-center border border-gray-100 hover:border-gray-200"
                                >
                                  {location}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={href}
                        className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 ${pathname === href
                          ? 'text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600 after:transform after:scale-x-100'
                          : 'text-gray-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-blue-600 hover:after:transform hover:after:scale-x-100 after:scale-x-0'
                          } after:transition-transform after:duration-300 ${label === '*Offers*' ? 'text-orange-500 hover:text-orange-600' : ''
                          }`}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-blue-600 transition-colors duration-200"
              >
                <svg className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
            ? 'max-h-screen opacity-100 mt-4'
            : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg border border-gray-100">
              {navigationItems.map(({ href, label, hasDropdown, dropdownType }) => (
                <div key={href}>
                  {hasDropdown ? (
                    <div>
                      <button
                        onClick={() => dropdownType === 'rooms' ? setRoomsDropdownOpen(!roomsDropdownOpen) : setDropdownOpen(!dropdownOpen)}
                        className="w-full text-left px-4 py-3 text-base font-medium rounded-md transition-all duration-200 text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center justify-between"
                      >
                        {label}
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${(dropdownType === 'rooms' ? roomsDropdownOpen : dropdownOpen) ? 'rotate-180' : ''
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Rooms Dropdown */}
                      {dropdownType === 'rooms' && roomsDropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {roomTypes.map((room) => (
                            <Link
                              key={room.name}
                              href={room.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setRoomsDropdownOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              {room.name}
                            </Link>
                          ))}
                        </div>
                      )}



                      {/* Mobile Locations Dropdown */}
                      {hasDropdown && dropdownType !== 'rooms' && dropdownOpen && (
                        <div className="pl-4 mt-1 space-y-1">
                          {locations.map((location) => (
                            <Link
                              key={location}
                              href={`/location/${location.toLowerCase().replace(/\s+/g, '-')}`}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setDropdownOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                            >
                              {location}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${pathname === href
                        ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                        : `text-gray-700 hover:text-blue-600 hover:bg-gray-50 ${label === '*Offers*' ? 'text-orange-500 hover:text-orange-600' : ''
                        }`
                        }`}
                    >
                      {label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
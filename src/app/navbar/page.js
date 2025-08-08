'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LogoImage from '../../../public/logo/bluo-logo.png';

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav 
        className="sticky top-0 z-50 py-2  bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image  
                src={LogoImage} 
                alt="Olive Serviced Apartments"
                width={150} 
                height={50} 
                priority 
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about-us', label: 'About Us' },
                  { href: '/rooms', label: 'Rooms' },
                  { href: '/faq', label: 'FAQ' },
                  { href: '/rentals', label: 'Pricing' },
                  { href: '/offers', label: 'Offers' },
                  { href: '/contact-us', label: 'Contact Us' },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-[#42599d] ${
                        pathname === href
                          ? 'text-[#42599d] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#42599d] after:transform after:scale-x-100'
                          : 'text-gray-700 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#42599d] hover:after:transform hover:after:scale-x-100 after:scale-x-0'
                      } after:transition-transform after:duration-300`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#42599d] hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#42599d] transition-colors duration-200"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? 'max-h-96 opacity-100 mt-4' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg border border-gray-100">
              {[
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/rooms', label: 'Rooms' },
                { href: '/faq', label: 'FAQ' },
                { href: '/rentals', label: 'Pricing' },
                { href: '/offers', label: 'Offers' },
                { href: '/contact-us', label: 'Contact Us' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-200 ${
                    pathname === href
                      ? ' bg-blue-50 border-l-4 border-[#42599d]'
                      : 'text-gray-700 hover:text-[#42599d] hover:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
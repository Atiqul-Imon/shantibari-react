import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-base font-bold">
            <img 
              src="https://res.cloudinary.com/db5yniogx/image/upload/v1735327489/shantibarilogocloud_a8h82d.png" 
              alt="Shantibari Logo" 
              className="w-16 h-auto"  // Adjusted logo size
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links */}
          <div className="hidden lg:flex space-x-6 font-roboto text-sm">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#about" className="hover:text-gray-400">About Us</a>
            <a href="#services" className="hover:text-gray-400">Services</a>
            <a href="#events" className="hover:text-gray-400">Events</a>
            <a href="#gallery" className="hover:text-gray-400">Gallery Frida Kahlo</a>
            <a href="#contact" className="hover:text-gray-400">Contact Us</a>
            <a href="#audio-visual" className="hover:text-gray-400">Audio Visual</a>
            <a href="#media-coverage" className="hover:text-gray-400">Media Coverage</a>
            <a href="#brochure" className="hover:text-gray-400">Download Brochure</a>
          </div>

          {/* Call Us Button */}
          <div className="hidden lg:block">
            <a
              href="tel:+1234567890"
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 py-2 space-y-4 bg-white">
          <a href="#home" className="block text-white text-sm">Home</a>
          <a href="#about" className="block text-white text-sm">About Us</a>
          <a href="#services" className="block text-white text-sm">Services</a>
          <a href="#events" className="block text-white text-sm">Events</a>
          <a href="#gallery" className="block text-white text-sm">Gallery Frida Kahlo</a>
          <a href="#contact" className="block text-white text-sm">Contact Us</a>
          <a href="#audio-visual" className="block text-white text-sm">Audio Visual</a>
          <a href="#media-coverage" className="block text-white text-sm">Media Coverage</a>
          <a href="#brochure" className="block text-white text-sm">Download Brochure</a>
          <div className="mt-4">
            <a
              href="tel:+1234567890"
              className="block bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-400"
            >
              Call Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-600 text-gray-800 py-6">
      <div className="w-11/12 max-w-maxContent mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Inquiry Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-1">Connect with NourishBytes</h2>
          <p className="mb-1">Email address</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md border border-gray-300"
            />
            <button className="bg-brown-500 text-white rounded-r-md px-4 hover:bg-brown-600 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Connect Section (in the center) */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-1">Connect</h2>
          <p className="mb-1">info@nourishbytes.com</p>
          <p className="mb-1">+91 123456789</p>
        </div>

        {/* Social Media Icons Section (on the right) */}
        <div className="flex flex-col items-end">
          <h2 className="text-2xl font-bold mb-1">Follow</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-gray-800 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-gray-800 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-gray-800 transition duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-gray-800 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="w-11/12 max-w-maxContent mx-auto mt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NourishBytes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

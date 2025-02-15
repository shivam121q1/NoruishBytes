import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-yellow-600 text-gray-800 py-6">
      <div className="w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Inquiry Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Connect with NourishBytes</h2>
          <p className="mb-2">Email address</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-l-md border border-gray-300 w-full"
            />
            <button className="bg-amber-800 text-white rounded-r-md px-4 hover:bg-amber-900 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Connect</h2>
         
          <p className="mb-1">bhupinder.yadav@nourishbyte.com</p>
         
          <p>+91 96502 45172</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-end">
          <h2 className="text-2xl font-bold mb-2">Follow</h2>
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
      <div className="w-11/12 max-w-6xl mx-auto mt-4 text-center text-yellow-900">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} NourishBytes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

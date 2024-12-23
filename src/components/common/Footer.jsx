import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center px-4">

        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          Real Estate
        </Link>

        <nav className="flex gap-6">
          <Link
            to="/about"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/terms"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            Terms of Service
          </Link>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>

      <div className="bg-gray-900 text-center py-4 mt-6">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Real Estate. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

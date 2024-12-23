import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Real Estate</Link>
        <nav className="flex gap-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/admin" className="hover:text-blue-400">Admin</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto flex justify-between items-center">
        <Link to="/">
          <img className="w-auto h-6 sm:h-7" src="" alt="Logo" />
        </Link>

        <div className="flex space-x-4">
          <Link to="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
          <Link to="/breathing" className="text-gray-700 hover:text-blue-500">Breathing</Link>
          <Link to="/music" className="text-gray-700 hover:text-blue-500">Music</Link>
          <Link to="/sleepstories" className="text-gray-700 hover:text-blue-500">Sleep Stories</Link>
          <Link to="/meditation" className="text-gray-700 hover:text-blue-500">Meditation</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

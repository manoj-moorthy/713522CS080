import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">Social Media Analytics</div>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-4">Dashboard</Link>
          <Link to="/top-users" className="text-gray-300 hover:text-white px-4">Top Users</Link>
          <Link to="/trending-posts" className="text-gray-300 hover:text-white px-4">Trending Posts</Link>
          <Link to="/feed" className="text-gray-300 hover:text-white px-4">Feed</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
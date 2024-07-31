import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"><h1 className="text-xl font-bold">ALOHA CLASS</h1></Link>
        <nav>
          <Link to="/" className="mx-2 hover:underline">Home</Link>
          <Link to="/login" className="mx-2 hover:underline">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

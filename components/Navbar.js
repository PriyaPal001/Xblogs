// components/Navbar.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" shadow-md top-0 w-full z-50 bg-background/50 sticky backdrop-blur">
      <div className="max-w-7xl mx-auto px-2 sm:px-5 lg:px-6">
        <div className="flex justify-between h-14 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">MyLogo</Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-500">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="/about" className="block py-2 text-gray-700 hover:text-blue-500">About</Link>
          <Link href="/contact" className="block py-2 text-gray-700 hover:text-blue-500">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

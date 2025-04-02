"use client";


import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For mobile menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            ShopifyTasker
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black">How its work</Link>
            <Link href="/services" className="text-gray-700 hover:text-black">Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">Pricing</Link>
            <Link href="/" className="text-gray-700 hover:text-black">Recounce</Link>

            <Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t">
            <Link href="/" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/services" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/contact" className="text-gray-700 hover:text-black" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

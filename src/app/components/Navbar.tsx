"use client";


import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // For mobile menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
  <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-2">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-black italic border border-black px-4 py-1"
      >
        ShopifyTasker
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="text-black hover:text-green">Home</Link>
        <Link href="/about" className="text-black hover:text-green">How it works</Link>
        <Link href="/services" className="text-black hover:text-green">Services</Link>
        <Link href="/contact" className="text-black hover:text-green">Pricing</Link>
        <Link href="/" className="text-black hover:text-green">case studies</Link>

        <Link
          href="/contact"
          className="bg-black text-white border border-black px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition flex items-center"
        >
          Hire us
        </Link>
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

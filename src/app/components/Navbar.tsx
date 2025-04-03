"use client";


import Link from "next/link";
import Image from "next/image";
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
        className="text-2xl font-bold text-black italic  px-4 py-1"
      >
        <Image
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67ee08a8039daf3cb014d3dc_Newshopifytaskerlogo.png" // Replace with your actual image path
      alt="ShopifyTasker Logo"
      width={200} // Adjust width as needed
      height={50} // Adjust height as needed
      className="h-auto"
    />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="text-black hover:text-green-600">Home</Link>
        <Link href="/about" className="text-black hover:text-green-600">How it works</Link>
        <Link href="/services" className="text-black hover:text-green-600">Services</Link>
        <Link href="/contact" className="text-black hover:text-green">Pricing</Link>
        <Link href="/" className="text-black hover:text-green">case studies</Link>

        <Link
          href="/contact"
          className="bg-black text-white border border-black px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition flex items-center"
        >
          Create Task!
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

"use client";


import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { TfiAlignLeft, TfiClose  } from "react-icons/tfi";

import { TfiArrowRight } from "react-icons/tfi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#CADCFC] text-lg w-full fixed top-0 left-0 z-50">
  <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-2">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <Link
        href="/"
        className="text-1xl font-bold text-black italic  px-4 py-1"
      >
        <Image
      src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fbcdd5db493a47b8982ee6_Shopifytaskernewlogovidinew%20(1).png" // Replace with your actual image path
      alt="ShopifyTasker Logo"
      width={200} // Adjust width as needed
      height={50} // Adjust height as needed
      className="h-auto"
    />

      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link href="/" className="text-black hover:text-white">Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/how-this-work" className="text-black hover:text-white">How it works
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        </Link>
        <Link href="/shopify-expert-services" className="text-black hover:text-white">
        Services
        <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link href="/cost-to-hire-shopify-expert" className="text-black hover:text-white">
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        Pricing</Link>
        <Link href="/shopify-tasker-reviews" className="text-black hover:text-white">
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all group-hover:w-full"></span>
        Reviews</Link>
        <Link
          href="/create-task"
          className="bg-white text-black border border-white px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition flex items-center"
        >
          Create Task <TfiArrowRight/>
        </Link>
      </div>
    


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-4xl text-black"
            onClick={() => setIsOpen(!isOpen)} aria-label="Open menu"
          >
            {isOpen ? <TfiClose />  : <TfiAlignLeft />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4 border-t h-screen justify-center px-4 bg-[#CADCFC]">
          <Link href="/" className="text-white hover:text-black" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/how-this-work" className="text-white hover:text-black" onClick={() => setIsOpen(false)}>How it works </Link>
            <Link href="/shopify-expert-services" className="text-white hover:text-black" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/cost-to-hire-shopify-expert" className="text-white hover:text-black" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/shopify-tasker-reviews" className="text-white hover:text-black" onClick={() => setIsOpen(false)}>Reviews</Link>

            <Link href="/create-task" className="bg-black text-white border border-black px-4 py-1.5 rounded-md hover:bg-white hover:text-black transition flex items-center" onClick={() => setIsOpen(false)}>Create Task <TfiArrowRight/></Link>

          
           
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TfiAlignLeft, TfiClose, TfiArrowRight } from "react-icons/tfi";
import StartProjectModal from "./StartProjectModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Optional: prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black text-lg w-full fixed top-0 left-0 z-50">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="px-4 py-1" onClick={closeMenu}>
            <Image
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6815f5f9c4f106f73030c696_file.svg"
              alt="ShopifyTasker Logo"
              width={200}
              height={50}
              className="h-auto"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-white text-lg font-medium hover:underline hover:decoration-teal-500 underline-offset-4 transition"
            >
              Home
            </Link>
            <Link
              href="/how-this-work"
              className="text-white text-lg font-medium hover:underline hover:decoration-teal-500 underline-offset-4 transition"
            >
              How it works
            </Link>
            <Link
              href="/shopify-expert-services"
              className="text-white text-lg font-medium hover:underline hover:decoration-teal-500 underline-offset-4 transition"
            >
              Services
            </Link>
            <Link
              href="/faq"
              className="text-white text-lg font-medium hover:underline hover:decoration-teal-500 underline-offset-4 transition"
            >
              FAQ
            </Link>
            <Link
              href="https://www.trustpilot.com/review/shopifytasker.com"
              target="_blank"
              className="text-white text-lg font-medium"
            >
              Reviews
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer inline-flex items-center gap-2 bg-[#DFF976] text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
            >
              Create Task <TfiArrowRight />
            </button>
          </div>

          <StartProjectModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-4xl text-white"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <TfiClose /> : <TfiAlignLeft />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40",
          "transition-opacity duration-200",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Panel (starts below navbar height = 64px) */}
        <div
          className={[
            "absolute left-0 right-0 top-16 bg-black border-t border-white/10",
            "px-6 pt-6 pb-10",
            "transition-transform duration-200",
            isOpen ? "translate-y-0" : "-translate-y-2",
          ].join(" ")}
        >
          <div className="flex flex-col gap-4 text-white text-xl">
            <Link href="/" onClick={closeMenu} className="py-2">
              Home
            </Link>
            <Link href="/how-this-work" onClick={closeMenu} className="py-2">
              How it works
            </Link>
            <Link href="/shopify-expert-services" onClick={closeMenu} className="py-2">
              Services
            </Link>
            <Link href="/cost-to-hire-shopify-expert" onClick={closeMenu} className="py-2">
              Pricing
            </Link>
            <Link href="/shopify-tasker-reviews" onClick={closeMenu} className="py-2">
              Reviews
            </Link>

            <button
              onClick={() => {
                closeMenu();
                setShowModal(true);
              }}
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#DFF976] text-black px-5 py-3 rounded-full text-base font-medium"
            >
              Create Task <TfiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

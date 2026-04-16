"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TfiAlignLeft, TfiClose, TfiArrowRight } from "react-icons/tfi";
import StartProjectModal from "./StartProjectModal";
import ServicesMegaMenu from "./ServicesMegaMenu";

const BASE = "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/";

const mobileServiceCategories = [
  {
    label: "Design & Themes",
    href: "/shopify-store-design",
    image: BASE + "6827175e5ab4aae9c7a45403_hair-extension-shopify-website-design.png",
  },
  {
    label: "Store Development",
    href: "/shopify-store-setup",
    image: BASE + "6847bffadae7ca228106419b_shopify-web-developer.png",
  },
  {
    label: "Custom Development",
    href: "/custom-development",
    image: BASE + "6854f5ad2876b66d7e7d0938_Next%20js%20shopify%20development.png",
  },
  {
    label: "App & Integrations",
    href: "/app-integration",
    image: BASE + "6854f67d5e9cc865a78fe5c6_Klaviyo%20shopify%20development.png",
  },
  {
    label: "SEO & Growth",
    href: "/shopify-seo",
    image: BASE + "685927decaa7051a78a95b78_seo%20shopify%20va%20services.png",
  },
  {
    label: "Support & Migration",
    href: "/ongoing-support",
    image: BASE + "68183d299128df529d5bfa26_footernewimage.png",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-this-work" },
  { label: "FAQ", href: "/faq" },
  { label: "Reviews", href: "https://www.trustpilot.com/review/shopifytasker.com", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
  };

  const openCreateTask = () => {
    closeMenu();
    setShowModal(true);
  };

  const handleServicesEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setShowMegaMenu(true);
  };

  const handleServicesLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setShowMegaMenu(false), 120);
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setShowMegaMenu(false), 120);
  };

  return (
    <nav className="bg-black text-lg w-full fixed top-0 left-0 z-50">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between h-14 items-center">

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
            <Link href="/" className="text-white text-[1rem]   hover:text-[#777]  underline-offset-4 transition">
              Home
            </Link>
            <Link href="/how-this-work" className="text-white text-[1rem]  hover:text-[#777]  underline-offset-4 transition">
              How it works
            </Link>

            {/* Services — Desktop Mega Menu */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                href="/shopify-expert-services"
                className={[
                  "text-white  text-[1rem]  hover:text-[#777]  transition flex items-center gap-1",
                  showMegaMenu ? "underline" : "",
                ].join(" ")}
              >
                Services
                <svg
                  className={["w-3 h-3 transition-transform duration-200", showMegaMenu ? "rotate-180" : ""].join(" ")}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {showMegaMenu && (
                <div onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave}>
                  <ServicesMegaMenu
                    onClose={() => setShowMegaMenu(false)}
                    onOpenModal={() => setShowModal(true)}
                  />
                </div>
              )}
            </div>

            <Link href="/faq" className="text-white text-[1rem]   hover:text-[#777]  underline-offset-4 transition">
              FAQ
            </Link>
            <Link
              href="https://www.trustpilot.com/review/shopifytasker.com"
              target="_blank"
              className="text-white text-[1rem] "
            >
              Reviews
            </Link>

            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer   h-[3.25rem] text-[14px] inline-flex items-center gap-2 bg-white text-black px-4 py-2  uppercase font-normal hover:opacity-90 transition"
            >
             Start My Task<TfiArrowRight className=" animate-jump animate-infinite" />
            </button>
          </div>

          {/* Modal */}
          <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />

          {/* Mobile — right side: CTA + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={openCreateTask}
              className="inline-flex items-center gap-1.5 bg-white text-black px-3.5 py-1.5  text-[12px] font-semibold hover:opacity-90 transition"
            >
               Start My Task
            </button>
            <button
              className="text-white p-1"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <TfiClose className="text-2xl" /> : <TfiAlignLeft className="text-2xl" />}
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile full-screen drawer ── */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40",
          "transition-all duration-300 ease-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} aria-hidden="true" />

        {/* Drawer panel */}
        <div
          className={[
            "absolute left-0 right-0 top-0 bg-[#0a0a0a] flex flex-col",
            "transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
            isOpen ? "translate-y-0" : "-translate-y-3",
          ].join(" ")}
          style={{ maxHeight: "100dvh" }}
        >

          {/* Drawer top bar */}
          <div className="flex justify-between items-center h-14 px-5 border-b border-white/[0.07] flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6815f5f9c4f106f73030c696_file.svg"
                alt="ShopifyTasker Logo"
                width={160}
                height={40}
                className="h-auto"
              />
            </Link>
            <button onClick={closeMenu} className="text-white/60 hover:text-white transition p-1">
              <TfiClose className="text-xl" />
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1 px-5 pb-8">

            {/* Primary nav links */}
            <div className="mt-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center justify-between py-4 border-b border-white/[0.06] text-white/75 text-[15px] font-medium hover:text-white transition group"
                >
                  {item.label}
                  <TfiArrowRight className="text-[11px] text-white/20 group-hover:text-white/50 transition" />
                </Link>
              ))}

              {/* Services accordion */}
              <div className="border-b border-white/[0.06]">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-4 text-white/75 text-[15px] font-medium hover:text-white transition cursor-pointer"
                >
                  Services
                  <svg
                    className={["w-4 h-4 text-white/25 transition-transform duration-250", mobileServicesOpen ? "rotate-180" : ""].join(" ")}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Services grid — collapses/expands */}
                <div
                  className={[
                    "overflow-hidden transition-all duration-300 ease-out",
                    mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
                  ].join(" ")}
                >
                  <div className="grid grid-cols-2 gap-2.5 pb-4">
                    {mobileServiceCategories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        onClick={closeMenu}
                        className="group relative rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.03] hover:border-white/[0.18] transition"
                      >
                        {/* Image */}
                        <div className="relative h-24 overflow-hidden">
                          <Image
                            src={cat.image}
                            alt={cat.label}
                            fill
                            className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-400 ease-out"
                            sizes="160px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                        </div>
                        {/* Label */}
                        <div className="absolute bottom-0 inset-x-0 px-2.5 pb-2.5">
                          <p className="text-white text-[11.5px] font-semibold leading-snug">
                            {cat.label}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/shopify-expert-services"
                    onClick={closeMenu}
                    className="mb-2 flex items-center justify-center gap-1.5 text-[12px] text-white/35 hover:text-white/65 transition"
                  >
                    View all services <TfiArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA section */}
            <div className="mt-7">
              <button
                onClick={openCreateTask}
                className="w-full bg-white text-black py-3.5  text-[15px] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition cursor-pointer"
              >
                Start My Task<TfiArrowRight className=" animate-jump animate-infinite" />
              </button>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 h-px bg-white/[0.07]" />
                <p className="text-[11px] text-white/25 shrink-0">Fast turnaround · Expert team</p>
                <div className="flex-1 h-px bg-white/[0.07]" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}

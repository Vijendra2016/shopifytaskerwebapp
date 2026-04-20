"use client";
import React, { useState } from "react";
import Image from "next/image";
import StartProjectModal from "./StartProjectModal";

const logos = [
  {
    src: "https://cdn.shopify.com/s/files/1/0693/1185/6947/files/Mubu_footer_logo_2.svg",
    alt: "Go For Zero",
    width: 70,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031ebd655ad373b784e915_zenimallogo.png",
    alt: "Zenimal",
    width: 70,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png",
    alt: "SlumberPod",
    width: 85,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69e5b35d967782c10e17e481_foodfoodnewlogo.png",
    alt: "ShopBoxed",
    width: 70,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6788a798e7366fb245f83aae_smilingpetshopifytaskerclient.png",
    alt: "Smiling Pet",
    width: 65,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031db6ea8b298c0f178775_clickandcarry.png",
    alt: "Click and Carry",
    width: 70,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031cc3ab416829b3d8f1e4_blacktiecbd.png",
    alt: "Black Tie CBD",
    width: 85,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69e5b6144b0b99f79c222ecd_dutcargobike.png",
    alt: "Dutch Cargo",
    width: 85,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680320f841c08a2cfa7d55c1_eleven44-white.webp",
    alt: "Eleven 44",
    width: 70,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69e5b50d7d74c36c06aa7d2d_farmninewhitelogo.png",
    alt: "Farm Nine",
    width: 78,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69e5bdbc56aafe03651a70c6_egclothing.png",
    alt: "EG Clothing",
    width: 78,
    height: 28,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787503a333a8b082498d65d_shopify_logos-03_160x%20(1).avif",
    alt: "Shopify Partner",
    width: 58,
    height: 28,
  },
];

export default function TrustedBySection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    {/* ── Outer section:
     black bg, horizontal padding creates the side gap ── */}
    <section className="w-full bg-black py-6 px-4 md:px-10">
      {/* ── Inner card: background image lives here only ── */}
      <div className="relative w-full overflow-hidden py-14 md:py-20">
        {/* Background image */}
        <Image
          src="https://cdn.prod.website-files.com/68a42ed7e787a4a306819ed6/68b8cc7ed6c5fd3ad833d3ee_cta-background.avif"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />

        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        {/* ── Content wrapper ── */}
        <div className="relative z-10 px-6 md:px-12">
          {/* Header row */}
          <div className="flex items-center justify-between mb-10 md:mb-3">
            <h2 className="text-white text-xl md:text-2xl font-light tracking-tight">
              They trusted us
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="group cursor-pointer   flex items-center gap-1.5 text-white text-xs md:text-sm tracking-[0.15em] uppercase border-b border-white pb-0.5 hover:opacity-60 transition-opacity duration-200"
            >
              GET STARTED
              <span className="inline-block -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform duration-200">
                ↗
              </span>
            </button>
          
          </div>
          <div className=" items-left text-white justify-between mb-12 md:mb-16">
              <p>Trusted by brands across industries to design, build, and scale high-performing Shopify stores.</p>

          </div>
          {/* Logo grid */}
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-10 items-center justify-items-center">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center w-full"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
  </>
  );
}

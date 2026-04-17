"use client";
import React, { useState } from "react";
import Image from "next/image";
import StartProjectModal from "./StartProjectModal";

const logos = [
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png",
    alt: "Go For Zero",
    width: 110,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031ebd655ad373b784e915_zenimallogo.png",
    alt: "Zenimal",
    width: 110,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png",
    alt: "SlumberPod",
    width: 130,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031f65812cbc90dbb3ecad_Pi7_shopboxd_logo%20(1).webp",
    alt: "ShopBoxed",
    width: 110,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6788a798e7366fb245f83aae_smilingpetshopifytaskerclient.png",
    alt: "Smiling Pet",
    width: 100,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031db6ea8b298c0f178775_clickandcarry.png",
    alt: "Click and Carry",
    width: 110,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031cc3ab416829b3d8f1e4_blacktiecbd.png",
    alt: "Black Tie CBD",
    width: 130,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68032003f33274c4f2eb5c8e_DGlogowhitelong%20(2).avif",
    alt: "Dutch Cargo",
    width: 130,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680320f841c08a2cfa7d55c1_eleven44-white.webp",
    alt: "Eleven 44",
    width: 110,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680329f36fb4c212fad36c3d_farmninelogo.png",
    alt: "Farm Nine",
    width: 120,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68032bcaf9da9c3bc2fddc79_egclothing.png",
    alt: "EG Clothing",
    width: 120,
    height: 44,
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787503a333a8b082498d65d_shopify_logos-03_160x%20(1).avif",
    alt: "Shopify Partner",
    width: 90,
    height: 44,
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
          <div className="flex items-center justify-between mb-12 md:mb-16">
            <h2 className="text-white text-xl md:text-2xl font-light tracking-tight">
              They trusted us
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="group flex items-center gap-1.5 text-white text-xs md:text-sm tracking-[0.15em] uppercase border-b border-white pb-0.5 hover:opacity-60 transition-opacity duration-200"
            >
              GET STARTED
              <span className="inline-block -translate-y-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-1 transition-transform duration-200">
                ↗
              </span>
            </button>
          </div>

          {/* Logo grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-10 items-center justify-items-center">
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
  );
}

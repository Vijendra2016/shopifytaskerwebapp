"use client";

import React, { useState } from "react";
import StartProjectModal from "./StartProjectModal";

const CLIENT_LOGOS = [
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680adf6805e6630a2653f6ad_go-for-zero.png",
    alt: "Go For Zero",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031ebd655ad373b784e915_zenimallogo.png",
    alt: "Zenimal",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6787659e9cf6149b7e933b63_Slumberpod-logo-main%20(1)%20(2).png",
    alt: "Slumberpod",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031f65812cbc90dbb3ecad_Pi7_shopboxd_logo%20(1).webp",
    alt: "Shopboxd",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6788a798e7366fb245f83aae_smilingpetshopifytaskerclient.png",
    alt: "Smiling Pet",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031db6ea8b298c0f178775_clickandcarry.png",
    alt: "Click and Carry",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68031cc3ab416829b3d8f1e4_blacktiecbd.png",
    alt: "Black Tie CBD",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68032003f33274c4f2eb5c8e_DGlogowhitelong%20(2).avif",
    alt: "Dutch Cargo",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680320f841c08a2cfa7d55c1_eleven44-white.webp",
    alt: "Eleven 44",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680329f36fb4c212fad36c3d_farmninelogo.png",
    alt: "Farm Nine",
  },
  {
    src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68032bcaf9da9c3bc2fddc79_egclothing.png",
    alt: "EG Clothing",
  },
];

type Cta = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
};

type HeroSearchFirstProps = {
  eyebrow?: string;
  titleBottom?: string;
  description?: string;
  videoUrl?: string;
  videoWebmUrl?: string;
  backgroundImageUrl?: string;
  backgroundImageUrls?: string[];
  activeImageIndex?: number;
  ctas?: Cta[];
  className?: string;
};

export default function HeroSearchFirst({
  eyebrow = "Top-Rated Shopify Experts",
  titleBottom = "Launch, Redesign & Fix Your Shopify Store",
  description = "Work with experienced Shopify experts who handle everything — design, development, SEO, and ongoing support — so you can focus on growing your business.",
  videoUrl,
  videoWebmUrl,
  backgroundImageUrl,
  backgroundImageUrls,
  activeImageIndex = 0,
  ctas = [
    { label: "Get a Clear Estimate", variant: "primary" },
    { label: "Start a Project", variant: "secondary" },
  ],
  className = "",
}: HeroSearchFirstProps) {
  const [showModal, setShowModal] = useState(false);

  const bg = backgroundImageUrls?.length
    ? backgroundImageUrls[
        Math.min(Math.max(activeImageIndex, 0), backgroundImageUrls.length - 1)
      ]
    : backgroundImageUrl;

  return (
    <>
      <section
        className={`relative isolate overflow-hidden bg-black text-white flex flex-col min-h-[88vh] ${className}`}
      >
        {/* ── VIDEO BACKGROUND ── */}
        {(videoUrl || videoWebmUrl) && (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          >
            {videoWebmUrl && <source src={videoWebmUrl} type="video/webm" />}
            {videoUrl && <source src={videoUrl} type="video/mp4" />}
          </video>
        )}

        {/* ── IMAGE BACKGROUND (fallback) ── */}
        {!videoUrl && bg && (
          <div className="absolute inset-0 -z-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bg}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
        )}

        {/* ── OVERLAY: dark on left for readability, fades right so bg shows ── */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-black/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-2 md:px-3 py-28 md:py-16">
            {eyebrow && (
              <p className="mb-6 text-[11px] md:text-xs uppercase tracking-[0.28em] text-white/45 font-medium">
                {eyebrow}
              </p>
            )}

            <h1 className="font-[400] tracking-tight leading-[1.05] max-w-[880px]">
              <span className="block text-[2.6rem] md:text-[4.75rem] text-white">
                {titleBottom}
              </span>
            </h1>

            {description && (
              <p className="mt-6 max-w-lg text-lg md:text-base text-white leading-relaxed">
                {description}
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {ctas.map((cta) => {
                const isSecondary = cta.variant === "secondary";
                return (
                  <button
                    key={cta.label}
                    type="button"
                    onClick={() => setShowModal(true)}
                    className={`group inline-flex cursor-pointer items-center gap-2 uppercase px-7 py-3.5 h-[3.25rem] text-[14px] font-medium transition-all active:scale-[0.98]
                      ${
                        isSecondary
                          ? "border border-white/25 text-white hover:bg-white/10"
                          : "bg-white text-black hover:brightness-105"
                      }`}
                  >
                    {cta.label}
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </section>

      {/* ── CLIENT TRUST BAR ── */}
      <div className="bg-black border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-5 flex items-center gap-5">
          {/* Label */}
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-white/40 whitespace-nowrap shrink-0">
            Trusted by great clients
          </span>
          {/* Divider */}
          <div className="h-4 w-px bg-white/20 shrink-0" />
          {/* Scrolling logos */}
          <div className="flex-1 overflow-hidden">
            <div className="logo-marquee flex items-center gap-14">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-7 w-auto object-contain brightness-0 invert shrink-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

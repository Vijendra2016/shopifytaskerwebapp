"use client";

import React, { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import GsapMarquee from "./GsapMarquee";

type Cta = {
  label: string;
  href?: string; // href optional now
  variant?: "primary" | "secondary";
};

type HeroSearchFirstProps = {
  eyebrow?: string;
  titleBottom?: string;
  description?: string;

  backgroundImageUrl?: string;
  backgroundImageUrls?: string[];
  activeImageIndex?: number;

  ctas?: Cta[];
  className?: string;
};

export default function HeroSearchFirst({
  eyebrow = "Top Rated Shopify Developer & Designer",
  titleBottom = "Hire Shopify Expert & Developer, on demand",
  description =
    "No upfront payment required. Pay only after your task is completed to your satisfaction.",

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

  const onOpenCreateTask = () => setShowModal(true);
  const onCloseCreateTask = () => setShowModal(false);

  const bg =
    backgroundImageUrls?.length
      ? backgroundImageUrls[
          Math.min(
            Math.max(activeImageIndex, 0),
            backgroundImageUrls.length - 1
          )
        ]
      : backgroundImageUrl;

  return (
    <>
      <section
        className={`relative isolate overflow-hidden bg-black text-white ${className}`}
      >
        {/* Background image */}
        {bg ? (
          <div className="absolute inset-0 -z-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bg}
              alt=""
              className="h-full w-full object-cover object-center opacity-60"
            />
          </div>
        ) : null}

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/85 via-black/60 to-black/85" />

        {/* Content */}
<div className="mx-auto flex min-h-[550px] max-w-5xl flex-col items-center justify-center px-6 py-10 text-center md:min-h-[620px] md:px-10">
          {eyebrow && (
            <p className="mb-6 text-sm md:text-base text-white/70">
              {eyebrow}
            </p>
          )}

          <h1 className="font-thin tracking-tight leading-[1.05]">
            <span className="block text-4xl md:text-7xl text-white/90">
              {titleBottom}
            </span>
          </h1>

          {description && (
            <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            {ctas.map((cta) => {
              const isSecondary = cta.variant === "secondary";

              return (
                <button
                  key={cta.label}
                  type="button"
                  onClick={onOpenCreateTask}
                  className={`group inline-flex cursor-pointer  items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
                    transition active:scale-[0.99]
                    ${
                      isSecondary
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-[#DFF976] text-black ring-1 ring-white/15 hover:opacity-90"
                    }`}
                >
                  <span>{cta.label}</span>
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <GsapMarquee />
      </section>

      {/* Project Starter Modal */}
      <StartProjectModal
        isOpen={showModal}
        onClose={onCloseCreateTask}
      />
    </>
  );
}

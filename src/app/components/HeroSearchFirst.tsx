// components/HeroSearchFirst.tsx
import React from "react";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Stats = {
  ratingValue?: string;   // "4.9"
  ratingLabel?: string;   // "Average user rating"
  activityValue?: string; // "75.2%"
  activityLabel?: string; // "Average daily activity"
  opensValue?: string;    // "4.2"
  opensLabel?: string;    // "Average daily app opens"
};

type HeroSearchFirstProps = {
  eyebrow?: string;
  titleTop?: string;        // "The"
  titleHighlight?: string;  // "Search-First"
  titleBottom?: string;     // "Shopify Agency"
  description?: string;

  // Background control
  backgroundImageUrl?: string;
  backgroundImageUrls?: string[];
  activeImageIndex?: number;

  // Social proof / stats
  stats?: Stats;

  ctas?: Cta[];
  className?: string;
};

function StarRow({ count = 5 }: { count?: number }) {
  return (
    <div className="mb-2 flex items-center justify-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-5 w-5 fill-white"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M10 15l-5.878 3.09L5.5 11.545 1 7.41l6.061-.88L10 1l2.939 5.53L19 7.41l-4.5 4.136 1.378 6.545z" />
        </svg>
      ))}
    </div>
  );
}

export default function HeroSearchFirst({
  eyebrow = "Leading Shopify Agency, UK",
  titleTop = "The",
  titleHighlight = "Search-First",
  titleBottom = "Hire Shopify Expert & Developer,on demand",
  description = "Delivering ecommerce growth by crafting outstanding online buying experiences with experimentation & search-first strategies.",
  backgroundImageUrl,
  backgroundImageUrls,
  activeImageIndex = 0,
  stats = {
    ratingValue: "4.9",
    ratingLabel: "Average user rating",
    activityValue: "75.2%",
    activityLabel: "Average daily activity",
    opensValue: "10+",
    opensLabel: "10 Years experience in shopify ecosystem",
  },
  ctas = [
    { label: "What's Search-First?", href: "#search-first", variant: "primary" },
    { label: "Explore Services", href: "#services", variant: "secondary" },
  ],
  className = "",
}: HeroSearchFirstProps) {
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
    <section
      className={`relative isolate overflow-hidden  bg-black text-white ${className}`}
    >
      {/* Background image */}
      {bg ? (
        <div className="absolute inset-0 -z-20">
          {/* Use <img> for simplicity; swap to next/image if you prefer */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bg}
            alt=""
            className="h-full w-full object-cover object-center opacity-60"
          />
        </div>
      ) : null}

      {/* Black/white overlay (NO blue/purple glow) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/85 via-black/60 to-black/85" />

      {/* Content */}
      <div className="mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center px-6 py-16 text-center md:min-h-[680px] md:px-10">
        {eyebrow ? (
          <p className="mb-6 text-sm md:text-base text-white/70">{eyebrow}</p>
        ) : null}

        <h1 className="font-semibold tracking-tight leading-[1.05]">
          <span className="block text-4xl md:text-7xl">
            {titleTop}{" "}
            <span className="inline-flex items-center gap-3">
              {/* little mark/icon */}
              <span className="inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <span className="block h-4 w-4 md:h-5 md:w-5 rotate-45 bg-white/90 rounded-sm" />
              </span>
              <span className="text-white">{titleHighlight}</span>
            </span>
          </span>
          <span className="block text-4xl md:text-7xl text-white/95">
            {titleBottom}
          </span>
        </h1>

        {description ? (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
            {description}
          </p>
        ) : null}

        {/* Stats / Social proof (BEFORE CTA) */}
        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Rating */}
            <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
              <StarRow />
              <p className="text-lg font-semibold">{stats.ratingValue}</p>
              <p className="text-sm text-white/60">{stats.ratingLabel}</p>
            </div>

            {/* Activity */}
            <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
              <p className="text-3xl font-semibold">{stats.activityValue}</p>
              <p className="mt-1 text-sm text-white/60">
                {stats.activityLabel}
              </p>
            </div>

            {/* App Opens */}
            <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
              <p className="text-3xl font-semibold">{stats.opensValue}</p>
              <p className="mt-1 text-sm text-white/60">{stats.opensLabel}</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {ctas.map((cta) => {
            const isSecondary = cta.variant === "secondary";
            return (
              <a
                key={cta.href + cta.label}
                href={cta.href}
                className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
                  transition active:scale-[0.99]
                  ${
                    isSecondary
                      ? "bg-white text-black hover:bg-white/90"
                      : " bg-[#DFF976] text-black  ring-1 ring-white/15 hover:bg-black/55"
                  }`}
              >
                <span>{cta.label}</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

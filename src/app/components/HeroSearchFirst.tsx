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


export default function HeroSearchFirst({
  eyebrow = "Top Rated Shopify Developer & Designer",
  
  titleBottom = "Hire Shopify Expert & Developer,on demand",
  description = "No upfront payment required Pay only after your task is completed to your satisfaction.",
  backgroundImageUrl,
  backgroundImageUrls,
  activeImageIndex = 0,
  
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

        <h1 className="font-thin tracking-tight leading-[1.05]">
         
          <span className="block text-4xl md:text-7xl text-white/95">
            {titleBottom}
          </span>
        </h1>

        {description ? (
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/70">
            {description}
          </p>
        ) : null}

        {/* Stats / Social proof (BEFORE CTA) 
        <div className="mt-10 w-full max-w-3xl rounded-2xl border border-[#DFF976] bg-white/5 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#DFF976]">
           
            <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
              <StarRow />
              <p className="text-lg font-semibold">{stats.ratingValue}</p>
              <p className="text-sm text-white/60">{stats.ratingLabel}</p>
            </div>

           
            <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
              <p className="text-3xl font-semibold">{stats.activityValue}</p>
              <p className="mt-1 text-sm text-white/60">
                {stats.activityLabel}
              </p>
            </div>

            
            <div className="flex flex-col items-center justify-center px-6 py-5 text-center">
              <p className="text-3xl font-semibold">{stats.opensValue}</p>
              <p className="mt-1 text-sm text-white/60">{stats.opensLabel}</p>
            </div>
          </div>
        </div>
        */}

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
                      : " bg-[#DFF976] text-black  ring-1 ring-white/15 hover:bg-[#DFF976]"
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

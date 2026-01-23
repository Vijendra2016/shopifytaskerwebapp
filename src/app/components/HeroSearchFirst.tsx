import React from "react";
import clsx from "clsx";

type Cta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroSearchFirstProps = {
  eyebrow?: string;
  titleTop?: string;     // e.g. "The"
  titleHighlight?: string; // e.g. "Search-First"
  titleBottom?: string;  // e.g. "Shopify Agency"
  description?: string;

  // Background control
  backgroundImageUrl?: string;     // single image
  backgroundImageUrls?: string[];  // optional rotation
  activeImageIndex?: number;       // choose which image to show if using urls array

  // Overlay / glow tuning
  overlayClassName?: string;       // customize overlay intensity
  glowClassName?: string;          // customize center glow

  ctas?: Cta[];
  className?: string;
};

export default function HeroSearchFirst({
  eyebrow = "Leading Shopify Agency, UK",
  titleTop = "The",
  titleHighlight = "Search-First",
  titleBottom = "Shopify Agency",
  description = "Delivering ecommerce growth by crafting outstanding online buying experiences with experimentation & search-first strategies.",
  backgroundImageUrl,
  backgroundImageUrls,
  activeImageIndex = 0,
  overlayClassName,
  glowClassName,
  ctas = [
    { label: "What's Search-First?", href: "#search-first", variant: "primary" },
    { label: "Explore Services", href: "#services", variant: "secondary" },
  ],
  className,
}: HeroSearchFirstProps) {
  const bg =
    backgroundImageUrls?.length
      ? backgroundImageUrls[Math.min(Math.max(activeImageIndex, 0), backgroundImageUrls.length - 1)]
      : backgroundImageUrl;

  return (
    <section
      className={clsx(
        "relative isolate overflow-hidden rounded-3xl",
        "min-h-[520px] md:min-h-[680px]",
        "px-6 md:px-10",
        "bg-[#05060a] text-white",
        className
      )}
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

      {/* Dark overlay */}
      <div
        className={clsx(
          "absolute inset-0 -z-10",
          "bg-gradient-to-b from-black/75 via-black/55 to-black/75",
          overlayClassName
        )}
      />

      {/* Center glow (subtle) */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[radial-gradient(ellipse_at_center,rgba(120,80,255,0.25),transparent_55%)]",
          glowClassName
        )}
      />

      {/* Content */}
      <div className="mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center text-center md:min-h-[680px]">
        {eyebrow ? (
          <p className="mb-6 text-sm md:text-base text-white/70">
            {eyebrow}
          </p>
        ) : null}

        <h1 className="font-semibold tracking-tight leading-[1.05]">
          <span className="block text-4xl md:text-7xl">
            {titleTop}{" "}
            <span className="inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                {/* simple sparkle mark */}
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

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {ctas.map((cta) => (
            <a
              key={cta.href + cta.label}
              href={cta.href}
              className={clsx(
                "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm md:text-base",
                "transition active:scale-[0.99]",
                cta.variant === "secondary"
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black/40 text-white ring-1 ring-white/15 hover:bg-black/55"
              )}
            >
              <span>{cta.label}</span>
              <span className="transition-transform group-hover:translate-x-0.5">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

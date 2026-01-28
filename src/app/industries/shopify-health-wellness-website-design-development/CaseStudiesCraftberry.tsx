"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CaseStudy = {
  brand: string;
  title: string;
  tags: string[];
  href: string;
  image: { src: string; alt: string };
};

function pad3(n: number) {
  return String(n).padStart(3, "0");
}

export default function CaseStudiesCraftberry() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  const CASES = useMemo<CaseStudy[]>(
    () => [
      {
        brand: "fitspo",
        title:
          "AG1’s Shopify experience focuses on conversion-led landing pages, educational video content, and subscription-first checkout flows.",
        tags: ["Migration", "Internationalization", "Store Build", "UI/UX Design"],
        href: "/case-studies/fitspo",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg", alt: "fitspo" },
      },
      {
        brand: "MidiHealth",
        title:
          "DTC Shopify Build for a Google Ventures-Backed Platform Supporting Women in Menopause",
        tags: ["Custom Theme Development", "Store Build", "UI/UX Design"],
        href: "/case-studies/midi",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697662f65259031cc0ee3be3_testimage.jpeg", alt: "MidiHealth" },
      },
      {
        brand: "INNERMOST",
        title: "Shopify Plus rebuild for subscriptions and international expansion",
        tags: ["Shopify Plus", "Subscriptions", "Internationalization"],
        href: "/case-studies/innermost",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg", alt: "INNERMOST" },
      },
      {
        brand: "ArthroFill",
        title: "Conversion-focused redesign and performance optimization for DTC",
        tags: ["Redesign", "Performance", "CRO"],
        href: "/case-studies/arthrofill",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg", alt: "ArthroFill" },
      },
    ],
    []
  );

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-case-panel]");

      // 1) Pin each panel until the next one reaches top (handoff)
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          endTrigger: panels[i + 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });

      // 2) Track active panel
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      // 3) Subtle depth motion as it hands off
      panels.forEach((panel, i) => {
        const endTrigger = i < panels.length - 1 ? panels[i + 1] : panel;

        gsap.fromTo(
          panel,
          { opacity: 1, y: 0 },
          {
            opacity: 0.92,
            y: -12,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top top",
              endTrigger,
              end: "top top",
              scrub: true,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (idx: number) => {
    const panel = document.querySelectorAll<HTMLElement>("[data-case-panel]")[idx];
    panel?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={rootRef} className="relative bg-neutral-950 text-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Optional header */}
        <div className="py-10">
          <div className="flex items-center justify-between">
            <h3>Top Health & Wellness Brands on Shopify</h3>
            <p className="text-xs font-medium tracking-[0.22em] text-white/45">
              we gether list of top best auto part website build in shopify
            </p>
            <p className="text-xs font-medium tracking-[0.22em] text-white/45">
              {pad3(active + 1)}/{pad3(CASES.length)}
            </p>
          </div>
          <div className="mt-6 h-px w-full bg-white/10" />
        </div>

        {/* Panels */}
        <div className="space-y-4 pb-10">
          {CASES.map((c, i) => (
            <article
              key={c.brand}
              data-case-panel
              className={[
                "relative overflow-hidden rounded-2xl border border-white/10",
                "bg-neutral-950 shadow-[0_18px_70px_rgba(0,0,0,0.55)]",
                "min-h-[82vh]",
              ].join(" ")}
            >
              <div className="grid min-h-[82vh] grid-cols-1 lg:grid-cols-12">
                {/* LEFT (sticky-ish content within panel, like Craftberry) */}
                <div className="lg:col-span-5 xl:col-span-4">
                  <div className="flex h-full flex-col justify-between p-6 sm:p-10">
                    <div>
                      <div className="text-base font-semibold text-white/90">
                        {c.brand}
                      </div>

                      <h3 className="mt-6  text-lg font-thin leading-tight tracking-tight text-white/70 sm:text-lg">
                        {c.title}
                      </h3>

                      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
                        {c.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>

                      <a
                        href={c.href}
                        className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-white"
                      >
                        <span>View the case study</span>
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-fuchsia-600/90">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M13 6L19 12L13 18"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-xs text-white/40">
                      <span className="h-px flex-1 bg-white/10" />
                      <span className="uppercase tracking-widest">
                        {pad3(i + 1)}/{pad3(CASES.length)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT image */}
                <div className="relative m-10 lg:col-span-7 xl:col-span-8">
                  <div className="relative h-[42vh] w-full lg:h-full">
                    <Image
                      src={c.image.src}
                      alt={c.image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      priority={i === 0}
                    />
                    {/* Craftberry-like edge/overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950/60 via-neutral-950/15 to-transparent lg:from-transparent lg:via-transparent" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom brand rows (like MidiHealth / Innermost list) */}
        <div className="pb-14">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            {CASES.map((c, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={`${c.brand}-row`}
                  onClick={() => scrollTo(idx)}
                  className={[
                    "w-full text-left px-6 py-5 sm:px-8",
                    "border-t border-white/10 first:border-t-0",
                    "bg-neutral-950 hover:bg-white/[0.03] transition",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={[
                        "text-lg font-semibold tracking-tight",
                        isActive ? "text-white" : "text-white/70",
                      ].join(" ")}
                    >
                      {c.brand}
                    </span>
                    <span className={isActive ? "text-white/70" : "text-white/40"}>
                      {isActive ? "Active" : "View"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

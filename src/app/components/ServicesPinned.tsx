"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StartProjectModal from "./StartProjectModal"; // <-- adjust path if needed

type Service = {
  title: string;
  description: string;
  bullets: string[];
};

const SERVICES: Service[] = [
  {
    title: "Shopify & Shopify Plus Task",
    description:
      "On-demand Shopify expertise to build, optimize, and scale your store—covering everything from custom themes to advanced integrations.",
    bullets: [
      "Custom Theme Development",
    "Shopify Plus Customization",
    "Liquid & Section Development",
    "App & API Integrations",
    "Checkout & Cart Customization",
    "Performance Optimization",
    "Store Setup & Migration",
    "Ongoing Support & Enhancements",
    ],
  },
  {
    title: "Custom Theme Development",
    description:
    "Flexible, on-demand Shopify theme development to improve design, functionality, and performance.",
    bullets: [
       "Custom Section Development",
    "Theme Customization",
    "UI & Layout Enhancements",
    "Feature Implementation",
    "Performance Improvements",
    "Bug Fixes & Optimization",
    "Responsive Design Updates",
    "Ongoing Theme Support",
    ],
  },
  {
    title: "Shopify Store Development",
    description:
    "End-to-end Shopify store development built to reflect your brand, perform at scale, and drive conversions.",
    bullets: [
      "Custom Store Setup",
    "Theme Configuration",
    "UX & Conversion Optimization",
    "Product & Collection Setup",
    "App & Tool Integrations",
    "Performance Optimization",
    "Payment & Shipping Setup",
    "Launch & Post-Launch Support",
    ],
  },
  {
    title: "Shopify Support Retainer",
    description:
    "Ongoing Shopify support through flexible retainers to keep your store stable, updated, and continuously improving.",
    bullets: [
      "Theme Updates & Fixes",
    "Bug Fixes & Troubleshooting",
    "Feature Enhancements",
    "App Setup & Maintenance",
    "Performance Monitoring",
    "Content & Layout Updates",
    "Priority Developer Support",
    "Ongoing Optimization",
    ],
  },
  {
    title: "Hire Dedicated Shopify Developer",
    description:
    "Work with dedicated Shopify developers who provide focused support, fast delivery, and solutions tailored to your store.",
    bullets: [
       "Dedicated Shopify Developers",
    "Direct Communication",
    "Custom Development Tasks",
    "Theme & Store Enhancements",
    "App & API Integrations",
    "Fast Turnaround Time",
    "Flexible Engagement Models",
    "Ongoing Technical Support",
    ],
  },
  {
    title: "Shopify SEO",
    description:
    "SEO services tailored for Shopify to improve visibility, drive qualified traffic, and increase organic sales.",
    bullets: [
     "Shopify SEO Audit",
    "Technical SEO Optimization",
    "On-Page SEO",
    "Keyword Research",
    "Collection & Product SEO",
    "Site Speed Optimization",
    "Structured Data & Schema",
    "SEO Reporting & Monitoring",
    ],
  },
];

function pad3(n: number) {
  return String(n).padStart(3, "0");
}

export default function ServicesAtlantiser() {
  const rootRef = useRef<HTMLElement | null>(null);

  const [active, setActive] = useState(0);

  // ✅ modal state inside this component
  const [showModal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>("[data-service-card]");

      // Pin each card until the next reaches the top (handoff)
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[i + 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
      });

      // Track active card for counter + nav
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      // Small depth motion (Atlantiser-ish subtlety)
      cards.forEach((card, i) => {
        const endTrigger = i < cards.length - 1 ? cards[i + 1] : card;

        gsap.fromTo(
          card,
          { opacity: 1, y: 0 },
          {
            opacity: 0.9,
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: card,
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

  return (
    <section ref={rootRef} className="relative bg-neutral-950 text-neutral-50">
      {/* ✅ Modal mounted once (not inside map) */}
      <StartProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* subtle grid/noise feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between gap-6">
            <p className="text-xs font-medium tracking-[0.22em] text-neutral-400">
              SERVICES
            </p>

            <p className="text-xs font-medium tracking-[0.22em] text-neutral-400">
              {pad3(active + 1)}/{pad3(SERVICES.length)}
            </p>
          </div>

          <h2 className="mt-5 max-w-4xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            On-demand Shopify designers & developers for growing brands.
          </h2>

          <div className="mt-6 h-px w-full bg-white/10" />
        </div>

        {/* Cards */}
        <div className="relative">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-service-card
              className="
                relative overflow-hidden rounded-2xl
                border border-white/10 bg-neutral-950
                shadow-[0_18px_70px_rgba(0,0,0,0.55)]
                min-h-[82vh]
              "
            >
              {/* inner top rail */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 md:px-10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium tracking-[0.22em] text-neutral-400">
                    SERVICES
                  </span>
                </div>

                <span className="text-xs font-medium tracking-[0.22em] text-neutral-400">
                  {pad3(i + 1)}/{pad3(SERVICES.length)}
                </span>
              </div>

              <div className="grid gap-10 px-6 py-10 md:grid-cols-12 md:px-10 md:py-12">
                {/* Left */}
                <div className="md:col-span-7">
                  <h3 className="text-3xl  text-white/90 uppercase  font-extrabold tracking-tight md:text-3xl">
                    {s.title}
                  </h3>

                  <div className="mt-8">
                    <p className="text-xs font-medium tracking-[0.22em] text-neutral-400">
                      SERVICES
                    </p>

                    <ul className="mt-4 grid gap-x-8 gap-y-3 text-sm text-neutral-200 sm:grid-cols-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-[2px] w-4 bg-white/40" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="md:col-span-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-7">
                    <p className="text-base leading-relaxed text-neutral-100">
                      {s.description}
                    </p>

                    {/* ✅ Open StartProjectModal */}
                    <button
                      type="button"
                      className="
                        mt-6 inline-flex items-center gap-3
                        rounded-full border border-white/15 bg-white/10
                        px-5 py-2.5 text-sm font-medium text-neutral-50
                        transition hover:bg-white/15
                        focus:outline-none focus:ring-2 focus:ring-white/30
                      "
                      onClick={() => setShowModal(true)}
                    >
                      <span aria-hidden className="text-neutral-300">
                        →
                      </span>
                      Let’s Begin
                    </button>
                  </div>

                  {/* Side nav dots */}
                  <div className="mt-8 hidden flex-col gap-3 md:flex">
                    {SERVICES.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          const card = document.querySelectorAll<HTMLElement>(
                            "[data-service-card]"
                          )[idx];
                          card?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                        className="group flex items-center gap-3 text-left"
                      >
                        <span
                          className={[
                            "h-1.5 w-1.5 rounded-full transition",
                            idx === active
                              ? "bg-white"
                              : "bg-white/25 group-hover:bg-white/45",
                          ].join(" ")}
                        />
                        <span
                          className={[
                            "text-xs tracking-[0.18em] transition",
                            idx === active
                              ? "text-white"
                              : "text-neutral-400 group-hover:text-neutral-200",
                          ].join(" ")}
                        >
                          {pad3(idx + 1)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
            </article>
          ))}

          <div className="h-8" />
        </div>
      </div>
    </section>
  );
}

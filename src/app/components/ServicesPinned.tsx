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
    title: "Brand Strategy",
    description:
      "Your brand’s compass. It defines purpose, sharpens positioning, and ensures every decision resonates while driving growth.",
    bullets: [
      "Research & Insights",
      "Go-to-Market Strategy (GTM)",
      "Brand Architecture",
      "Purpose, Mission, Vision",
      "Value Proposition",
      "Communication Strategy",
      "Verbal Identity",
      "Naming",
    ],
  },
  {
    title: "Brand Identity",
    description:
      "The visual heartbeat of your brand: a distinct language that turns heads, stirs hearts, and makes you unforgettable.",
    bullets: [
      "Logotype & Symbol Design",
      "Typography & Color Systems",
      "Brand Book & Guidelines",
      "Illustrations & 3D Visuals",
      "Motion Graphics & Storytelling",
      "Art Direction",
      "Packaging Design",
    ],
  },
  {
    title: "Website",
    description:
      "The digital face of your brand — crafted to captivate, connect, and leave a mark on every visitor.",
    bullets: [
      "UX Design",
      "Interactive UI Design",
      "Information Architecture",
      "Custom Web Development",
      "Scroll Based Animations & 3D",
      "Editorial Design & CMS",
      "Performance Optimization",
      "Website Maintenance & Support",
    ],
  },
  {
    title: "Digital Product",
    description:
      "The engine of your digital experience — functional, scalable, and one step ahead of user expectations.",
    bullets: [
      "UX Design",
      "User Research & Testing",
      "Interactive Prototypes",
      "Mobile App UI Design",
      "Software UI Design",
      "Web App Design",
      "Interaction & Motion Design",
    ],
  },
  {
    title: "E-commerce",
    description:
      "Your brand’s digital marketplace — effortless to shop, hard to forget.",
    bullets: [
      "Consulting & Strategy",
      "Custom Storefront Design & UX",
      "Technical & Compliances",
      "Engineering & Execution",
      "Optimisation & Growth",
      "Maintenance & Support",
    ],
  },
  {
    title: "Content Design",
    description:
      "Turning ideas into captivating visuals and stories — built for campaigns, commercials, and brand narratives.",
    bullets: [
      "Concept Development",
      "Social Media Content",
      "Motion Graphics & CGI",
      "Photography",
      "Video & Post-Production",
      "Content & Copywriting",
      "360 Campaign Design",
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
            Full-service studio to transform brands & digital experiences.
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
                  <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">
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

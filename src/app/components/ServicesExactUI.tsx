"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Service = {
  title: string;
  image: string; // put images in /public/services/...
  items: string[];
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Brand Strategy",
    image: "/services/brand-strategy.jpg",
    items: [
      "Research & Insights",
      "Go-to-Market Strategy (GTM)",
      "Brand Architecture",
      "Purpose, Mission, Vision",
      "Value Proposition",
      "Communication Strategy",
      "Verbal Identity",
      "Naming",
    ],
    description:
      "Your brand’s compass. It defines purpose, sharpens positioning, and ensures every decision resonates while driving growth.",
  },
  {
    title: "Brand Identity",
    image: "/services/brand-identity.jpg",
    items: [
      "Logotype & Symbol Design",
      "Typography & Color Systems",
      "Brand Book & Guidelines",
      "Illustrations & 3D Visuals",
      "Motion Graphics & Storytelling",
      "Art Direction",
      "Packaging Design",
    ],
    description:
      "The visual heartbeat of your brand: we shape a distinct visual language that turns heads, stirs hearts, and makes your brand unforgettable.",
  },
  {
    title: "Website",
    image: "/services/website.jpg",
    items: [
      "UX Design",
      "Interactive UI Design",
      "Information Architecture",
      "Custom Web Development",
      "Scroll Based Animations & 3D",
      "Editorial Design & CMS",
      "Performance Optimization",
      "Website Maintenance & Support",
    ],
    description:
      "The digital face of your brand — crafted to captivate, connect, and leave a mark on every visitor.",
  },
  {
    title: "Digital Product",
    image: "/services/digital-product.jpg",
    items: [
      "UX Design",
      "User Research & Testing",
      "Interactive Prototypes",
      "Mobile App UI Design",
      "Software UI Design",
      "Web App Design",
      "Interaction & Motion Design",
    ],
    description:
      "The engine of your digital experience — functional, scalable, and one step ahead of user expectations.",
  },
  {
    title: "E-commerce",
    image: "/services/ecommerce.jpg",
    items: [
      "Consulting & Strategy",
      "Custom Storefront Design & UX",
      "Technical & Compliances",
      "Engineering & Execution",
      "Optimisation & Growth",
      "Maintenance & Support",
    ],
    description: "Your brand’s digital marketplace — effortless to shop, hard to forget.",
  },
  {
    title: "Content Design",
    image: "/services/content.jpg",
    items: [
      "Concept Development",
      "Social Media Content",
      "Motion Graphics & CGI",
      "Photography",
      "Video & Post-Production",
      "Content & Copywriting",
      "360 Campaign Design",
    ],
    description:
      "Turning ideas into captivating visuals and stories — built for campaigns, commercials, and brand narratives.",
  },
];

const pad3 = (n: number) => String(n).padStart(3, "0");

export default function ServicesExactUI() {
  const rootRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");

      // Ensure correct stacking order while pinned
      panels.forEach((panel, i) => {
        gsap.set(panel, { zIndex: panels.length - i, position: "relative" });
      });

      // Adjust this to your sticky header height (in px)
      const NAV_OFFSET = 88;

      // Cleanup any existing triggers in this context (safe during HMR)
      ScrollTrigger.getAll().forEach((t) => t.kill());

      panels.forEach((panel, i) => {
        // Pin each panel for a controlled scroll distance.
        // pinSpacing:true prevents overlap / content stacking under pinned panel.
        ScrollTrigger.create({
          trigger: panel,
          start: `top top+=${NAV_OFFSET}`,
          end: "+=110%",
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });

        // Track active panel (for 002/006 counter)
        ScrollTrigger.create({
          trigger: panel,
          start: `top center+=${NAV_OFFSET}`,
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      ScrollTrigger.refresh();
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative bg-[#f2f2f2] text-[#0b0b0b] pt-24"
    >
      {/* subtle grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-12 md:px-10 md:py-16">
        {/* global counter top-left */}
        <div className="mb-8 text-[12px] tracking-[0.22em] text-[#111]/70">
          {pad3(active + 1)}/{pad3(SERVICES.length)}
        </div>

        <div className="relative">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-panel
              className="relative min-h-[86vh] bg-transparent"
            >
              {/* Title */}
              <h2 className="mb-10 text-[40px] font-medium leading-[1.05] tracking-[-0.01em] md:text-[56px]">
                {s.title}
              </h2>

              {/* 2 column */}
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
                {/* Left media */}
                <div className="md:col-span-6">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[6px] bg-black">
                    {/* If you don't have images yet, you can remove Image and keep black box */}
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover opacity-90"
                      priority={i === 0}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/25" />
                  </div>
                </div>

                {/* Right list */}
                <div className="md:col-span-6 md:pl-4">
                  <p className="mb-7 text-[12px] tracking-[0.22em] text-[#111]/55">
                    SERVICES
                  </p>

                  <ul className="space-y-2.5 text-[22px] leading-[1.35] tracking-[-0.01em] md:text-[28px]">
                    {s.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="mt-16 max-w-[420px] text-[16px] leading-[1.65] text-[#111]/65 md:mt-20 md:text-[17px]">
                    {s.description}
                  </div>
                </div>
              </div>

              {/* breathing room between pinned panels */}
              <div className="h-10 md:h-14" />
            </article>
          ))}

          <div className="h-10 md:h-16" />
        </div>
      </div>
    </section>
  );
}

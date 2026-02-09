"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StartProjectModal from "@/app/components/StartProjectModal";


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

   const [showModal, setShowModal] = useState(false);


  const CASES = useMemo<CaseStudy[]>(
    () => [
      {
        brand: "Omorovicza. ",
        title:
          "Omorovicza is a luxury skincare brand built around Hungary’s mineral-rich thermal waters and cutting-edge formulation science.Founded in 2006, the brand now serves customers globally through a premium ecommerce experience, international retailers, and dedicated treatment institutions.",
        tags: ["Editorial lifestyle visuals", "Detail-focused product imagery", "Fast add-to-bag functionality", "UI/UX Design"],
        href: "https://www.omorovicza.co.uk/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6979fd5030c5a4c2e2f7cdbf_Omorovicza.png", alt: "Omorovicza" },
      },
      {
        brand: "Two Islands ",
        title:
          "Two Islands was launched by Nutrition graduate Julia Matthews, who created a nutrient-packed protein powder to complement her student lifestyle.",
        tags: [
  "Lifestyle-first product presentation",
  "Detail-focused cut-out imagery",
  "Smart related product journeys",
  "Quick add-to-bag shopping flow",
  "Ingredient education and glossary support",
  "Shop-by-ingredient discovery experience",
],
        href: "https://twoislandsco.com",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697a04a22c40cf94cb626de4_Nicola%20Elliott.png", alt: "MidiHealth" },
      },
      {
        brand: "The Nue Co.",
        title: "The Nue Co. was founded by husband-and-wife team Jules Miller and Charlie Gower. The Nue Co. store is designed to create a seamless and informative shopping journey by combining strong visual storytelling with user-friendly functionality,",
        tags: [
  "Lifestyle-led visual storytelling",
  "Cut-out imagery highlighting product details",
  "Fast quick add-to-bag shopping flow",
  "Subscription programme for repeat purchase ease",
],
        href: "https://uk.thenueco.com/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697a11ce5b081fdffe818779_thenueco.png", alt: "The Nue Co." },
      },
      {
        brand: "Neom Organics",
        title: "Neom Organics was founded in 2005 by former Glamour magazine editor Nicola Elliott, who retrained as an aromatherapist and nutritionist to create a wellbeing brand focused on natural solutions.",
        tags: [
  "Video-led wellbeing storytelling",
  "Cut-out imagery highlighting product detail",
  "Loyalty and referral-driven retention",
  "Quick add-to-bag shopping experience",
  "Clear benefits and delivery transparency",
],

        href: "https://neomwellbeing.com/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697a13f21ac7e0f9a1036f01_Neom.png", alt: "ArthroFill" },
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
            <h3 className="text-2xl font-semibold text-white/90" >Top Health & Wellness Brands on Shopify</h3>
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

                      <h3 className="mt-6  text-sm font-thin leading-tight tracking-tight text-white/70 sm:text-sm">
                        {c.title}
                      </h3>
                     
                     <h6 className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-white/90">Store Standout Features:</h6>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
                        {c.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>

                      <a
                        href={c.href}
                        className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Visit The website</span>
                        <span className="grid h-5 w-5  text-black place-items-center rounded-full bg-[#DFF976]">
                           →
                        </span>
                      </a>

 
                     
                    </div>

<button
  onClick={() => setShowModal(true)}
  className="
    inline-flex w-fit
    cursor-pointer
    items-center
    bg-white/95
    text-black
    px-4 py-2
    rounded-full
    text-sm font-thin
    uppercase
    hover:bg-white/90
    transition
  "
>
  Want something similar?
</button>

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
                    " cursor-pointer w-full text-left px-6 py-5 sm:px-8",
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
        <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}

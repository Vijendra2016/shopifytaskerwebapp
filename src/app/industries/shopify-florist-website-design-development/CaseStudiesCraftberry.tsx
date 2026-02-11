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
        brand: "Zita Elze",
        title:
          "Zita Elze is an award-winning florist and floral design studio based in London, creating original arrangements, bespoke event installations, flower subscriptions, and luxury bouquets delivered to your door.",
        tags: ["Editorial lifestyle visuals for bouquets and bespoke floral designs", "Detail-focused imagery highlighting seasonal flower collections", "Brand storytelling and testimonials to build trust", "UI/UX Design"],
        href: "https://zitaelze.com/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697c5bb887763e4b9325294a_ZitaElze.png", alt: "florist shopify development" },
      },
      {
        brand: "Davinci Flowers ",
        title:
          "Davinci Flower is a floral and lifestyle brand offering fresh bouquets, handcrafted decor, modern vases, aromatic diffusers, and same-day flower delivery from their Plainview, NY shop",
        tags: [
  "Clear category navigation for bouquets, vases, and decor",
  "Same-day and next-day local delivery with custom arrangement options",
  "Prominent “Shop Now” and product calls-to-action",
  "Quick add-to-bag shopping flow",
  "Testimonials and brand story sections to build trust and credibility",
  
],
        href: "https://davinciflower.com/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697c5fec48ea3198cd9d13f8_Davinci.png", alt: "flower website design shopify" },
      },
      {
        brand: "Found",
        title: "Fond was created to make gifting stress-free, beautiful, and unforgettable — simplifying the experience of buying flowers by combining thoughtful design with seamless service.",
        tags: [
  "Fresh, seasonal flowers delivered with purpose",
  "Next-day delivery to make last-minute gifting effortless",
  "Thoughtful touches like in-house designed greeting cards",
  "Bright, photogenic packaging built for sharing memories",
],
        href: "https://fond.co.uk/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69898f06a69f7738722e24dd_found-website-shopify-flower-website-design.png", alt: "Found florist website shopify" },
      },
      {
        brand: "Farm Nine",
        title: "Farm Nine is a family-run cut flower farm born from a backyard dream, where founders Niesa and Flor cultivate beautiful, fragrant blooms on their 13-acre homestead. They hand-grow and design unique floral arrangements for weddings, events, and weekly markets, bringing farm-fresh flowers straight from field to vase with love and care.",
        tags: [
  "Seasonal, farm-fresh flowers grown and arranged in-house",
  "Local delivery eligibility clearly displayed in the cart",
  "Fast, friction-free add-to-cart and checkout experience",
  "Authentic, story-led brand that builds trust and repeat orders",
],

        href: "https://farmnine.com/",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/698991eccd2accb35d3bf8e4_farmenine-shopify-website-design-development.png", alt: "Farme Nine Shopify website Design" },
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
            <h3 className="text-2xl font-semibold text-white/90" >Top Shopify Website for Retail Florist on Shopify</h3>
            <p className="text-xs font-medium tracking-[0.22em] text-white/45">
              we gether list of top best Retail Florist  website build in shopify
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

                      <h3 className="mt-3  text-sm font-thin leading-tight tracking-tight text-white/70 sm:text-sm">
                        {c.title}
                      </h3>
                     
                     <h6 className="mt-1 flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-white/90">Store Standout Features:</h6>
                      <ul className="mt-1 list-disc pl-5 text-sm text-white/60 space-y-1">
  {c.tags.map((t) => (
    <li key={t}>{t}</li>
  ))}
</ul>


                      <a
                        href={c.href}
                        className="mt-3 inline-flex items-center gap-3 text-sm font-semibold text-white/85 hover:text-white"
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

                    <div className="mt-2 flex items-center gap-2 text-xs text-white/40">
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

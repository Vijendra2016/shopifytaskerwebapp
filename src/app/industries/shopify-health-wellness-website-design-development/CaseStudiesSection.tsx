"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type CaseStudy = {
  id: string;
  brand: string;
  title: string;
  tags: string[];
  href: string;
  image: { src: string; alt: string };
};

export default function CaseStudiesSnap() {
  const items = useMemo<CaseStudy[]>(
    () => [
      {
        id: "fitspo",
        brand: "fitspo",
        title:
          "Leading European Supplement Brand Shopify Migration, Redesign and Internationalization",
        tags: ["Migration", "Internationalization", "Store Build", "UI/UX Design"],
        href: "/case-studies/fitspo",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg", alt: "Fitspo" },
      },
      {
        id: "midi",
        brand: "MidiHealth",
        title:
          "DTC Shopify Build for a Google Ventures-Backed Platform Supporting Women in Menopause",
        tags: ["Custom Theme Development", "Store Build", "UI/UX Design"],
        href: "/case-studies/midi",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg", alt: "MidiHealth" },
      },
      {
        id: "innermost",
        brand: "INNERMOST",
        title: "Shopify Plus optimization and subscription rebuild for a wellness brand",
        tags: ["Optimization", "Subscriptions", "UI/UX Design"],
        href: "/case-studies/innermost",
        image: { src: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697890a89e4f4dff082b982b_kbo-bike-kXP41LVdcv0-unsplash%20(1).jpg", alt: "INNERMOST" },
      },
    ],
    []
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  // Observe which panel is currently “dominant” in the viewport
  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-panel]"));

    const io = new IntersectionObserver(
      (entries) => {
        // pick the entry with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const id = visible?.target.getAttribute("data-panel");
        if (id) setActiveId(id);
      },
      {
        root,
        // makes it switch when panel is mostly centered
        threshold: [0.25, 0.5, 0.75],
      }
    );

    panels.forEach((p) => io.observe(p));
    return () => io.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const root = scrollerRef.current;
    if (!root) return;
    const el = root.querySelector<HTMLElement>(`[data-panel="${id}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* LEFT: sticky brand list (like the black rows you showed) */}
          <aside className="lg:col-span-3">
            <div className="sticky top-6 space-y-2">
              {items.map((it) => {
                const active = it.id === activeId;
                return (
                  <button
                    key={it.id}
                    onClick={() => scrollTo(it.id)}
                    className={[
                      "w-full rounded-xl border px-4 py-4 text-left transition",
                      "bg-neutral-950",
                      active
                        ? "border-white/25 text-white"
                        : "border-white/10 text-white/70 hover:border-white/20 hover:text-white",
                    ].join(" ")}
                  >
                    <div className="text-lg font-semibold tracking-tight">{it.brand}</div>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT: scroll container with snap */}
          <div className="lg:col-span-9">
            <div
              ref={scrollerRef}
              className={[
                "h-[80vh] overflow-y-auto rounded-2xl border border-white/10",
                "scroll-smooth",
                "snap-y snap-mandatory",
                // optional: hide scrollbar
                "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              ].join(" ")}
            >
              {items.map((it) => (
                <article
                  key={it.id}
                  data-panel={it.id}
                  className={[
                    "snap-start",
                    "border-b border-white/10 last:border-b-0",
                    "bg-neutral-950",
                  ].join(" ")}
                >
                  <div className="grid min-h-[80vh] grid-cols-1 lg:grid-cols-12">
                    {/* content left inside panel */}
                    <div className="lg:col-span-5">
                      <div className="flex h-full flex-col justify-center p-6 sm:p-10">
                        <div className="mb-6 text-base font-semibold text-white/90">
                          {it.brand}
                        </div>

                        <h3 className="text-pretty text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                          {it.title}
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
                          {it.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>

                        <a
                          href={it.href}
                          className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white/90 hover:text-white"
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
                    </div>

                    {/* image right inside panel */}
                    <div className="relative lg:col-span-7">
                      <div className="relative h-[45vh] w-full lg:h-full">
                        <Image
                          src={it.image.src}
                          alt={it.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        {/* subtle overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neutral-950/50 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-3 text-xs text-white/40">
              Scroll area uses <code className="text-white/60">scroll-snap</code> +
              IntersectionObserver to set the active panel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

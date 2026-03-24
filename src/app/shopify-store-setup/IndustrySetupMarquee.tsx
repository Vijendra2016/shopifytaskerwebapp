"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  terms: string[];
};

export default function IndustrySetupMarquee({ terms }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const items = gsap.utils.toArray<HTMLElement>(".setup-marquee-item");
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.to(items, {
        xPercent: -100,
        repeat: -1,
        duration: 90,
        ease: "none",
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    }, trackRef);

    return () => ctx.revert();
  }, [terms]);

  const repeated = [...terms, ...terms, ...terms, ...terms];

  return (
    <div className="w-full overflow-hidden bg-[#DFF976] py-3 border-y border-black/10">
      <div
        ref={trackRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <div className="setup-marquee-item flex items-center gap-0 flex-shrink-0">
          {repeated.map((term, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-black px-6">
                {term}
              </span>
              <span className="text-black/30 text-xs select-none">·</span>
            </span>
          ))}
        </div>
        <div className="setup-marquee-item flex items-center gap-0 flex-shrink-0" aria-hidden>
          {repeated.map((term, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[11px] font-bold uppercase tracking-widest text-black px-6">
                {term}
              </span>
              <span className="text-black/30 text-xs select-none">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

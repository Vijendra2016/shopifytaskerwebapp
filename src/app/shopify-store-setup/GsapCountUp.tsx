"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  /** Full display value e.g. "500+", "3–5 days", "10+ yrs" */
  value: string;
  className?: string;
};

/** Extract leading integer if present, else return null */
function parseLeading(value: string): { num: number; suffix: string } | null {
  const m = value.match(/^(\d+)(.*)/);
  if (!m) return null;
  return { num: parseInt(m[1], 10), suffix: m[2] };
}

export default function GsapCountUp({ value, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const parsed = parseLeading(value);

  useEffect(() => {
    if (!ref.current || !parsed) return;

    const el = ref.current;
    const obj = { count: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        count: parsed.num,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
        onUpdate() {
          el.textContent = Math.round(obj.count) + parsed.suffix;
        },
      });
    });

    return () => ctx.revert();
  }, [parsed]);

  // Non-numeric values render as-is
  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      0{parsed.suffix}
    </span>
  );
}

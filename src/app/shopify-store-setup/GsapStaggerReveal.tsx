"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
};

export default function GsapStaggerReveal({
  children,
  className,
  stagger = 0.08,
  y = 30,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(
        ref.current!.children as unknown as HTMLElement[]
      );

      gsap.fromTo(
        items,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger,
          ease: "power3.out",
          // Clear transforms after animation so fixed-position descendants
          // (modals) are not trapped in a stacking context
          onComplete: () => { gsap.set(items, { clearProps: "transform" }); },
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [stagger, y]);

  // Children are invisible until GSAP runs
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

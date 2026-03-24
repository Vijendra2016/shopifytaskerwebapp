"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function GsapScrollReveal({
  children,
  className,
  delay = 0,
  y = 40,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          delay,
          ease: "power3.out",
          // Clear the transform after animation so no stacking context is left
          // (CSS fixed positioning breaks when an ancestor has a transform)
          onComplete: () => { gsap.set(el, { clearProps: "transform" }); },
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

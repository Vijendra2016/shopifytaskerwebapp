"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

interface ScrambleTextProps {
  words: string[];
  interval?: number;        // seconds between word changes
  duration?: number;        // scramble animation duration in seconds
  chars?: string;           // characters used during scramble
  className?: string;
}

export default function ScrambleText({
  words,
  interval = 3,
  duration = 1,
  chars = "upperCase",
  className = "",
}: ScrambleTextProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!textRef.current || words.length === 0) return;

    // Set initial word immediately (no scramble on first render)
    textRef.current.textContent = words[0];

    if (words.length === 1) return;

    const cycle = () => {
      indexRef.current = (indexRef.current + 1) % words.length;
      gsap.to(textRef.current, {
        duration,
        scrambleText: {
          text: words[indexRef.current],
          chars,
          revealDelay: 0.3,
          speed: 0.4,
        },
      });
    };

    const timer = setInterval(cycle, interval * 1000);
    return () => clearInterval(timer);
  }, [words, interval, duration, chars]);

  return <span ref={textRef} className={className} />;
}

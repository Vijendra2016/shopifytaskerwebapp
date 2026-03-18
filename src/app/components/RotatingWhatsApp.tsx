'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function RotatingWhatsApp() {
  const ringRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!ringRef.current) return;

    const ctx = gsap.context(() => {
      // Continuous slow rotation
      const spin = gsap.to(ringRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 9,
        ease: 'none',
        transformOrigin: '50% 50%',
      });

      // Speed up on hover, return to normal speed on leave
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const speedUp = () => gsap.to(spin, { timeScale: 2.5, duration: 0.4 });
      const slowDown = () => gsap.to(spin, { timeScale: 1, duration: 0.6 });

      wrapper.addEventListener('mouseenter', speedUp);
      wrapper.addEventListener('mouseleave', slowDown);

      return () => {
        wrapper.removeEventListener('mouseenter', speedUp);
        wrapper.removeEventListener('mouseleave', slowDown);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <Link
      ref={wrapperRef}
      href="https://wa.me/+917014716631"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-8 left-8 z-50 w-[96px] h-[96px] group"
    >
      {/* Rotating text ring */}
      <svg
        ref={ringRef}
        viewBox="0 0 100 100"
        width="96"
        height="96"
        className="absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <path
            id="whatsappCirclePath"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          fontSize="10"
          fill="white"
          letterSpacing="2.4"
          fontWeight="500"
          fontFamily="inherit"
          textAnchor="start"
        >
          <textPath href="#whatsappCirclePath">
            GET IN TOUCH • GET IN TOUCH •
          </textPath>
        </text>
      </svg>

      {/* Center arrow */}
      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 17L17 5M17 5H8M17 5V14"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}

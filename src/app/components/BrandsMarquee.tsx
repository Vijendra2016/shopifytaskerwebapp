'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

type Brand = { src: string; alt: string };

type Props = {
  brands: Brand[];
  speed?: number; // pixels per second
  pauseOnHover?: boolean;
};

export default function BrandsMarquee({
  brands,
  speed = 80, // px/sec
  pauseOnHover = true,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const ctx = gsap.context(() => {
      const build = () => {
        // cleanup previous run (important for resize/strict mode)
        tweenRef.current?.kill();
        gsap.set(track, { x: 0 });

        // remove previous clones
        const originals = Array.from(track.querySelectorAll('[data-original="true"]'));
        track.innerHTML = '';
        originals.forEach((node) => track.appendChild(node));

        // ensure enough width to scroll
        const ensureWidth = () => {
          const wrapW = wrap.clientWidth;
          while (track.scrollWidth < wrapW * 2) {
            Array.from(track.children).forEach((child) => {
              track.appendChild(child.cloneNode(true));
            });
          }
        };

        ensureWidth();

        // total distance for one full loop (half of duplicated content)
        const distance = track.scrollWidth / 2;
        const duration = distance / speed; // seconds

        tweenRef.current = gsap.to(track, {
          x: -distance,
          duration,
          ease: 'none',
          repeat: -1,
          modifiers: {
            x: gsap.utils.wrap(-distance, 0),
          },
        });
      };

      // mark originals once so we can rebuild cleanly
      Array.from(track.children).forEach((child) => {
        (child as HTMLElement).setAttribute('data-original', 'true');
      });

      // build after layout
      requestAnimationFrame(build);

      // rebuild on resize
      const ro = new ResizeObserver(() => build());
      ro.observe(wrap);

      // pause on hover
      if (pauseOnHover) {
        const onEnter = () => tweenRef.current?.pause();
        const onLeave = () => tweenRef.current?.resume();
        wrap.addEventListener('mouseenter', onEnter);
        wrap.addEventListener('mouseleave', onLeave);

        return () => {
          ro.disconnect();
          wrap.removeEventListener('mouseenter', onEnter);
          wrap.removeEventListener('mouseleave', onLeave);
        };
      }

      return () => ro.disconnect();
    }, wrapRef);

    return () => ctx.revert();
  }, [brands, speed, pauseOnHover]);

  return (
    <section className="relative w-full bg-black py-20">
      {/* Label like GSAP */}
      <div className="mx-auto mb-14 max-w-6xl px-6">
        <span className="inline-flex items-center gap-2 text-white/80">
          <span className="text-3xl leading-none">{'{'}</span>
          <span className="text-sm font-semibold tracking-wide">Brands using GSAP®</span>
          <span className="text-3xl leading-none">{'}'}</span>
        </span>
      </div>

      {/* Marquee */}
      <div
        ref={wrapRef}
        className="relative mx-auto max-w-6xl overflow-hidden px-6"
      >
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-0 z-10
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          bg-black" />

        <ul
          ref={trackRef}
          className="flex items-center gap-24 whitespace-nowrap will-change-transform"
        >
          {brands.map((b, i) => (
            <li key={i} className="opacity-80 grayscale">
              <img
                src={b.src}
                alt={b.alt}
                className="h-10 w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

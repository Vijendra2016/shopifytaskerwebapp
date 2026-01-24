'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function GsapMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.marquee-item');

      gsap.to(items, {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: 'none',
        modifiers: {
          xPercent: gsap.utils.wrap(-100, 0),
        },
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white/90 py-2">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
}

function MarqueeContent() {
  return (
    <div className="marquee-item flex items-center gap-12 pr-12">
      <span className="text-sm uppercase  font-bold  text-black">
       Shopify Expert
      </span>

<span className="text-sm font-bold   uppercase  text-black">
       Shopify Designer 
      </span>

<span className="text-sm font-bold uppercase   text-black">
       Shopify Developer 
      </span>
<span className="text-sm font-bold uppercase  text-black">
       Shopify Plus Developer
      </span>

<span className="text-sm font-bold uppercase  text-black">
       Shopify B2B
      </span>
      
      <span className="text-sm uppercase  font-bold  text-black">
       Shopify Expert
      </span>

<span className="text-sm font-bold   uppercase  text-black">
       Shopify Designer 
      </span>

<span className="text-sm font-bold uppercase   text-black">
       Shopify Developer 
      </span>
<span className="text-sm font-bold uppercase  text-black">
       Shopify Plus Developer
      </span>

<span className="text-sm font-bold uppercase  text-black">
       Shopify B2B
      </span>
      
      

      
    </div>
  );
}

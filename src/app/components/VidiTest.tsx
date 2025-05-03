'use client';

import { useState } from 'react';
import Link from 'next/link';

const features = [
  {
    title: 'Cart',
    description: 'Leverage a feature-rich, server-side, edge rendered cart that effortlessly handles discounts, metafields, and everything critical to convert.',
  },
  {
    title: 'Markets',
    description: 'Expand globally with built-in support for international domains, currencies, and language localization.',
  },
  {
    title: 'Analytics',
    description: 'Gain insights through powerful built-in analytics that drive smarter decisions.',
  },
  {
    title: 'Shop Pay',
    description: 'Accelerate checkout with Shop Pay for higher conversions and lower abandonment.',
  },
  {
    title: 'Search and Discovery',
    description: 'Help customers find what they want quickly with robust search and intelligent discovery tools.',
  },

];



export default function ShopifyFeatures() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-white p-10">
      <h1 className="text-5xl font-black leading-tight mb-6">
        Accelerate development<br />
        with built-in <span className="text-[#008060]">Shopify</span> features<br />
        critical to <span className="text-[#008060]">conversion</span>
      </h1>

      <div className="flex items-start gap-10">
        {/* Shopify Icon */}
        
        {/* Feature List */}
        <ul className="space-y-4 relative">
          {features.map((feature, index) => (
            <li
              key={feature.title}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className="relative cursor-pointer text-xl font-mono text-black border-b border-cyan-400 pb-1"
            >
              <Link href="#" className="hover:underline">
                {feature.title} ↗
              </Link>

              {/* Tooltip */}
              {activeIndex === index && (
                <div className="absolute left-full top-0 ml-4 w-96 p-4 bg-gradient-to-b from-[#2a2a5e] to-[#161639] text-white rounded shadow-lg z-10">
                  {feature.description}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

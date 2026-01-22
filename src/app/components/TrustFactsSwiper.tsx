"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

type TrustSlide = { title: string; desc: string };

const slides: TrustSlide[] = [
  { title: "97% of our clients return", desc: "Trusted for long-term Shopify improvements" },
  { title: "10+ years of Shopify expertise", desc: "Themes, apps, speed & Shopify Plus" },
  { title: "No upfront payment", desc: "Pay only after successful delivery" },
  { title: "Real in-house team", desc: "No freelancers • No outsourcing" },
];

export default function TrustFactsSwiper() {
  return (
    <div className="trust-swiper w-full rounded-lg overflow-hidden mp-4 px-4 py-3 min-h-[72px]">
      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={450}
        observer
        observeParents
        className="h-full"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx} className="!h-full !flex !items-center !justify-center">
            <div className="text-center">
              <div className="text-sm font-semibold text-black">{s.title}</div>
              <div className="mt-1 text-xs text-black">{s.desc}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

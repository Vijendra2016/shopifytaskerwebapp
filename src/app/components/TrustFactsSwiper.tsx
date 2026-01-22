"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

type Testimonial = {
  name: string;
  store?: string;
  rating: 5 | 4;
  quote: string;
  avatar?: string; // /images/testimonials/jane.jpg (optional)
};

const testimonials: Testimonial[] = [
  {
    name: "Jürgen Heikamp",
    store: "Founder of Dutch Cargo",
    rating: 5,
    quote: "Vidi helped us a lot with Shopify improvements and SEO. Fast and professional.",
    avatar: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6972635eee315ebdadf20eaa_dutchcargo.png",
  },
  {
    name: "Jürgen Heikamp",
    store: "Founder of Dutch Cargo",
    rating: 5,
    quote: "Great communication and clean delivery. Would hire again for theme work.",
    avatar: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6972635eee315ebdadf20eaa_dutchcargo.png",
  },
  {
    name: "Jürgen Heikamp",
    store: "Founder of Dutch Cargo",
    rating: 5,
    quote: "Quick turnaround and exactly what we needed. Super smooth experience.",
    avatar: "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6972635eee315ebdadf20eaa_dutchcargo.png",

    // no avatar = fallback initials
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-amber-500" : "text-black/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ name, avatar }: { name: string; avatar?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");

  if (avatar) {
    return (
      <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-black/10">
        <Image src={avatar} alt={name} fill className="object-cover" sizes="40px" />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-sm font-semibold text-black">
      {initials}
    </div>
  );
}

export default function TrustFactsSwiper() {
  return (
    <div className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 mt-4">
      <div className="mb-2 text-sm font-semibold text-black">What clients say</div>

      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={450}
        observer
        observeParents
        className="h-full"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="!h-auto">
            <div className="flex items-start gap-3">
              <Avatar name={t.name} avatar={t.avatar} />

              <div className="min-w-0">
                <div className="flex items-center justify-between gap-3">
                  <div className="truncate">
                    <div className="text-sm font-semibold text-black">{t.name}</div>
                    {t.store && <div className="text-xs text-black/70">{t.store}</div>}
                  </div>
                  <Stars rating={t.rating} />
                </div>

                <p className="mt-2 text-xs leading-relaxed text-black/80 line-clamp-2">
                  “{t.quote}”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

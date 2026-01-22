"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";
import "swiper/css";

type Testimonial = {
  name: string;
  store?: string;
  quote: string;
  avatar?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jürgen Heikamp",
    store: "Founder of Dutch Cargo",
    quote:
      "Vidi  from ShopifyTasker helped us a lot with Shopify improvements and SEO. Fast and professional.",
    avatar:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6972635eee315ebdadf20eaa_dutchcargo.png",
  },
  {
    name: "Flora Mak",
    store: "Founder of Flower99",
    quote:
      "Shopify Tasker is very prompt, helpful, patient. Explains and takes you through the process. Easily contactable. Used many times now and will continue to do so.",
    avatar:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697269e4e802de2dac1ae99f_73x73%20(1).png",
  },
  {
    name: "Todd Michael",
    store: "Owner of The Goldsmiths Bench",
    quote:
      "Quick turnaround and exactly what we needed. Super smooth experience.",
    avatar:
      "https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69726c87209a6f9feca20299_Todd%20Michaelnew.png",
  },
];

function RatingStars() {
  return (
    <div className="relative h-[12px] w-[70px]">
      <Image
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/697266398fd7e2e8e1aa48a1_stars-5ratinf.png"
        alt="5 out of 5 stars rating"
        fill
        className="object-contain"
        sizes="90px"
      />
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
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
          sizes="40px"
        />
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
    <div className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 mt-2">
      <div className="mb-1 text-sm font-semibold text-black">
        What clients say
      </div>

      <Swiper
        modules={[Autoplay, A11y]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={450}
        observer
        observeParents
        className="h-full"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="!h-auto">
            <div className="flex items-start gap-3">
              <Avatar name={t.name} avatar={t.avatar} />

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <div className="truncate">
                    <div className="text-sm font-semibold text-black">
                      {t.name}
                    </div>
                    {t.store && (
                      <div className="text-xs text-black/70">{t.store}</div>
                    )}
                  </div>

                  <RatingStars />
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

"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import type { IndustryReviewData } from "@/lib/industry-reviews";

type Props = {
  data: IndustryReviewData;
  industryName: string;
};

function relativeTime(daysAgo: number): string {
  if (daysAgo === 0) return "Today";
  if (daysAgo === 1) return "Yesterday";
  if (daysAgo < 7) return `${daysAgo} days ago`;
  if (daysAgo < 14) return "1 week ago";
  if (daysAgo < 21) return "2 weeks ago";
  if (daysAgo < 28) return "3 weeks ago";
  if (daysAgo < 60) return "1 month ago";
  return `${Math.floor(daysAgo / 30)} months ago`;
}

const StarPath = "M12 2l2.939 6.326 6.561.955-4.75 4.625 1.121 6.53L12 17.25l-5.871 3.186 1.121-6.53L2.5 9.281l6.561-.955z";

function StarRating({ rating }: { rating: 4 | 5 }) {
  const empty = 5 - rating;
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
      {/* filled stars inside bordered pill */}
      <div className="inline-flex gap-0.5 items-center border border-black rounded-full px-2 py-1">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="black" stroke="black" strokeWidth={0.5} strokeLinejoin="round">
            <path d={StarPath} />
          </svg>
        ))}
      </div>
      {/* empty outlined stars outside the pill */}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth={1.5} strokeLinejoin="round">
          <path d={StarPath} />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.trim().split(" ");
  const letters = parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
  const colors = [
    "bg-violet-600", "bg-blue-600", "bg-emerald-600", "bg-rose-600",
    "bg-amber-600",  "bg-teal-600",  "bg-indigo-600",  "bg-pink-600",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
      aria-hidden="true"
    >
      {letters}
    </div>
  );
}

export default function IndustryReviewsSwiper({ data, industryName }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-black py-16 md:py-20 overflow-hidden">

      {/* ── Header row ── */}
      <div className="px-6 md:px-14 max-w-6xl mx-auto mb-8 flex items-center justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2 font-medium">
            Client reviews
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            What {industryName} founders say
          </h2>
        </div>

        {/* Aggregate + nav arrows */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Rating pill */}
          <div className="hidden sm:flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2">
            <span className="text-lg font-bold text-white leading-none">
              {data.aggregateRating.toFixed(1)}
            </span>
            <svg className="w-4 h-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs text-white/30">({data.reviewCount}+)</span>
          </div>

          {/* Prev */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next review"
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Swiper — peek overflow on right ── */}
      <div className="pl-6 md:pl-14 [&_.swiper-slide]:!bg-black" style={{ marginLeft: "calc(50vw - min(48rem, 50vw) + 0px)" }}>
        <Swiper
          modules={[Autoplay, Navigation, A11y]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          loop
          autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          speed={550}
          observer
          observeParents
          style={{ height: "420px" }}
          breakpoints={{
            0:   { slidesPerView: 1.1,  spaceBetween: 14 },
            480: { slidesPerView: 1.4,  spaceBetween: 16 },
            640: { slidesPerView: 2.1,  spaceBetween: 18 },
            900: { slidesPerView: 2.8,  spaceBetween: 22 },
            1200:{ slidesPerView: 3.2,  spaceBetween: 24 },
          }}
          a11y={{ prevSlideMessage: "Previous review", nextSlideMessage: "Next review" }}
        >
          {data.reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <article className="bg-white border border-gray-200 rounded-2xl p-7 h-full flex flex-col gap-4 hover:shadow-lg transition-shadow overflow-hidden">

                {/* Stars */}
                <StarRating rating={review.rating} />

                {/* Title */}
                <p className="text-black font-bold text-base leading-snug">
                  &ldquo;{review.title}&rdquo;
                </p>

                {/* Body */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {review.body}
                </p>

                {/* Reviewer row */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <Initials name={review.name} />
                  <div className="min-w-0 flex-1">
                    <div className="text-black text-sm font-semibold truncate">{review.name}</div>
                    <div className="text-gray-400 text-xs truncate">{review.location}</div>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-medium uppercase tracking-widest flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>

                {/* Time */}
                <p className="text-[10px] text-gray-300 uppercase tracking-widest">
                  {relativeTime(review.daysAgo)}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

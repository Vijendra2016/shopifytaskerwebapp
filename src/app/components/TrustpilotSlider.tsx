'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

const reviews = [
  {
    name: "Sarah M.",
    date: "April 12",
    title: "Outstanding Shopify development",
    body: "ShopifyTasker completely transformed our store. Fast turnaround, professional team, and the results exceeded our expectations. Highly recommend!",
    stars: 5,
  },
  {
    name: "James R.",
    date: "April 8",
    title: "Super fast and professional",
    body: "Got my theme customized within 24 hours. The developer understood exactly what I wanted and delivered perfectly. No upfront payment made it stress-free.",
    stars: 5,
  },
  {
    name: "Emily T.",
    date: "April 3",
    title: "Best Shopify experts I've worked with",
    body: "I needed a complex custom Liquid section and they nailed it first time. Great communication throughout the whole project. Will use again for sure.",
    stars: 5,
  },
  {
    name: "Daniel K.",
    date: "March 28",
    title: "Excellent migration from WooCommerce",
    body: "Migrated our entire WooCommerce store to Shopify seamlessly. No data loss, everything set up perfectly. Very impressed with the attention to detail.",
    stars: 5,
  },
  {
    name: "Priya S.",
    date: "March 22",
    title: "Incredible speed optimization",
    body: "Our store went from 42 to 91 on PageSpeed after their SEO and speed work. Absolutely worth every penny. Sales have improved noticeably since.",
    stars: 5,
  },
  {
    name: "Tom W.",
    date: "March 17",
    title: "Responsive and highly skilled team",
    body: "Reached out on a Friday and had my Shopify bug fixed by Saturday morning. Responsive, knowledgeable, and fairly priced. Exactly what I needed.",
    stars: 5,
  },
  {
    name: "Laura B.",
    date: "March 12",
    title: "Great app integration work",
    body: "Had Klaviyo and ReCharge integrated smoothly into our store. Everything works perfectly. The team explained each step clearly throughout the process.",
    stars: 5,
  },
  {
    name: "Michael C.",
    date: "March 6",
    title: "Highly recommended for Shopify Plus",
    body: "Complex Shopify Plus checkout customisation completed flawlessly. The developer was highly experienced and delivered ahead of the agreed timeline.",
    stars: 5,
  },
];

function StarRating({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: stars }).map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00B67A">
          <rect width="24" height="24" fill="#00B67A" rx="2" />
          <path
            d="M12 4l2.09 6.26H20l-5.18 3.76 1.97 6.24L12 16.27l-4.79 4 1.97-6.24L4 10.26h5.91z"
            fill="white"
          />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1 text-[#00B67A]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#00B67A" />
        <path d="M7 12.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-[12px] font-medium text-[#00B67A]">Verified</span>
    </div>
  );
}

export default function TrustpilotSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Slider with side arrows */}
        <div className="relative flex items-center gap-3">
          {/* Prev button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition cursor-pointer"
            aria-label="Previous"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex-1 overflow-hidden">
            <Swiper
              onSwiper={(swiper) => { swiperRef.current = swiper; }}
              slidesPerView={1.2}
              spaceBetween={16}
              modules={[Navigation, Autoplay]}
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              breakpoints={{
                640:  { slidesPerView: 2.1 },
                1024: { slidesPerView: 3.1 },
                1280: { slidesPerView: 4.1 },
                1536: { slidesPerView: 5 },
              }}
            >
              {reviews.map((review, i) => (
                <SwiperSlide key={i}>
                  <div className="border border-gray-200 rounded-sm p-4 h-full flex flex-col justify-between bg-white min-h-[190px]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <StarRating stars={review.stars} />
                        <VerifiedBadge />
                      </div>
                      <p className="text-[13.5px] font-bold text-gray-900 leading-snug mb-1.5 line-clamp-1">
                        {review.title}
                      </p>
                      <p className="text-[12.5px] text-gray-600 leading-relaxed line-clamp-3">
                        {review.body}
                      </p>
                    </div>
                    <p className="mt-3 text-[12px] text-gray-500">
                      <span className="font-semibold text-gray-800">{review.name}</span>, {review.date}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Next button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-500 transition cursor-pointer"
            aria-label="Next"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        {/* Bottom rating summary */}
        <div className="mt-6 flex flex-col items-center gap-1.5">
          <p className="text-[13.5px] text-gray-700 text-center">
            Rated <strong>4.8</strong> / 5 based on{' '}
            <a
              href="https://www.trustpilot.com/review/shopifytasker.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium"
            >
              420 reviews
            </a>
            . Showing our 4 &amp; 5 star reviews.
          </p>
          <a
            href="https://www.trustpilot.com/review/shopifytasker.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            {/* Trustpilot star */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#00B67A">
              <rect width="24" height="24" fill="#00B67A" rx="2" />
              <path d="M12 4l2.09 6.26H20l-5.18 3.76 1.97 6.24L12 16.27l-4.79 4 1.97-6.24L4 10.26h5.91z" fill="white" />
            </svg>
            <span className="text-[13px] font-semibold text-gray-800">Trustpilot</span>
          </a>
        </div>

      </div>
    </section>
  );
}

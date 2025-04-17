"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
// Swiper styles
import "swiper/css";
import "swiper/css/pagination";




export default function CenteredSlider() {
  return (
    <Swiper
      slidesPerView="auto"
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="!w-auto px-4">
        <Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231bc_card-01.jpg"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
        
        Slide 1</SwiperSlide>
      <SwiperSlide className="!w-auto px-4">
        <Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231ba_card-02.jpg"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
            Shopify Hyrdogen Development</SwiperSlide>
      <SwiperSlide className="!w-auto px-4"><Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231cd_card-03.jpg"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            /></SwiperSlide>
      <SwiperSlide className="!w-auto px-4"><Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231ba_card-02.jpg"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
            Shopify Hyrdogen Development</SwiperSlide>
      <SwiperSlide className="!w-auto px-4"><Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231ba_card-02.jpg"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
            Shopify Hyrdogen Development</SwiperSlide>
      <SwiperSlide className="!w-auto px-4"><Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231ba_card-02.jpg"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
            Shopify Hyrdogen Development</SwiperSlide>
    </Swiper>
  );
}

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
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fba5d00276e79ad605e790_Ontology_Core_1.png"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
        
        Slide 1</SwiperSlide>
      <SwiperSlide className="!w-auto px-4">
        <Image
              className="w-full h-half object-cover"
              src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67fba5d00276e79ad605e790_Ontology_Core_1.png"
              alt="Shopify Development"
              width={1200}
              height={650}
              priority
            />
            Slide 2</SwiperSlide>
      <SwiperSlide className="!w-auto px-4">Slide 3</SwiperSlide>
      <SwiperSlide className="!w-auto px-4">Slide 4</SwiperSlide>
      <SwiperSlide className="!w-auto px-4">Slide 5</SwiperSlide>
      <SwiperSlide className="!w-auto px-4">Slide 6</SwiperSlide>
    </Swiper>
  );
}

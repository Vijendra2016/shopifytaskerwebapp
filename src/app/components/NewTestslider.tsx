'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

interface Trainer {
  name: string;
  price: string;
  views: string;
  image: string;
  isElite?: boolean;
}

const trainers: Trainer[] = [
  {
    name: 'Excellent communication and dedication to the timeline—even over a holiday! Shopifytasker did a great job migrating our website from Squarespace to Shopify—going beyond expectations. Highly recommend!',
    price: '$40',
    views: '4 hours',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6814ad24632535f6efb25b4f_DSC05840_1%20(1).webp',
    isElite: true,
  },
  {
    name: 'Andika Rodriguez',
    price: '$40',
    views: '1M views',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6814aad6e40338347dc20143_swippertest.png',
    isElite: true,
  },
  {
    name: 'Andika Rodriguez',
    price: '$40',
    views: '1M views',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6814aad6e40338347dc20143_swippertest.png',
    isElite: true,
  },
  {
    name: 'Andika Rodriguez',
    price: '$40',
    views: '1M views',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6814aad6e40338347dc20143_swippertest.png',
    isElite: true,
  },
  {
    name: 'Andika Rodriguez',
    price: '$40',
    views: '1M views',
    image: 'https://cdn.prod.website-files.com/67860b0fa33a316e96823102/6814aad6e40338347dc20143_swippertest.png',
    isElite: true,
  },
];

export default function TrainerSlider() {
  return (
    <div className="px-4 py-6">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        navigation
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
          1440: { slidesPerView: 4.2 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {trainers.map((trainer, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={trainer.image}
                alt={trainer.name}
                width={400}
                height={500}
                className="object-cover w-full h-[500px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <p className="text-sm font-medium">{trainer.price}</p>
                <p className="text-lg font-semibold">{trainer.name}</p>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <span>{trainer.views}</span>
                  {trainer.isElite && (
                    <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md">
                      solin elite
                    </span>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

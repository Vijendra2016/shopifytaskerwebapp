// components/FashionSlider.jsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Parallax } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

const slides = [
  {
    title: 'Store Development',
    Detail: 'we can create your shopify theme on custom and premium theme. we create and setup more then 150+ Shopify Store, lets hire experience shopify web developer from shopifytasker.',
    image: 'https://cdn.pixabay.com/photo/2023/03/17/02/42/architecture-7857832_1280.jpg',
    bgColor: '#D1C4B4',
  },
  {
    title: 'Speed Optimization',
    Detail: 'we can create your shopify theme on custom and premium theme. we create and setup more then 150+ Shopify Store, lets hire experience shopify web developer from shopifytasker.',
    image: 'https://cdn.pixabay.com/photo/2024/01/18/14/46/train-8517089_1280.jpg',
    bgColor: '#9B89C5',
  },
  {
    title: 'Yeeze',
    Detail: 'we can create your shopify theme on custom and premium theme. we create and setup more then 150+ Shopify Store, lets hire experience shopify web developer from shopifytasker.',
    image: 'https://cdn.pixabay.com/photo/2024/01/18/14/46/train-8517089_1280.jpg',
    bgColor: '#D7A594',
  },
];

export default function FashionSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        speed={1000}
        parallax={true}
        loop={true}
        modules={[Parallax, Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="h-half"
      >
        <div slot="container-start" data-swiper-parallax="-23%" />

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full flex items-center justify-center bg-cover bg-center relative"
              style={{ backgroundColor: slide.bgColor }}
            >
              <div
                className="absolute text-white text-6xl md:text-8xl font-bold top-24 left-10 z-20"
                data-swiper-parallax="-130%"
              >
                {slide.title}
                
              </div>
              <div
                className="absolute text-white text-6xl md:text-2xl font-bold top-4 left-10 z-20"
                data-swiper-parallax="-130%"
              >
               
                {slide.Detail}
              </div>
              <div className="w-full h-half">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="object-cover w-full h-half"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div
          ref={prevRef}
          className="absolute left-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90" className="w-16 h-16 fill-white">
            <g transform="rotate(180, 80, 45)">
              <circle cx="42" cy="42" r="40" stroke="white" strokeWidth="2" fill="none" />
              <path d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z" fill="white" transform="translate(110,45)" />
              <path d="M80,0H0" stroke="white" strokeWidth="2" transform="translate(40,45)" />
            </g>
          </svg>
        </div>
        <div
          ref={nextRef}
          className="absolute right-4 top-1/2 z-30 -translate-y-1/2 cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90" className="w-16 h-16 fill-white">
            <circle cx="42" cy="42" r="40" stroke="white" strokeWidth="2" fill="none" />
            <path d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z" fill="white" transform="translate(110,45)" />
            <path d="M80,0H0" stroke="white" strokeWidth="2" transform="translate(40,45)" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
}

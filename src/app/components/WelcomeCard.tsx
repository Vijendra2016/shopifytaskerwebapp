"use client";
import Image from "next/image";
import { TfiArrowTopRight } from 'react-icons/tfi';
import React, { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import LocationMessage from './LocationMessage';
export default function WelcomeCard() {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    // prevent nested button click from re-triggering
    if ((e.target as HTMLElement).closest("button")) return;
    setShowModal(true);
  };
  

  return (
    <>
      <div
        onClick={handleCardClick}
        className="fixed bottom-1 righ-2 bg-black border  border-white/90  shadow-lg p-2 rounded-sm z-40 max-w-sm cursor-pointer"
      > <Image
                                  src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/69dce472b9d05292850a7040_startrating.png"
                                  alt="Top Rated Shopify Web Designer in {cityData.city} - 5 Star Rating"
                                  width={100}
                                  height={20}
                                  className="object-contain"
                                />
        <p className="text-white text-lg mb-1">
        Kickstart your first project with confidence
        </p>
        <LocationMessage/>
        
        <div className="flex items-center justify-between gap-3 mt-2">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680baca7a144a823c527edf7_shopifytasker-review.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
          <button
            onClick={() => setShowModal(true)}
            className="cursor-pointer  uppercase h-[3.25rem] inline-flex items-center bg-white/90  text-black px-4 py-2  text-[14px] font-medium hover:opacity-90 transition"
          >
            Get Started
            <TfiArrowTopRight className="ml-2 animate-jump animate-infinite" />
          </button>
        </div>
      </div>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

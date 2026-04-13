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
        className="fixed bottom-1 righ-2 bg-black border  border-[#DFF976] shadow-lg p-4 rounded-xl z-40 max-w-sm cursor-pointer"
      >
        <p className="text-[#DFF976] text-lg mb-2">
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
            className="cursor-pointer inline-flex items-center bg-[#DFF976] text-black px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            Get Started
            <TfiArrowTopRight className="ml-2" />
          </button>
        </div>
      </div>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

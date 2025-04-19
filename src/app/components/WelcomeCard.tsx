"use client";
import { TfiArrowTopRight } from 'react-icons/tfi';
import React, { useState } from "react";
import StartProjectModal from "./StartProjectModal";

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
        className="fixed bottom-4 left-4 bg-black border shadow-lg p-4 rounded-xl z-40 max-w-sm cursor-pointer"
      >
        <p className="text-white text-lg mb-2">
        Kickstart your first project with confidence
        </p>
        <p className="text-white text-sm mb-2">
        Easy Pricing No Upfront Payment.  </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center bg-pink-300 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-400 transition"
        >
          Get Started 
          <TfiArrowTopRight className="ml-2" />
        </button>
      </div>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

"use client";
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
        className="fixed bottom-1 righ-2 bg-black border  border-cyan-400 shadow-lg p-4 rounded-xl z-40 max-w-sm cursor-pointer"
      >
        <p className="text-cyan-400 text-lg mb-2">
        Kickstart your first project with confidence
        </p>
        <LocationMessage/>
        
        <button
          onClick={() => setShowModal(true)}
          className=" cursor-pointer   inline-flex items-center bg-teal-500  text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-400  transition"
        >
          Get Started 
          <TfiArrowTopRight className="ml-2" />
        </button>
      </div>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

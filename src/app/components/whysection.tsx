// components/WhySwitchSection.tsx
"use client"
import React from 'react';
import StartProjectModal from "./StartProjectModal";
import { useState } from 'react';

const features = [
  "No Upfront Payment ",
  "Pay only when your task is done",
  "10 Years Experience in Shopify Ecosystem",
  "24/7 expert support",
  "we handle any task related to Shopify & Shopify Plus",
  "in-house team of shopify expert and developer",

];

const WhySwitchSection: React.FC = () => {
     const [showModal, setShowModal] = useState(false);
    
      const handleCardClick = (e: React.MouseEvent) => {
        // prevent nested button click from re-triggering
        if ((e.target as HTMLElement).closest("button")) return;
        setShowModal(true);
      };
    
  return (
    <section className=" bg-teal-500 text-white py-16 pt-30 pb-30 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-10 md:mb-0 md:w-1/2">
          <span className="bg-lime-400 text-black animate-pulse animate-infinite  text-sm font-semibold px-3 py-1 rounded-md inline-block mb-4">
            Hire Top Rated Shopify Developer
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-thik  leading-tight mb-6">
          Hire a Shopify expert <br />for your business<br /><span className="text-white">stress-free.</span>
          </h2>
          <p onClick={handleCardClick} className="text-lime-400  cursor-pointer underline font-semibold hover:text-lime-300 transition">
            Make the move today →
          </p>
        </div>

        <div className="bg-black text-white p-6 md:p-10 rounded-3xl shadow-lg md:w-1/2 relative z-10">
        <span className="bg-lime-400 text-black animate-bounce animate-infinite  text-sm font-semibold px-3 py-1 rounded-md inline-block mb-4">
        Why ShopifyTasker
          </span>
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="inline-block w-6 h-6 bg-black rounded-md flex items-center text-center justify-center text-white font-bold">
                  ✓
                </span>
                <span className="text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default WhySwitchSection;

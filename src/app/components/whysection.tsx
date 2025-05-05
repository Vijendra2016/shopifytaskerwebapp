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
  "We handle any task related to Shopify & Shopify Plus",
  "In-house team of Shopify experts and developers.",

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
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-black leading-tight mb-6">
          Hire a Shopify expert <br />for your business<br /><span className="text-white bg-black">stress-free.</span>
          </h2>
          <p onClick={handleCardClick} className="text-white text-2xl  cursor-pointer  font-bold hover:text-cyan-300 transition">
           <span className="bg-black ">Make the move today → </span>
          </p>
        </div>

        <div className="bg-black text-white p-6 md:p-10 rounded-3xl shadow-lg md:w-1/2 relative z-10">
        <span className="bg-cyan-400 text-black  tracking-tight animate-bounce animate-infinite  text-2xl font-semibold px-3 py-1 rounded-md inline-block mb-4">
        Why ShopifyTasker ?
          </span>
          <ul className="space-y-5">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="inline-block w-6 h-6 bg-black border  border-cyan-400  rounded-md flex items-center text-center justify-center text-cyan-400 font-bold">
                  ✓
                </span>
                <span className="text-lg text-white tracking-tight">{feature}</span>
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

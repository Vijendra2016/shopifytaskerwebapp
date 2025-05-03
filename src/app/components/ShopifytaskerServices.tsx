// components/ServicesSection.tsx
"use client";

import { TfiArrowTopRight } from "react-icons/tfi";
import StartProjectModal from "./StartProjectModal";
import React, { useState } from "react";

const services = [
  {
    id: "01",
    title: "Shopify & Shopify Plus Task",
    description:
      "We dive deep into your eCommerce objectives and operational needs. With this clarity, we tailor Shopify and Shopify Plus solutions—from custom theme development to advanced integrations—ensuring a seamless, scalable, and high-performing online store.",
  },
  {
    id: "02",
    title: "Custom Theme Development",
    description:
      "The ShopifyTasker team helps keep your store fresh and functional with quick theme updates and custom tweaks—whether its design changes, new features, or just making things run smoother.",
  },

  {
    id: "03",
    title: "Shopify Store Development",
    description:
      "The ShopifyTasker team, a Shopify expert developer team, builds custom Shopify stores from the ground up—designed to match your brand, optimized for performance, and ready to convert visitors into customers.",
  },
  {
    id: "04",
    title: "Shopify Support Retainer",
    description:
      "Provides ongoing support through flexible retainers—handling updates, fixes, and enhancements to keep your store running smoothly every day.",
  },
  {
    id: "05",
    title: "Hire Dedicated Shopify Developer",
    description:
      "Hire our  dedicated Shopify developers to work closely with you—ensuring focused support, faster turnarounds, and custom solutions tailored to your store needs.",
  },
];

const ShopifytaskerServices: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    
      const handleCardClick = (e: React.MouseEvent) => {
        // prevent nested button click from re-triggering
        if ((e.target as HTMLElement).closest("button")) return;
        setShowModal(true);
      };

  return (

    
    <div className="px-6 md:px-30 py-16 bg-black text-white">
      {/* Scrolling title effect */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap text-6xl font-extrabold animate-marquee">
          <span className="mr-10">EXPERTISE</span>
          <span className="mr-10">EXPERTISE</span>
          <span className="mr-10">EXPERTISE</span>
          <span className="mr-10">EXPERTISE</span>
          
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border-t border-green-300 pt-10"
          >
            <div className="flex items-start space-x-4">
                       <div className="mt-4 md:mt-0 md:ml-8 flex animate-jump animate-once text-8xl items-center justify-center w-16 h-16 rounded-full border border-green-300">{service.id}.</div>
              <div className="text-2xl font-bold">{service.title}</div>
            </div>
            <div className="mt-4 md:mt-0 max-w-xl text-white">
              {service.description}
            </div>
            <div   onClick={handleCardClick} className="  cursor-pointer mt-4 md:mt-0  text-4xl md:ml-8 flex items-center justify-center w-26 h-26 rounded-full border-2  border-blue-500">
              <TfiArrowTopRight className="text-10xl animate-jump-in animate-infinite" />
            </div>
          </div>
        ))}
      </div>
       <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ShopifytaskerServices;

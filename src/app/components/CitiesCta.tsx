"use client";

import { useState } from "react";
import { TfiArrowTopRight } from 'react-icons/tfi';
import StartProjectModal from "./StartProjectModal";
import Image from "next/image";

const CitiesCta = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full bg-[#fefdf9] flex flex-col items-center gap-2 px-4 lg:px-20 md:px-20 pt-20 pb-20 text-white">
      <h6 className="text-black text-3xl lg:text-5xl md:text-5xl font-bold tracking-tight text-center">
        Get Affordable Shopify & Shopify Plus Help — Pay Only After Delivery
      </h6>
      <p className="text-black text-sm lg:text-2xl md:text-2xl text-center pt-5 pb-5">
        Whether you need to upgrade, fix, or build your Shopify or Shopify Plus store — we handle it all. No upfront payment, just results. Start now by creating your task in under a minute.
      </p>

      <button
        onClick={() => setShowModal(true)}
        className="flex cursor-pointer duration-300 ease-in items-center gap-4 bg-black text-white py-6 px-12 lg:px-56 md:px-66 rounded-full hover:bg-teal-500 transition"
      >
        <div className="bg-white p-2 rounded">
          <Image
            src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/67860b0fa33a316e968231d7_Team%20Member%20Image%203.jpg"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain animate-wiggle animate-infinite"
          />
        </div>
        <span className="text-xl lg:text-5xl md:text-3xl font-semibold">REQUEST FREE QUOTE</span>
        <TfiArrowTopRight className="ml-2 text-5xl animate-jump animate-infinite" />
      </button>

      <Image
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68183d299128df529d5bfa26_footernewimage.png"
        alt="Footer Visual"
        width={140}
        height={140}
        className="object-contain animate-fade-right animate-infinite mt-6"
      />
      <Image
        src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/680baca7a144a823c527edf7_shopifytasker-review.png"
        alt="ShopifyTasker Review"
        width={140}
        height={140}
        className="object-contain mt-2"
      />

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default CitiesCta;

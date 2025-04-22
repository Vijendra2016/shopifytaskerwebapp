// components/ExitIntentModal.tsx
"use client";

import { useState } from "react";
import useExitIntent from "../hooks/useExitIntent";
import GeoMessage from "./GeoMessage";
import Image from "next/image"; 
const ExitIntentModal = () => {
  const [show, setShow] = useState(false);

  useExitIntent(() => {
    setTimeout(() => setShow(true), 500); // optional delay
  });

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full text-center relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-gray-400 hover:text-black"
        >
          ×
        </button>
        <Image
                     src="https://cdn.prod.website-files.com/67860b0fa33a316e96823102/68072b50352ae24c799cbfde_shopify-developer-newyork.png" // Replace with actual URL
        
                         alt="shopify developer in los angeles"
                          width={800}
                          height={800}
                          className="object-contain"
                        />
        <GeoMessage />
        <p className="mt-2 text-sm text-gray-600">
          Book a quick call with one of our Shopify experts before you go!
        </p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Book a Free Call
        </button>
      </div>
    </div>
  );
};

export default ExitIntentModal;

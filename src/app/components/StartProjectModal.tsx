// components/StartProjectModal.tsx
"use client";

import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartProjectModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
      <div className="w-full md:w-[500px] h-full bg-white p-6 overflow-y-auto relative">
        <button className="absolute top-4 right-4 text-sm" onClick={onClose}>
          ✕ close
        </button>
        <h2 className="text-3xl font-bold mb-2">Get Started</h2>
        <p className="mb-4 text-gray-600">
            Create your project we will be back to you asap .
        </p>
        <label className="block mb-2 font-semibold">Your website</label>
        <input
          type="text"
          placeholder="example.com"
          className="w-full border p-2 rounded mb-4"
        />

        <label className="block mb-2 font-semibold">What expert would you like to hire?</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {["let storetasker decide", "shopify developer", "designer", "marketer", "ecomm manager", "agency / studio"].map((label) => (
            <button key={label} className="px-4 py-2 border rounded hover:bg-gray-100">
              {label}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500">
            New test
        </p>
      </div>
    </div>
  );
}

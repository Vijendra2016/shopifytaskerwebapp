// components/WelcomeCard.tsx
"use client";

import React, { useState } from "react";
import StartProjectModal from "./StartProjectModal";

export default function WelcomeCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 bg-green-300 border shadow-lg p-4 rounded-xl z-40 max-w-sm">
        <p className="text-black text-3xl mb-2">Welcome to your store! Ready to start your first project?</p>
        <button
          onClick={() => setShowModal(true)}
          className="text-sm text-blue-600 underline"
        >
          Get Started →
        </button>
      </div>
      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

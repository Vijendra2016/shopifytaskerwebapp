"use client";

import { useState } from "react";
import { TfiArrowRight } from "react-icons/tfi";
import StartProjectModal from "./StartProjectModalquote";

export default function CTAQuote() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="quote">
      <button
        onClick={() => setShowModal(true)}
        className="cursor-pointer inline-flex mt-10 items-center bg-teal-500 text-black px-4 py-2 rounded-full text-xl font-medium hover:bg-teal-600 hover:text-black transition"
      >
        Claim Your Free Quote Today <TfiArrowRight className="ml-2" />
      </button>

      <StartProjectModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
